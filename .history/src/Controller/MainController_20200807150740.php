<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\SkillsRepository;
use App\Repository\PortfolioRepository;
use Symfony\Component\HttpFoundation\Request;


class MainController extends AbstractController
{
    /**
     * @Route("/", name="main")
     */
    public function index(SkillsRepository $repoSkills, PortfolioRepository $repoPortfolio, Request $request)
    {
        $skills = $repoSkills->findAll();
        $portfolio = $repoPortfolio->findAll();

        //vérification de la validation du formulaire
       
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
            'skills' => $skills,
            'portfolio' => $portfolio,
        ]);
    }

    /**
     * @Route("/sendmail", name="sendmail", methods={"POST","GET"})
     */
    public function sendMail(Request $request ,\Swift_Mailer $mailer)
    {

        $mail = htmlspecialchars($request->get('mail'));
        $name = htmlspecialchars($request->get('name'));
        $firstName = htmlspecialchars($request->get('firstname'));
        $msg = htmlspecialchars($request->get('message'));
        
        // $msg = $_GET['message'];

        // on envoi le mail
        $message = (new \Swift_Message('Nouveau contact'))
        // on attribut l'expéditeur
        ->setFrom($mail)
        // on attribut le destinataire
        ->setTo('alliaume.nicolas@gmail.com')
        // on crée le message avec la vue Twig
        ->setBody(
            $this->render('emails/contact.html.twig', [
            'name' => $name,
            'firstName' => $firstName,
            'message' => $msg
            ]),
            'text/html'
        );
        $mailer->send($message);
        $this->addFlash('message' , 'Votre message à bien été envoyé');
    }

    /**
     * @Route("/legacy", name="mentions")
     */
    public function mentions(){
        return $this->render('mentions_legales/mentions-legales.html.twig');
    }
    
}
