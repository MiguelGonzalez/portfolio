<?php

namespace SkillsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller {
    /**
     * @Route("/skills", name="skills")
     */
    public function indexAction() {
        return $this->render('SkillsBundle:Default:index.html.twig');
    }
}
