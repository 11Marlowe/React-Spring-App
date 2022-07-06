package com.marlowe.rpgCharacterCreator.jpaRepositories;

import com.marlowe.rpgCharacterCreator.entities.RpgCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RpgCharacterRepository extends JpaRepository<RpgCharacter, Long> {


}
