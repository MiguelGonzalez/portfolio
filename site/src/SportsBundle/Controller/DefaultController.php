<?php

namespace SportsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller {
    /**
     * @Route("/sports", name="sports")
     */
    public function indexAction() {
        return $this->render('SportsBundle:Default:index.html.twig');
    }
}
