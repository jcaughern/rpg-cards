package com.caughern.rpgcards.controllers;

import java.util.Set;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.caughern.rpgcards.domain.Spell;
import com.caughern.rpgcards.services.SpellService;

@RestController
public class SpellController {
    private final SpellService spellService;

    public SpellController(SpellService spellService) {
        this.spellService = spellService;
    }

    @GetMapping("/spells")
    Set<Spell> all() {
        return spellService.getSpells();
    }
}
