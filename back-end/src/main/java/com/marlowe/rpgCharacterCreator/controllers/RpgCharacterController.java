package com.marlowe.rpgCharacterCreator.controllers;

import com.marlowe.rpgCharacterCreator.entities.RpgCharacter;
import com.marlowe.rpgCharacterCreator.services.CharacterManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RpgCharacterController {

    @Autowired
    private CharacterManager characterManager;

    public RpgCharacterController() {

    }

    @GetMapping(path="/characters")
    public List<RpgCharacter> getCharacters() {
        return characterManager.getCharacters();
    }

    @PostMapping(path = "/characters")
    public RpgCharacter saveCharacter(@RequestBody RpgCharacter character) {
        return characterManager.saveCharacter(character);
    }
}
