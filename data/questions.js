/* Question bank written from the National Pesticide Applicator Certification
   Core Manual (second edition, 2014). Each question cites the manual page it
   was drawn from. That printed page number is turned into a PDF deep link
   through data/manual-pages.js.
   Coverage so far: chapter 1 (Pest Management). Chapters 2 through 11 are
   still to be written; docs/question-authoring.md is the recipe. */
const QUESTION_BANK = [
 {
  "id": "s1-001",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Which of these matches the manual's definition of a pest?",
  "choices": [
   "Any insect, rodent, or other organism that carries a disease capable of being passed to humans, livestock, or companion animals",
   "Any organism introduced from another country that has no natural enemies in its new environment",
   "An undesirable organism that injures humans, desirable plants and animals, manufactured products, or natural substances",
   "Any plant or animal population that has grown large enough to cause measurable economic losses to agriculture"
  ],
  "answer": 2,
  "explanation": "A pest is defined by the injury it causes: anything that harms people, desirable plants or animals, manufactured products, or natural substances. Foreign origin, disease carriage, or economic scale may describe particular pests but none of them is the definition.",
  "page": "2"
 },
 {
  "id": "s1-002",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What are the four main groups of pest organisms?",
  "choices": [
   "Weeds, invertebrates, pathogens, and vertebrates",
   "Insects, rodents, fungi, and undesirable weeds",
   "Bacteria, viruses, arthropods, and small mammals",
   "Weeds, insects, nematodes, and disease agents"
  ],
  "answer": 0,
  "explanation": "The manual groups pests as weeds (undesirable plants), invertebrates (insects, mites, ticks, spiders, snails, and slugs), disease agents or pathogens, and vertebrates (birds, reptiles, amphibians, fish, and mammals). Insects, rodents, and fungi are members of those groups, not the groups themselves.",
  "page": "4"
 },
 {
  "id": "s1-003",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What is the first step in pest management?",
  "choices": [
   "Measuring the size of the pest population",
   "Accurately identifying the pest",
   "Selecting the least costly control method",
   "Applying a preventive pesticide treatment"
  ],
  "answer": 1,
  "explanation": "Identification comes first. Once the pest is identified, the applicator can learn its life cycle, behavior, characteristic damage, and susceptible life stages. Misidentification and lack of accurate information could cause pest control failure.",
  "page": "4"
 },
 {
  "id": "s1-004",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "A landscape plant shows damage, but no organism can be found on it. Which cause of plant damage does the manual warn can be mistaken for the work of a living pest?",
  "choices": [
   "Feeding by night-active insects that leave the plant before daylight",
   "Root feeding by soil insects that never appear above the ground surface",
   "Damage left over from an earlier infestation that was controlled the season before",
   "Environmental factors such as weather extremes, air pollutants, or road salt"
  ],
  "answer": 3,
  "explanation": "Weather extremes, air pollution, road salt, and inadequate or excessive fertilization can all damage plants in ways that look like pest injury. Never classify an organism as a pest until the injury is clearly determined to be its work and not from some other cause.",
  "page": "4"
 },
 {
  "id": "s1-005",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Which list gives the six applied pest control methods?",
  "choices": [
   "Biological, chemical, climatic, genetic, sanitary, and regulatory",
   "Chemical, cultural, natural, physical, preventive, and regulatory",
   "Biological, chemical, cultural, genetic, mechanical/physical, and regulatory",
   "Biological, chemical, cultural, environmental, mechanical, and quarantine"
  ],
  "answer": 2,
  "explanation": "Applied controls are biological, chemical, cultural, genetic, mechanical/physical, and regulatory. Climate and other natural forces are abiotic factors, natural controls that act without human intervention rather than applied methods.",
  "page": "5"
 },
 {
  "id": "s1-006",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Wind, temperature, rainfall, and topographic features such as rivers and mountains are examples of which kind of pest control?",
  "choices": [
   "Abiotic factors acting as natural controls",
   "Cultural controls applied by the grower or applicator",
   "Mechanical controls built into the site",
   "Regulatory limits on pest movement"
  ],
  "answer": 0,
  "explanation": "Abiotic factors are natural control measures within the environment, including climatic factors, air or water pollution, and topographic features, that injure or destroy pests without human effort. Applied controls come in only when natural controls fail to hold a pest in check.",
  "page": "5"
 },
 {
  "id": "s1-007",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What is biological control?",
  "choices": [
   "Applying naturally derived chemicals instead of synthetic ones to manage pest populations",
   "Using natural enemies such as predators, parasites, pathogens, and competitors to control pests",
   "Breeding plants and livestock so that they resist attack by specific pest organisms",
   "Changing temperature, humidity, and light so that a site becomes unsuitable for pests"
  ],
  "answer": 1,
  "explanation": "Biological control turns a pest's natural enemies, meaning predators, parasites, pathogens, and competitors, against it. Breeding resistant plants or animals is genetic control, altering the physical environment is mechanical/physical control, and a naturally derived chemical is still chemical control.",
  "page": "5"
 },
 {
  "id": "s1-008",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Why must mass-released natural enemies, such as predatory mites in a greenhouse, be released again periodically?",
  "choices": [
   "Federal law limits the number of biocontrol agents that may be released at one time",
   "The released natural enemies would otherwise become pests in their new environment",
   "Mass release usually does not yield long-term results",
   "Natural enemies reproduce successfully only under laboratory conditions"
  ],
  "answer": 2,
  "explanation": "Unlike imported natural enemies that become established and lower pest populations for long periods, the mass-release technique usually does not yield long-term results, so the natural enemies must be released periodically.",
  "page": "6"
 },
 {
  "id": "s1-009",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Which statement matches the manual's definition of a pesticide?",
  "choices": [
   "Any synthetic chemical that is manufactured and sold for the purpose of killing insects, weeds, plant diseases, or other pest organisms",
   "Any EPA-registered substance that is toxic to living organisms when applied at the labeled rate",
   "Any chemical mixture that controls pests through direct contact with their bodies or feeding surfaces",
   "Any material applied to plants, soil, water, structures, or animals to kill, attract, repel, or regulate pests or plant growth"
  ],
  "answer": 3,
  "explanation": "A pesticide is any material, natural or synthetic, applied to plants, soil, water, harvested crops, structures, clothing and furnishings, or animals to kill, attract, repel, or regulate or interrupt the growth and mating of pests, or to regulate plant growth. Attractants, repellents, and growth regulators all qualify; the material does not have to be synthetic or to kill on contact.",
  "page": "6"
 },
 {
  "id": "s1-010",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Which group of pesticides controls mites?",
  "choices": [
   "Molluscicides",
   "Acaricides",
   "Nematicides",
   "Piscicides"
  ],
  "answer": 1,
  "explanation": "Miticides, also called acaricides, control mites. Molluscicides control snails and slugs, nematicides control nematodes (roundworms), and piscicides control pest fish.",
  "page": "7"
 },
 {
  "id": "s1-011",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What does a desiccant do?",
  "choices": [
   "Causes the leaves or foliage to drop early from treated plants",
   "Alters the normal growth or development of a plant or animal",
   "Promotes drying or loss of moisture from plant tissues and insects",
   "Sterilizes insects or pest vertebrates so they cannot reproduce"
  ],
  "answer": 2,
  "explanation": "Desiccants promote drying or loss of moisture from plant tissues and insects. A defoliant makes leaves drop, a growth regulator alters growth or development, and a chemosterilant sterilizes insects or pest vertebrates.",
  "page": "6"
 },
 {
  "id": "s1-012",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "How do fumigants differ from selective pesticides?",
  "choices": [
   "Fumigants are nonselective and kill a wide variety of pests, including fungi, insects, weeds, and nematodes",
   "Fumigants act more slowly because the gas must penetrate the pest's outer covering before taking effect",
   "Fumigants are absorbed and moved within treated plants, while selective pesticides stay on the plant surface",
   "Fumigants stay active in the treated area for years, while selective pesticides break down within days"
  ],
  "answer": 0,
  "explanation": "Selective pesticides are toxic to some pests but have little or no effect on others, the way certain herbicides control broadleaf weeds but not grasses. Fumigants are nonselective: given a sufficient dose they kill a wide variety of pests, including fungi, insects, weeds, nematodes, and other organisms.",
  "page": "7"
 },
 {
  "id": "s1-013",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What distinguishes a systemic pesticide from a contact pesticide?",
  "choices": [
   "A systemic pesticide kills a broader range of pest species on the treated host",
   "A systemic pesticide is absorbed and moved within the treated plant or animal",
   "A systemic pesticide stays active on the treated surface for a longer period of time",
   "A systemic pesticide keeps working after rain, while a contact pesticide washes off"
  ],
  "answer": 1,
  "explanation": "Systemic pesticides are absorbed and translocated within a plant or animal, such as herbicides taken in through leaves or roots, or insecticides eaten by or injected into livestock. Contact pesticides are not absorbed and must directly touch the pest or a site the pest frequents.",
  "page": "7"
 },
 {
  "id": "s1-014",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "A pesticide's persistence describes what?",
  "choices": [
   "How strongly it binds to soil particles",
   "How much of it the pest must contact to die",
   "How far it can drift from the application site",
   "How long it remains active to control pests"
  ],
  "answer": 3,
  "explanation": "Persistence is how long a pesticide remains active to control pests. Residual pesticides control pests for weeks, months, or even years, while others give only short-term control that can last just a few hours.",
  "page": "7"
 },
 {
  "id": "s1-015",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Which practice is an example of sanitation as a cultural control?",
  "choices": [
   "Draining standing water to remove mosquito breeding sites",
   "Releasing predatory mites into a greenhouse to feed on spider mites",
   "Sealing cracks and crevices in a building to keep rodents outside",
   "Planting a crop variety that tolerates feeding by soil insects"
  ],
  "answer": 0,
  "explanation": "Sanitation eliminates the food, water, or shelter a pest needs to survive, and draining standing water takes away mosquito breeding sites. Releasing natural enemies is biological control, sealing openings is mechanical/physical control, and resistant varieties are genetic control.",
  "page": "8"
 },
 {
  "id": "s1-016",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Bt corn, which produces a protein that kills caterpillars, is an example of which control method?",
  "choices": [
   "Biological control",
   "Chemical control",
   "Genetic control",
   "Cultural control"
  ],
  "answer": 2,
  "explanation": "Bt corn is genetically modified with material from the bacterium Bacillus thuringiensis so the plant itself produces a caterpillar-killing protein. The manual classes such crops, along with naturally resistant varieties and herbicide-resistant crops, as genetic control.",
  "page": "8"
 },
 {
  "id": "s1-017",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What is the purpose of a quarantine in regulatory pest control?",
  "choices": [
   "To eliminate an established pest entirely from a designated area",
   "To prevent entry of certain pests into pest-free areas",
   "To compensate growers whose crops inspectors have destroyed",
   "To restrict which pesticides may be used against a listed pest"
  ],
  "answer": 1,
  "explanation": "Quarantine is designed to keep designated pests out of pest-free areas, using inspection stations, monitoring of airports and ports, and required treatment of items shipped from quarantine areas. Eliminating a pest from a designated area is eradication.",
  "page": "9"
 },
 {
  "id": "s1-018",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Which statement best describes integrated pest management (IPM)?",
  "choices": [
   "A program that replaces chemical pesticides with biological and cultural controls wherever pests appear",
   "A scouting system that times pesticide applications to the most susceptible stage of the pest's life cycle",
   "A federal certification and training program that teaches applicators to handle and apply pesticides safely and legally",
   "A strategy using a wide range of control methods to keep pests below damaging levels with the least environmental risk"
  ],
  "answer": 3,
  "explanation": "IPM is a pest management strategy that uses a wide range of methods or tactics, with the goal of preventing pests from reaching economically or aesthetically damaging levels with the least risk to the environment. Pesticides remain one of its tools, not something it excludes.",
  "page": "10"
 },
 {
  "id": "s1-019",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What is the key to a successful IPM program?",
  "choices": [
   "Regular monitoring of pest populations and their damage",
   "Treating on a fixed calendar schedule before pests appear",
   "Choosing the single most effective control method available",
   "Keeping pesticide application records for at least three seasons"
  ],
  "answer": 0,
  "explanation": "Regular monitoring, by scouting, trapping, and following weather and temperature data, measures pest populations and their damage so that control decisions rest on what is actually happening at the site.",
  "page": "11"
 },
 {
  "id": "s1-020",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Why must the economic threshold be set below the economic injury level?",
  "choices": [
   "So minor infestations can be safely ignored until after harvest",
   "So the cost of scouting stays below the cost of a pesticide treatment",
   "So control measures are triggered before pest damage exceeds their cost",
   "So repeat pesticide applications stay within the labeled interval"
  ],
  "answer": 2,
  "explanation": "The economic injury level is the pest density whose losses equal the cost of control, and the economic threshold is the density at which control is needed to keep the pest from reaching that level. Setting the threshold below the injury level triggers control in time; otherwise the producer pays twice, first for the damage and then for the control.",
  "page": "11"
 },
 {
  "id": "s1-021",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "For which pest would an action threshold of zero be appropriate?",
  "choices": [
   "An aphid feeding on ornamental shrubs in a public park",
   "A mosquito species capable of transmitting West Nile virus",
   "A gall-forming insect that does no harm to a shade tree",
   "An ant species foraging occasionally along a sidewalk"
  ],
  "answer": 1,
  "explanation": "A zero action threshold means no presence of the pest is tolerated. The manual reserves it for pests capable of transmitting a human pathogen, such as mosquitoes carrying West Nile virus, or of creating a public health emergency, such as cockroaches or rodents.",
  "page": "11"
 },
 {
  "id": "s1-022",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What is a secondary pest?",
  "choices": [
   "One that damages the crop only during the second half of the growing season",
   "One that causes major damage on a regular basis unless it is controlled",
   "One that attacks a plant only after another pest has already weakened it",
   "One that becomes a problem when a key pest is controlled or absent"
  ],
  "answer": 3,
  "explanation": "Secondary pests become a problem when a key pest is controlled or absent, the way some weed species spread only after the key weeds that outcompeted them are removed. A pest that causes regular major damage is a key pest, and one that appears only now and then is an occasional pest.",
  "page": "11"
 },
 {
  "id": "s1-023",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What is the goal of most pesticide applications?",
  "choices": [
   "Suppression of the pest population to a tolerable level",
   "Eradication of every pest present at the treatment site",
   "Prevention of pests from ever entering the treated area",
   "Isolation of the infested area until the pests disappear"
  ],
  "answer": 0,
  "explanation": "Suppression reduces pest populations to a tolerable level or below the economic injury level rather than eliminating every pest, and it is the goal of most pesticide applications. Eradication is practical mainly in confined spaces or as a regulatory program against introduced pests.",
  "page": "12"
 },
 {
  "id": "s1-024",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "When are fungicides normally applied?",
  "choices": [
   "As soon as the first symptoms appear on scattered plants",
   "After a diagnostic laboratory has confirmed the pathogen",
   "Before infection occurs, whenever conditions favor infection",
   "After harvest, to protect the crop while it is in storage"
  ],
  "answer": 2,
  "explanation": "Once plant pathogens have infected susceptible plants, economic damage usually cannot be prevented. Fungicides are therefore normally applied before infection occurs, whenever environmental conditions favor infection.",
  "page": "12"
 },
 {
  "id": "s1-025",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "A Bacillus thuringiensis (Bt) spray failed to control the larvae eating a shrub's leaves. Which cause of failure does the manual use this example to illustrate?",
  "choices": [
   "The product degraded because it was stored in a humid location",
   "The larvae were sawflies rather than caterpillars, so the pest was misidentified",
   "The larvae had entered a resting stage in which they were not feeding",
   "The spray went on just ahead of a rainstorm and was washed off the leaves before it could act"
  ],
  "answer": 1,
  "explanation": "Bt is effective on caterpillars but not on sawflies, so knowing the difference decides success or failure. The manual uses the example to show that applications fail when the pest is not identified correctly, and that even nonchemical tactics fail without accurate identification.",
  "page": "13"
 },
 {
  "id": "s1-026",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "When are weeds most easily controlled?",
  "choices": [
   "After their seed heads have fully ripened",
   "While they are dormant during the winter",
   "Once they have reached their full height",
   "Before they flower and go to seed"
  ],
  "answer": 3,
  "explanation": "Application timing matters: weeds are most easily controlled before they flower and go to seed, just as insects are usually more vulnerable while immature. A late application can also miss the pest entirely or catch it in a stage that is not susceptible.",
  "page": "13"
 },
 {
  "id": "s1-027",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What can happen to a granular pesticide stored in wet or very humid conditions?",
  "choices": [
   "It can draw moisture, clump, and possibly become deactivated",
   "It can give off vapors that corrode nearby metal containers",
   "It can separate into layers that must be remixed before use",
   "It can grow more concentrated as its inert carrier evaporates"
  ],
  "answer": 0,
  "explanation": "Granular pesticides stored in wet or very humid conditions draw moisture, which may cause clumping and possible deactivation. Pesticide degradation in storage is one of the reasons applications fail.",
  "page": "14"
 },
 {
  "id": "s1-028",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "What is pesticide resistance?",
  "choices": [
   "The tendency of a pesticide to stay active in the environment for years",
   "The failure of a pesticide to penetrate a pest's waxy outer covering",
   "The ability of a pest to tolerate a pesticide that once controlled it",
   "The restriction of a pesticide to use by certified applicators only"
  ],
  "answer": 2,
  "explanation": "Pesticide resistance is the ability of a pest to tolerate a pesticide that once controlled it. It develops when intensive use kills the susceptible individuals in a population while the resistant ones survive and reproduce, until the pesticide has little or no effect.",
  "page": "14"
 },
 {
  "id": "s1-029",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Which practice most increases the likelihood that pesticide resistance will develop?",
  "choices": [
   "Rotating pesticides that have different modes of action",
   "Continual use of pesticides from the same chemical class",
   "Treating only the spots where scouting actually finds the pest",
   "Reducing dosages so more susceptible individuals survive"
  ],
  "answer": 1,
  "explanation": "Continual use of pesticides from the same chemical class, along with frequent applications and more persistent chemicals, selects for resistant individuals. Rotating modes of action, limiting the treated area, and leaving a pool of susceptible individuals are tactics that delay resistance.",
  "page": "14"
 },
 {
  "id": "s1-030",
  "section": 1,
  "sectionName": "Pest Management",
  "question": "Where can an applicator find the code identifying a pesticide's mode-of-action group?",
  "choices": [
   "In the ingredient statement's list of chemical names",
   "In the first aid section of the product's labeling",
   "In the directions for use for each listed crop or site",
   "At the top of the pesticide label"
  ],
  "answer": 3,
  "explanation": "Most pesticides carry a code number at the top of the label indicating the mode of action, such as Group 4A Insecticides (neonicotinoids) or Group 2 Herbicides (ALS inhibitors). Rotating among groups with different modes of action helps prevent or delay resistance.",
  "page": "14"
 }
];
