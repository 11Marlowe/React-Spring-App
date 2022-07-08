package com.marlowe.rpgCharacterCreator.services;

import com.marlowe.rpgCharacterCreator.entities.RpgCharacter;
import com.marlowe.rpgCharacterCreator.jpaRepositories.RpgCharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterManager {

    @Autowired
    private RpgCharacterRepository rpgCharacterRepository;

    public RpgCharacter saveCharacter(RpgCharacter character) {
        return rpgCharacterRepository.save(character);
    }

    public List<RpgCharacter> getCharacters() {
        return rpgCharacterRepository.findAll();
    }

    public boolean deleteCharacter(Long id) {
        Optional<RpgCharacter> character = rpgCharacterRepository.findById(id);

        if (character.isPresent()) {
            rpgCharacterRepository.delete(character.get());

            return true;
        }

        return false;
    }

    public boolean updateCharacter(Long id, RpgCharacter updatedCharacter) {
        Optional<RpgCharacter> character = rpgCharacterRepository.findById(id);

        if (character.isPresent()) {
            RpgCharacter charToUpdate = character.get();
            charToUpdate.setName(updatedCharacter.getName());
            charToUpdate.setRpgClass(updatedCharacter.getRpgClass());
            rpgCharacterRepository.save(charToUpdate);

            return true;
        }

        return false;
    }

    public RpgCharacter getCharacter(Long id) {
        return rpgCharacterRepository.findById(id).get();
    }
}
