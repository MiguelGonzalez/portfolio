<?php

namespace SportsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Kernel;

class DefaultController extends Controller {
    /**
     * @Route("/sports", name="sports")
     */
    public function indexAction() {
        return $this->render('SportsBundle:Default:index.html.twig');
    }

    /**
     * @Route("/sports/{activityName}", name="activity")
     */
    public function activityAction($activityName) {
    	return $this->render('SportsBundle:Default:activity.html.twig');
    }

    /**
     * @Route("/sports/{activityName}/data", name="activity_data")
     */
    public function activityDataAction($activityName) {

    	$activityKmlFile = $this
    			->container
    			->get( 'kernel' )
    			->getProjectDir() . '/web/assets/app/documents/sports/' . $activityName . '.kml';

    	if(file_exists($activityKmlFile)) {

    		$fileProcessed = $this->processFile($activityKmlFile);

    		return new JsonResponse(array(
				'exists' => true,
				'path' => $activityKmlFile,
				'data' => $fileProcessed));
    	} else {
    		return new JsonResponse(array('exists' => false, 'path' => $activityKmlFile));	
    	}
    }

    private function processFile($file) {
    	
    	$kml = simplexml_load_file($file);
    	$kmlProcessed = array();

    	$kmlProcessed['name'] = (string) $kml->Folder->name;

    	$points = array();

        $minLongitud = -1;
        $maxLongitud = -1;

        $minLatitud = -1;
        $maxLatitud = -1;

        $numPoint = 0;

    	foreach($kml->Folder->Folder as $folder) {
    		if("Track Points" === (string) $folder->name) {

	   			foreach($folder->Placemark as $placemark) {
    				$timeStart = (string) $placemark->TimeSpan->begin;
    				$timeEnd = (string) $placemark->TimeSpan->end;
    				$coordinates = explode(',', (string) $placemark->Point->coordinates);

       				array_push($points, array(
    					'start' => $timeStart,
    					'end' => $timeEnd,
    					'coordinates' => $coordinates
					));

                    if($numPoint === 0) {
                        $minLongitud = $maxLongitud = $coordinates[0];
                        $minLatitud = $maxLatitud = $coordinates[1];
                    } else {
                        if($coordinates[0] < $minLongitud) {
                            $minLongitud = $coordinates[0];
                        }
                        if($coordinates[0] > $maxLongitud) {
                            $maxLongitud = $coordinates[0];
                        }

                        if($coordinates[1] < $minLatitud) {
                            $minLatitud = $coordinates[1];
                        }
                        if($coordinates[1] > $maxLatitud) {
                            $maxLatitud = $coordinates[1];
                        }
                    }

                    $numPoint ++;
    			}
    		}
    	}

        $kmlProcessed['center']['lon'] = ($minLongitud + $maxLongitud) / 2;
        $kmlProcessed['center']['lat'] = ($minLatitud + $maxLatitud) / 2;
        $kmlProcessed['rect']['minLatitud'] = $minLatitud;
        $kmlProcessed['rect']['maxLatitud'] = $maxLatitud;
        $kmlProcessed['rect']['minLongitud'] = $minLongitud;
        $kmlProcessed['rect']['maxLongitud'] = $maxLongitud;
    	$kmlProcessed['points'] = $points;

    	return $kmlProcessed;
    }
}
