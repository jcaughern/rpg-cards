package com.caughern.rpgcards.bootstrap;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import com.caughern.rpgcards.domain.Spell;
import com.caughern.rpgcards.repositories.SpellRepository;

@Component
public class SpellBootstrap implements ApplicationListener<ContextRefreshedEvent> {
    private final SpellRepository spellRepository;

    public SpellBootstrap(SpellRepository spellRepository) {
        this.spellRepository = spellRepository;
    }

    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
        spellRepository.saveAll(getSpells());
        
    }

    private List<Spell> getSpells() {
        return null;
    }
}
