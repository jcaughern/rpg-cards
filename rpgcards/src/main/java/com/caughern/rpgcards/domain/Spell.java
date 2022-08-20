package com.caughern.rpgcards.domain;

import javax.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode
public class Spell {
    @Id
    @GeneratedValue
    private Long id;

    private String slug;
    private String name;
    private String desc;
    private String higher_level;
    private String page;
    private String range;
    private String components;
    private String material;
    private String ritual;
    private String duration;
    private String concentration;
    private String casting_time;
    private String level;
    private Integer level_int;
    private String school;
    private String dnd_class;
    private String archetype;
    private String circles;
    private String document__slug;
    private String document__title;
    private String document__license_url;
    
    
}
