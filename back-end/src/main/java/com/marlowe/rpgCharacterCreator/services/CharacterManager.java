package com.marlowe.rpgCharacterCreator.services;

import com.marlowe.rpgCharacterCreator.entities.RpgCharacter;
import com.marlowe.rpgCharacterCreator.jpaRepositories.RpgCharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        RpgCharacter character = rpgCharacterRepository.findById(id).get();
        rpgCharacterRepository.delete(character);
        return true;
    }
}
