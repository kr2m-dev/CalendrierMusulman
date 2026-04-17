/**
 * Données des événements du calendrier musulman
 * Magals, fêtes islamiques et signification des jours
 */

const CalendarEvents = {
    // Types d'événements
    eventTypes: {
        MAGAL: { color: 'purple', label: 'Magal', icon: '⭐' },
        FETE_ISLAMIQUE: { color: 'emerald', label: 'Fête Islamique', icon: '🕌' },
        JOUR_NON_RECOMMANDE: { color: 'red', label: 'Non recommandé', icon: '⚠️' },
        JEUNE_RECOMMANDE: { color: 'yellow', label: 'Jeûne recommandé', icon: '🌙' },
        RASAGE_RECOMMANDE: { color: 'blue', label: 'Rasage recommandé', icon: '✂️' },
        RELATIONS_DECONSEILLEES: { color: 'amber', label: 'Relations déconseillées', icon: '🔴' },
        JOUR_FAVORABLE: { color: 'green', label: 'Favorable', icon: '✅' }
    },

    // Informations sur les mois hégiriens
    hijriMonths: {
        1: { name: 'Muharram', arabic: 'محرم', description: 'Mois sacré, début de l année hégirienne' },
        2: { name: 'Safar', arabic: 'صفر', description: 'Mois du voyage' },
        3: { name: 'Rabi al-awwal', arabic: 'ربيع الأول', description: 'Naissance du Prophète' },
        4: { name: 'Rabi al-thani', arabic: 'ربيع الآخر', description: 'Deuxième printemps' },
        5: { name: 'Jumada al-awwal', arabic: 'جمادى الأولى', description: 'Premier mois de l hiver' },
        6: { name: 'Jumada al-thani', arabic: 'جمادى الآخرة', description: 'Deuxième mois de l hiver' },
        7: { name: 'Rajab', arabic: 'رجب', description: 'Mois sacré' },
        8: { name: 'Shaban', arabic: 'شعبان', description: 'Mois de la distribution' },
        9: { name: 'Ramadan', arabic: 'رمضان', description: 'Mois du jeûne' },
        10: { name: 'Shawwal', arabic: 'شوال', description: 'Mois de l élévation' },
        11: { name: 'Dhu al-Qidah', arabic: 'ذو القعدة', description: 'Mois sacré' },
        12: { name: 'Dhu al-Hijjah', arabic: 'ذو الحجة', description: 'Mois du pèlerinage' }
    },

    // Magals (événements majeurs Mourides)
    magals: [
        {
            id: 'gamou-1447',
            name: 'Gamou 1447',
            hijriDay: 12,
            hijriMonth: 3,
            hijriYear: 1447,
            gregorianDate: '2025-09-05',
            description: 'Naissance du Prophète Muhammad (PSL)',
            community: 'Toutes communautés',
            location: 'Tivaouane, Touba',
            type: 'MAGAL',
            color: 'purple',
            importance: 'high'
        },
        {
            id: 'grand-magal-touba',
            name: 'Grand Magal de Touba',
            hijriDay: 18,
            hijriMonth: 2,
            hijriYear: 1447,
            gregorianDate: '2025-09-11',
            description: 'Commémoration du départ en exil de Cheikh Ahmadou Bamba',
            community: 'Mouridiya',
            location: 'Touba',
            type: 'MAGAL',
            color: 'purple',
            importance: 'highest'
        },
        {
            id: 'magal-mor-diara',
            name: 'Magal Mame Mor Diara',
            hijriDay: 15,
            hijriMonth: 10,
            hijriYear: 1447,
            gregorianDate: '2026-04-04',
            description: 'Père de Cheikh Ahmadou Bamba',
            community: 'Mouridiya',
            location: 'Darou Marnane',
            type: 'MAGAL',
            color: 'purple',
            importance: 'high'
        },
        {
            id: 'magal-ibrahima-mbacke',
            name: 'Magal S. Ibrahima Mbacké',
            hijriDay: 17,
            hijriMonth: 10,
            hijriYear: 1447,
            gregorianDate: '2026-04-06',
            description: 'Serigne Souhaibou',
            community: 'Mouridiya',
            location: 'Darou Marnane',
            type: 'MAGAL',
            color: 'purple',
            importance: 'high'
        },
        {
            id: 'magal-ahad-mbacke',
            name: 'Magal S. A. Ahad Mbacké',
            hijriDay: 23,
            hijriMonth: 10,
            hijriYear: 1447,
            gregorianDate: '2026-04-12',
            description: '2ème Khalife des Mourides',
            community: 'Mouridiya',
            location: 'Touba',
            type: 'MAGAL',
            color: 'purple',
            importance: 'high'
        },
        {
            id: 'magal-mbacke-madina',
            name: 'Magal S. Mbacké Madina',
            hijriDay: 25,
            hijriMonth: 10,
            hijriYear: 1447,
            gregorianDate: '2026-04-14',
            description: 'Frère de Cheikh Ahmadou Bamba',
            community: 'Mouridiya',
            location: 'Darou Marnane',
            type: 'MAGAL',
            color: 'purple',
            importance: 'high'
        }
    ],

    // Fêtes islamiques
    islamicFestivals: [
        {
            id: 'aid-al-fitr-1446',
            name: 'Aïd al-Fitr 1446',
            gregorianDate: '2025-03-31',
            description: 'Fête de la rupture du jeûne - fin du Ramadan',
            type: 'FETE_ISLAMIQUE',
            color: 'emerald',
            importance: 'highest'
        },
        {
            id: 'aid-al-adha-1446',
            name: 'Aïd al-Adha 1446',
            gregorianDate: '2025-06-06',
            description: 'Fête du sacrifice',
            type: 'FETE_ISLAMIQUE',
            color: 'emerald',
            importance: 'highest'
        },
        {
            id: 'nouvel-an-1447',
            name: 'Nouvel An Hégirien 1447',
            gregorianDate: '2025-07-07',
            description: '1er Muharram 1447',
            type: 'FETE_ISLAMIQUE',
            color: 'emerald',
            importance: 'high'
        },
        {
            id: 'ashura-1447',
            name: 'Ashura 1447',
            gregorianDate: '2025-07-16',
            description: '10ème jour de Muharram',
            type: 'FETE_ISLAMIQUE',
            color: 'emerald',
            importance: 'high'
        },
        {
            id: 'mawlid-1447',
            name: 'Mawlid 1447',
            gregorianDate: '2025-09-05',
            description: 'Naissance du Prophète',
            type: 'FETE_ISLAMIQUE',
            color: 'emerald',
            importance: 'highest'
        },
        {
            id: 'laylat-miraj',
            name: 'Laylat al-Miraj',
            gregorianDate: '2026-01-16',
            description: 'Nuit de l ascension',
            type: 'FETE_ISLAMIQUE',
            color: 'emerald',
            importance: 'high'
        },
        {
            id: 'laylat-baraat',
            name: 'Laylat al-Baraat',
            gregorianDate: '2026-02-04',
            description: 'Nuit du pardon',
            type: 'FETE_ISLAMIQUE',
            color: 'emerald',
            importance: 'high'
        },
        {
            id: 'debut-ramadan',
            name: 'Début Ramadan 1447',
            gregorianDate: '2026-02-20',
            description: 'Début du mois de jeûne',
            type: 'FETE_ISLAMIQUE',
            color: 'emerald',
            importance: 'highest'
        },
        {
            id: 'laylat-qadr',
            name: 'Laylat al-Qadr',
            gregorianDate: '2026-03-18',
            description: 'Nuit du Destin',
            type: 'FETE_ISLAMIQUE',
            color: 'emerald',
            importance: 'highest'
        },
        {
            id: 'aid-al-fitr-1447',
            name: 'Aïd al-Fitr 1447',
            gregorianDate: '2026-03-22',
            description: 'Fête de la rupture du jeûne',
            type: 'FETE_ISLAMIQUE',
            color: 'emerald',
            importance: 'highest'
        }
    ],

    /**
     * Récupère les événements pour une date donnée
     */
    getEventsForDate(date) {
        const events = [];
        const dateString = date.toISOString().split('T')[0];

        // Vérifier les Magals
        this.magals.forEach(magal => {
            if (magal.gregorianDate === dateString) {
                events.push(magal);
            }
        });

        // Vérifier les fêtes
        this.islamicFestivals.forEach(festival => {
            if (festival.gregorianDate === dateString) {
                events.push(festival);
            }
        });

        // Ajouter la signification du jour
        const significance = this.getDaySignificance(date);
        if (significance) {
            events.push(significance);
        }

        return events;
    },

    /**
     * Récupère les événements pour un mois entier
     */
    getEventsForMonth(year, month) {
        const events = [];
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);

        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const dayEvents = this.getEventsForDate(d);
            if (dayEvents.length > 0) {
                events.push({
                    date: new Date(d),
                    events: dayEvents
                });
            }
        }

        return events;
    },

    /**
     * Détermine la signification d'un jour selon la tradition
     * Basé sur calendriermusulman.net
     */
    getDaySignificance(date) {
        const dayOfWeek = date.getDay();
        const dateNum = date.getDate();
        const dateString = date.toISOString().split('T')[0];

        // Jours non recommandés (rouge)
        if ([2, 3, 5, 13, 16, 17, 24, 25].includes(dateNum)) {
            return {
                id: `non-recommande-${dateString}`,
                name: 'Jour non recommandé',
                description: 'Evitez: demenagement, voyage, mariage, circoncision, premier usage de vetements',
                type: 'JOUR_NON_RECOMMANDE',
                color: 'red',
                icon: '⚠️'
            };
        }

        // Rasage recommandé (bleu)
        if ([4, 11, 12, 18, 19, 26].includes(dateNum)) {
            return {
                id: `rasage-${dateString}`,
                name: 'Rasage recommandé',
                description: 'Jour favorable pour se raser',
                type: 'RASAGE_RECOMMANDE',
                color: 'blue',
                icon: '✂️'
            };
        }

        // Relations déconseillées (marron)
        if ([6, 14, 20, 21, 27].includes(dateNum)) {
            return {
                id: `relations-${dateString}`,
                name: 'Relations déconseillées',
                description: 'Evitez les relations conjugales ce jour',
                type: 'RELATIONS_DECONSEILLEES',
                color: 'amber',
                icon: '🔴'
            };
        }

        // Jeûne recommandé (jaune) - Vendredi
        if (dayOfWeek === 5) {
            return {
                id: `jeune-${dateString}`,
                name: 'Jeûne recommandé',
                description: 'Jour du vendredi, jeûne recommandé',
                type: 'JEUNE_RECOMMANDE',
                color: 'yellow',
                icon: '🌙'
            };
        }

        return null;
    },

    /**
     * Vérifie si c est un jour de Magal
     */
    isMagalDay(date) {
        const dateString = date.toISOString().split('T')[0];
        return this.magals.some(magal => magal.gregorianDate === dateString);
    },

    /**
     * Vérifie si c est une fête islamique
     */
    isIslamicFestival(date) {
        const dateString = date.toISOString().split('T')[0];
        return this.islamicFestivals.some(festival => festival.gregorianDate === dateString);
    },

    /**
     * Obtient les informations sur un mois hégirien
     */
    getHijriMonthInfo(monthNumber) {
        return this.hijriMonths[monthNumber] || null;
    },

    /**
     * Obtient le nom du type d événement
     */
    getEventTypeLabel(type) {
        return this.eventTypes[type]?.label || type;
    },

    /**
     * Obtient la couleur associée
     */
    getEventColor(type) {
        return this.eventTypes[type]?.color || 'gray';
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CalendarEvents;
}
