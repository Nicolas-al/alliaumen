<?php

namespace App\Controller;

use App\Entity\Portfolio;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;


class ModoController extends AbstractController
{
    /**
     * @Route("/modo", name="modo")
     */
    public function index(Portfolio $portfolio, Request $request, EntityManagerInterface $manager)
    {

        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio
        ]);
    }
}
