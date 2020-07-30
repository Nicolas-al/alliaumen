<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SkillsRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks()
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
    private $Name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Logo;

    /**
     * @Vich\UploadableField(mapping="images-skills", fileNameProperty="Logo")
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
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->Logo;
    }

    public function setLogo(string $Logo): self
    {
        $this->Logo = $Logo;

        return $this;
    }
    public function getLogoFile()
    {
        return $this->logoFile;
    }

    public function setLogoFile(File $logoFile = null)
    {
        $this->logoFile = $logoFile;
        if ($logoFile) {
            $this->updatedAt = new \DateTime('now');
        }
    }
    public function __toString(): string
    {
        return 'qqc??';
    }
}
