<?php

namespace App\Controller;

use App\Entity\Portfolio;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ModoController extends AbstractController
{
    /**
     * @Route("/modo", name="modo")
     */
    public function index(Portfolio $portfolio)
    {

        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio,
        ]);
    }
}
