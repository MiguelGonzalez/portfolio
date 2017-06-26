<?php

namespace EducationBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller {
    /**
     * @Route("/education", name="education")
     */
    public function indexAction() {
        return $this->render('EducationBundle:Default:index.html.twig');
    }
}
