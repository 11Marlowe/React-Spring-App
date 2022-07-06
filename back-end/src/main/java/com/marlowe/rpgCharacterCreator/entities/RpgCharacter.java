package com.marlowe.rpgCharacterCreator.entities;

import javax.persistence.*;

@Entity
public class RpgCharacter {

    public enum RpgClass {
        Knight("Knight"), Mage("Mage"), Priest("Priest");

        private final String name;

        public String getName() {
            return name;
        }

        RpgClass(String name){
            this.name = name;
        }
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @Enumerated(EnumType.STRING)
    private RpgClass rpgClass;

    public RpgCharacter () {}

    public RpgClass getRpgClass() {
        return rpgClass;
    }

    public void setRpgClass(RpgClass rpgClass) {
        this.rpgClass = rpgClass;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
