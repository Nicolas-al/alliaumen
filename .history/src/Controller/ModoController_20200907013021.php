<?php

namespace App\Controller;

use App\Entity\Portfolio;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;


class ModoController extends AbstractController
{
    /**
     * @Route("/modo", name="modo")
     */
    public function index(Portfolio $portfolio)
    {

        return $this->render('comments/index.html.twig', [
            'controller_name' => 'ModoController',
        ]);
    }
}
