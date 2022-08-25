package com.caughern.rpgcards.bootstrap;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import com.caughern.rpgcards.domain.Spell;
import com.caughern.rpgcards.repositories.SpellRepository;

@Component
public class SpellBootstrap implements CommandLineRunner {
    private final SpellRepository spellRepository;

    public SpellBootstrap(SpellRepository spellRepository) {
        this.spellRepository = spellRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        int count = SpellRepository.findAll().size();
    }

    private void loadData() {

        Spell spell1 = new Spell();
        // Spell spell2 = new Spell();

        spell1.setSlug("acid arrow");
        spell1.setName("Acid Arrow");
        spell1.setDesc(
                "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.");

        spell1.setHigher_level(
                "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.");

        spell1.setPage("phb 259");
        spell1.setRange("90 feet");
        spell1.setComponents("V, S, M");
        spell1.setMaterial("Powdered rhubarb leaf and an adder's stomach.");

        spell1.setRitual("no");
        spell1.setDuration("Instantaneous");
        spell1.setConcentration("no");
        spell1.setCasting_time("1 action");
        spell1.setLevel("2nd-level");
        spell1.setLevel_int(2);
        spell1.setSchool("Evocation");
        spell1.setDnd_class("Druid, Wizard");

        spellRepository.save(spell1);

    }


}
