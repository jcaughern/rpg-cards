package com.caughern.rpgcards.repositories;

import org.springframework.data.repository.CrudRepository;
import com.caughern.rpgcards.domain.Spell;

public interface SpellRepository extends CrudRepository<Spell, Long> {
    
}
