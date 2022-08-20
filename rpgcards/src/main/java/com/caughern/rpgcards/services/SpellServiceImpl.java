package com.caughern.rpgcards.services;

import java.util.HashSet;
import java.util.Set;
import org.springframework.stereotype.Service;
import com.caughern.rpgcards.domain.Spell;
import com.caughern.rpgcards.repositories.SpellRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class SpellServiceImpl implements SpellService {
    private final SpellRepository spellRepository;

    public SpellServiceImpl(SpellRepository spellRepository) {
        this.spellRepository = spellRepository;
    }

    @Override
    public Set<Spell> getSpells() {
        log.debug("SpellService");

        Set<Spell> spellSet = new HashSet<>();
        spellRepository.findAll().iterator().forEachRemaining(spellSet::add);
        return spellSet;
    }

}
