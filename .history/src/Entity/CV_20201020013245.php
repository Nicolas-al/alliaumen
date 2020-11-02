<?php

namespace App\Entity;

use App\Repository\CVRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CVRepository::class)
 */
class CV
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Diplôme;

    /**
     * @ORM\Column(type="integer")
     */
    private $Age;

    /**
     * @ORM\Column(type="text")
     */
    private $FormationWeb;

    /**
     * @ORM\Column(type="text")
     */
    private $Parcours;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDiplôme(): ?string
    {
        return $this->Diplôme;
    }

    public function setDiplôme(string $Diplôme): self
    {
        $this->Diplôme = $Diplôme;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->Age;
    }

    public function setAge(int $Age): self
    {
        $this->Age = $Age;

        return $this;
    }

    public function getFormationWeb(): ?string
    {
        return $this->FormationWeb;
    }

    public function setFormationWeb(string $FormationWeb): self
    {
        $this->FormationWeb = $FormationWeb;

        return $this;
    }

    public function getParcours(): ?string
    {
        return $this->Parcours;
    }

    public function setParcours(string $Parcours): self
    {
        $this->Parcours = $Parcours;

        return $this;
    }
}
