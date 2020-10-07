<?php

namespace App\Controller;

use App\Entity\Portfolio;
use App\Repository\CommentsRepository;
use App\Repository\PortfolioRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ModoController extends AbstractController
{

    /**
     * @Route("/modo", name="home_modo")
     */
    public function index(PortfolioRepository $repoPortfolio){
        $portfolio = $repoPortfolio->findAll();

        return $this->render('modo/index.html.twig' ,[ 
            'portfolio' => $portfolio
            ]);
    }

    /**
     * @Route("/modo/{id}", name="modo_project")
     */
    public function showProject(Portfolio $portfolio, CommentsRepository $repoComments, $id)
    {     
         if (isset($_GET["action"]) && $_GET["action"] == "deleteCom"){
                if (isset($_GET['commentId'])){
                    $id = $_GET['commentId'];
                    $comment = $repoComments->find($id);
                    var_dump($id);

                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->remove($comment);
                    $entityManager->flush();
                }
        }
        $comments = $repoComments->findAll();
        $this->banIp();

        return $this->render('portfolio/index.html.twig', [
            'portfolio' => $portfolio,
            'comments' => $comments
        ]);
    }

    Public function banIp()
    {
        if (isset($_GET["action"]) && $_GET["action"] == "ban")
        {
            $ip = array($_SERVER['REMOTE_ADDR']);

            $json = json_encode($ip);
            $bytes = file_put_contents("/Users/nicolasalliaume/Documents/Code/Local-sites/ProjetsOpenclassroom/Projet5/ip.json", $json);

            // var_dump(
            //     $ip,
            //     json_encode($ip, JSON_NUMERIC_CHECK)
            //    );

            $ip = json_decode(file_get_contents('/Users/nicolasalliaume/Documents/Code/Local-sites/ProjetsOpenclassroom/Projet5/ip.json'), true);
            var_dump($ip);   
        }
    }
}
