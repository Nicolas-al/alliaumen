<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ModoController extends AbstractController
{
    /**
     * @Route("/modo", name="modo")
     */
    public function index(User $user)
    {
        if ($this->getUser()){
            $this->redirectToRoute('app_login');
        }
        
        return $this->render('modo/index.html.twig', [
            'controller_name' => 'ModoController',
        ]);
    }
}
