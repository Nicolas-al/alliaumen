<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SkillsRepository")
 * @Vich\Uploadable
 */
class Skills
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
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * var string|null
     */
    private $logo;

    /**
     * @Vich\UploadableField(mapping="uploads_images", fileNameProperty="logo")
     * @var File
     */
    private $logoFile;

     /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getLogo()
    {
        return $this->logo;
    }

    public function setLogo(string $logo)
    {
        $this->logo = $logo;

        return $this;
    }
    public function setLogoFile(File $logo = null)
    {
        $this->logoFile = $logo;
        if ($logo) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }

    public function getLogoFile()
    {
        return $this->logoFile;
    }
}
