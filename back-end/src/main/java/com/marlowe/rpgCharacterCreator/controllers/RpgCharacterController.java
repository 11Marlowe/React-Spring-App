package com.marlowe.rpgCharacterCreator.controllers;

import com.marlowe.rpgCharacterCreator.entities.RpgCharacter;
import com.marlowe.rpgCharacterCreator.services.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RpgCharacterController {

    @Autowired
    private CharacterService characterService;

    public RpgCharacterController() {

    }

    @GetMapping(path="/characters")
    public List<RpgCharacter> getCharacters() {
        return characterService.getCharacters();
    }

    @GetMapping(path="/characters/{id}")
    public RpgCharacter getCharacter(@PathVariable Long id) {
        return characterService.getCharacter(id);
    }

    @PostMapping(path="/characters")
    public RpgCharacter saveCharacter(@RequestBody RpgCharacter character) {
        return characterService.saveCharacter(character);
    }

    @DeleteMapping(path="/characters")
    public boolean deleteCharacter(@RequestParam Long id) {
        return characterService.deleteCharacter(id);
    }

    @PutMapping("/characters/{id}")
    public boolean editCharacter(@PathVariable Long id, @RequestBody RpgCharacter character) {
        return characterService.updateCharacter(id, character);
    }
}
