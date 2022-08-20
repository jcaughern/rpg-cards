package com.caughern.rpgcards.services;

import java.util.Set;
import com.caughern.rpgcards.domain.Spell;

public interface SpellService {
    Set<Spell> getSpells();
}
