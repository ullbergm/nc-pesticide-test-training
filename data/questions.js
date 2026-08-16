/* Question bank written from the two national applicator manuals published by
   the NASDA Research Foundation and hosted by EPA: the National Pesticide
   Applicator Certification Core Manual (second edition, 2014), chapters 1-11
   and appendices C-D, and the National Aerial Applicator's Manual (2014),
   chapters 1-6 and appendices 2-5. Nothing here comes from a North Carolina
   manual; those are sold in print, and questions from them are planned as a
   third and further `manual` values.

   Each manual numbers its own sections from 1, so `section` is a section
   number within the manual named by `manual` ("default" when absent), and the
   two together identify a section. Appendices continue that numbering after
   the last chapter and carry a `sectionLabel` ("app. C"), because an
   appendix's designation is not its position in the book. Ids follow the same
   split: s<section>-NNN for the core manual, a<section>-NNN for the aerial one.

   Each question cites the page printed in its manual, turned into a PDF deep
   link through that manual's page map (data/manual-pages.js,
   data/aerial-pages.js). docs/question-authoring.md is the recipe the bank was
   written with. */
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
 },
 {
  "id": "s2-001",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Why are pesticides regulated in the United States?",
  "choices": [
   "To eliminate every trace of pesticide residue from food, drinking water, and the environment as quickly as possible",
   "To capture their socioeconomic benefits while protecting public health and welfare and preventing environmental harm",
   "To phase synthetic pesticides out of agriculture in favor of biological control methods over time",
   "To keep pesticide prices stable and ensure that supplies remain available to farmers during shortages"
  ],
  "answer": 1,
  "explanation": "Pesticides are hazardous substances that can cause serious harm if misused, yet they provide important socioeconomic benefits when used correctly. Regulation of their labeling, sale and distribution, storage, transportation, use, and disposal exists to obtain those benefits while protecting public health and welfare and preventing harm to the environment, not to eliminate pesticides or manage their price.",
  "page": "19"
 },
 {
  "id": "s2-002",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "How can state, tribal, territorial, or local pesticide requirements relate to federal law?",
  "choices": [
   "They may be more restrictive than federal law, and applicators must comply with them",
   "They may relax federal requirements where local growing conditions justify an exception",
   "They must match the federal requirements exactly so that rules are uniform nationwide",
   "They apply only to commercial applicators, while private applicators follow federal rules alone"
  ],
  "answer": 0,
  "explanation": "States, tribes, territories, and some local jurisdictions may impose their own pesticide requirements, and those requirements may be more restrictive than federal law. The applicator is responsible for learning and complying with all of them before making any application; ignorance of the law is never an excuse for a violation.",
  "page": "19"
 },
 {
  "id": "s2-003",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Which federal statute regulates the production, transportation, sale, use, and disposal of pesticides?",
  "choices": [
   "The Federal Food, Drug, and Cosmetic Act (FFDCA)",
   "The Food Quality Protection Act (FQPA)",
   "The Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA)",
   "The Endangered Species Act (ESA)"
  ],
  "answer": 2,
  "explanation": "FIFRA is the statute that governs how pesticides are produced, transported, sold, used, and disposed of, and it provides the overall framework for the federal pesticide regulatory program. It is administered by the U.S. Environmental Protection Agency and was amended considerably in 1972 and again in 1975, 1978, and 1988. The FFDCA instead governs residue tolerances, the FQPA tightened those tolerance standards, and the ESA protects listed species.",
  "page": "20"
 },
 {
  "id": "s2-004",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "What is the legal status of the EPA-approved labeling on a registered pesticide product?",
  "choices": [
   "It has the force of law, and using the product inconsistently with it is a federal violation",
   "It is binding guidance for commercial applicators but only advisory for private applicators",
   "It is a recommendation that becomes enforceable only if adopted by the state lead agency",
   "It is a contract between the manufacturer and EPA that does not bind the end user"
  ],
  "answer": 0,
  "explanation": "The labeling EPA approves during registration carries the force of law. Using any EPA-registered pesticide in a manner inconsistent with its labeling violates federal law for every user, private or commercial, without any state adoption step.",
  "page": "20"
 },
 {
  "id": "s2-005",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "FIFRA Section 2(ee) generally allows applying a pesticide at a dosage, concentration, or frequency below what the labeling specifies. Which products are excluded from that allowance?",
  "choices": [
   "Termiticides labeled for preconstruction treatments",
   "Restricted-use pesticides applied by private applicators",
   "Fumigants applied inside food-handling establishments",
   "Herbicides tank-mixed with liquid fertilizer solutions"
  ],
  "answer": 0,
  "explanation": "Unless the labeling specifically prohibits it, Section 2(ee) permits applying less than the labeled dosage, concentration, or frequency, except for termiticides labeled for preconstruction treatments, which must be applied as the labeling directs. Section 2(ee) separately allows any application method and pesticide-fertilizer mixtures.",
  "page": "20"
 },
 {
  "id": "s2-006",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "When may an applicator legally use a pesticide against a target pest that is not named on the label?",
  "choices": [
   "When it is applied to a crop, animal, or site specifically listed on the labeling",
   "When the state lead agency issues a written permit naming the additional target pest",
   "When the unlisted pest is biologically similar to a pest that the labeling does name",
   "When the manufacturer confirms in writing that the product controls the unlisted pest"
  ],
  "answer": 0,
  "explanation": "FIFRA Section 2(ee) allows treating a pest the label does not mention as long as the application is made to a crop, animal, or site the labeling specifically lists, such as corn, tomatoes, or the interior of a home, and the labeling does not prohibit it. No permit or manufacturer letter is involved, and an applicator who exercises any 2(ee) exclusion is alone responsible for the consequences.",
  "page": "20"
 },
 {
  "id": "s2-007",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "What are the two main pesticide use classifications?",
  "choices": [
   "Restricted use and unclassified use, the latter commonly called general use",
   "Agricultural use and structural use, assigned according to the labeled application sites",
   "Commercial use and private use, assigned according to who is allowed to buy the product",
   "Hazardous use and exempt use, assigned according to the product's signal word"
  ],
  "answer": 0,
  "explanation": "Every pesticide is classified by its potential hazards under the circumstances of use into restricted use or unclassified use, and unclassified products are commonly called general-use pesticides. EPA has officially classified very few products as general use, so most that would fit that category simply remain unclassified. General-use pesticides normally have lower toxicity, and the public can buy them without special permits.",
  "page": "21"
 },
 {
  "id": "s2-008",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "How can the same pesticide active ingredient appear in both the restricted-use and general-use categories?",
  "choices": [
   "Classification depends on the state in which the product is registered and sold",
   "Classification depends on whether the manufacturer requests restricted status",
   "Classification depends on formulation, application method, and intended uses",
   "Classification depends on the size of the container the product is packaged in"
  ],
  "answer": 2,
  "explanation": "Because classification follows the product rather than the chemical alone, the same active ingredient can be restricted in one product and general use in another based on its formulation, how it is applied, and its intended uses. For example, an emulsifiable concentrate with a high percentage of active ingredient used on fruit trees might be restricted, while a 5 percent granular formulation of the same chemical for turf insects might be general use.",
  "page": "21"
 },
 {
  "id": "s2-009",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "To whom may restricted-use pesticides be sold?",
  "choices": [
   "Anyone at least 18 years old who signs the dealer's sales log",
   "Certified applicators or their authorized representatives",
   "Licensed pesticide dealers and farm supply distributors only",
   "Any purchaser who presents a completed safety training card"
  ],
  "answer": 1,
  "explanation": "RUPs may be sold only to certified applicators or their authorized representatives. A certified applicator is someone the state, tribe, territory, or responsible agency has recognized as competent to use or supervise the use of RUPs; age, a sales log entry, or a training card alone does not qualify a buyer.",
  "page": "21"
 },
 {
  "id": "s2-010",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Which certified applicator meets the definition of a private applicator?",
  "choices": [
   "One who applies pesticides for compensation on farms, nurseries, or greenhouses that other people own or manage",
   "One who uses or supervises RUPs to produce an agricultural commodity on property they own, rent, or lease",
   "Any applicator who uses only general-use pesticides and therefore needs no recognition from the certifying agency",
   "One employed full time by a single farm who applies pesticides only under the owner's written authorization"
  ],
  "answer": 1,
  "explanation": "A private applicator uses or supervises the use of RUPs to produce an agricultural commodity, such as field and forage crops, fruit, vegetables, nursery stock, Christmas trees, greenhouse plants, or livestock, on their own property or property they rent or lease. Anyone who uses or supervises RUPs for any other purpose on any other property is a commercial applicator.",
  "page": "21"
 },
 {
  "id": "s2-011",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Who is allowed to mix, load, or apply restricted-use pesticides?",
  "choices": [
   "Certified applicators or individuals under their direct supervision",
   "Certified applicators only, with no provision for supervised helpers",
   "Anyone who has completed WPS handler training within the past year",
   "Any employee of a licensed pest control business, certified or not"
  ],
  "answer": 0,
  "explanation": "Only certified applicators, or individuals working under a certified applicator's direct supervision, may mix, load, or apply RUPs. Certification requires demonstrating knowledge of and competency in pesticide use and handling, including the ability to read labeling and follow its directions.",
  "page": "21"
 },
 {
  "id": "s2-012",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Which pesticides may be distributed and sold in the United States without being registered by EPA?",
  "choices": [
   "Pesticides sold only within the state where they are manufactured",
   "Products containing only naturally derived active ingredients",
   "Minimum-risk pesticides",
   "Ready-to-use products packaged for household use"
  ],
  "answer": 2,
  "explanation": "Except for minimum-risk pesticides, every pesticide distributed and sold in the United States must be registered by EPA, based on scientific data showing no unreasonable risks to human health, workers, or the environment when used as directed. Natural origin, in-state sale, or household packaging does not exempt a product from registration.",
  "page": "21"
 },
 {
  "id": "s2-013",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Which section of FIFRA provides for special local need registrations?",
  "choices": [
   "Section 3",
   "Section 18",
   "Section 24(c)",
   "Section 25(b)"
  ],
  "answer": 2,
  "explanation": "Section 24(c) covers special local need registrations. The other actions that let pesticides be used in the United States are federal registration under Section 3, emergency exemptions under Section 18, and the exemption of minimum-risk pesticides from registration under Section 25(b).",
  "page": "22"
 },
 {
  "id": "s2-014",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "How does EPA regulate a pest control device, such as a black light trap?",
  "choices": [
   "The device is not registered, but the establishment producing it must be",
   "The device must be registered with EPA just as any pesticide product would be",
   "The device is regulated only if it uses an attractant chemical in its operation",
   "The device is exempt from all federal labeling and recordkeeping requirements"
  ],
  "answer": 0,
  "explanation": "A device is any instrument or contrivance, other than a firearm, intended to trap, destroy, repel, or mitigate a pest. Unlike pesticides, devices themselves do not need EPA registration, but the establishment that produces a device must be registered, and devices remain subject to certain labeling, packaging, recordkeeping, and import and export requirements.",
  "page": "22"
 },
 {
  "id": "s2-015",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "What is a pesticide tolerance?",
  "choices": [
   "The maximum amount of pesticide that may be applied to a food crop during one growing season without harming consumers",
   "The maximum pesticide residue that may legally remain on or in treated crops or animals sold for food or feed",
   "The minimum interval that must pass between the final pesticide application and the harvest of a treated food crop",
   "The maximum concentration of a pesticide allowed in the drinking water drawn from wells near treated farmland"
  ],
  "answer": 1,
  "explanation": "A tolerance, or maximum residue limit, is the amount of pesticide residue that may legally remain on or in treated crops and animals, including animal products such as milk or eggs, sold for food or feed. Federal agencies monitor food and feed for violations, and a commodity whose residues exceed the tolerance is condemned or subject to seizure, with violators facing prosecution.",
  "page": "22"
 },
 {
  "id": "s2-016",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Which factors does EPA weigh when setting a tolerance for a pesticide used on food?",
  "choices": [
   "The anticipated sales volume of the product, the acreage of the crop nationwide, and the cost of residue testing at market",
   "The signal word on the labeling, the product's formulation type, and the number of states where the product is registered",
   "Its toxicity and breakdown products, the amount and frequency of application, and the residue left when food is marketed",
   "Field monitoring data collected by state lead agencies during the first three growing seasons after registration"
  ],
  "answer": 2,
  "explanation": "Before allowing a pesticide on food crops, EPA must find that it can be used with reasonable certainty of no harm. To make that finding it considers the toxicity of the pesticide and its breakdown products, how much is applied and how often, and how much residue remains in or on food by the time it is marketed and prepared, based on a wide range of scientific studies the manufacturer must submit.",
  "page": "22"
 },
 {
  "id": "s2-017",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Applicators cannot measure residues on crops or livestock themselves. How can an applicator still be sure treated commodities stay well below the tolerance?",
  "choices": [
   "By sending crop samples to a private laboratory for residue analysis before delivering the commodity to market",
   "By following the labeled rate and the minimum days between application and harvest, slaughter, or grazing",
   "By halving the labeled application rate on any crop that will be harvested within thirty days of treatment",
   "By treating only the field borders during the final month before the crop is scheduled for harvest"
  ],
  "answer": 1,
  "explanation": "Measuring residues takes highly specialized equipment and techniques, so the applicator's assurance comes from following the labeling, especially the correct application rate and the minimum number of days required between application and harvest, slaughter, freshening, or grazing. Cutting rates or treating partial fields is not the prescribed method.",
  "page": "23"
 },
 {
  "id": "s2-018",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "EPA's one-time reregistration program reviewed which group of pesticides against current scientific and regulatory standards?",
  "choices": [
   "Those initially registered before November 1984",
   "Those initially registered before November 1996",
   "Those classified as restricted use after 1988",
   "Those containing more than one active ingredient"
  ],
  "answer": 0,
  "explanation": "Reregistration was a one-time review of older pesticides, meaning those initially registered before November 1984, covering their human health, environmental, and ecological effects. Its conclusions are called Reregistration Eligibility Decisions, or REDs, and the reviews were completed in 2008. Separately, the FQPA mandated an ongoing registration review program under which EPA periodically reevaluates all pesticides.",
  "page": "23"
 },
 {
  "id": "s2-019",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Which of these actions is an unlawful act under FIFRA?",
  "choices": [
   "Letting an uncertified person apply an RUP while under a certified applicator's direct supervision",
   "Defacing or destroying part of a pesticide container's labeling",
   "Applying a pesticide at less than the labeled rate to a site the labeling lists",
   "Selling a general-use pesticide to a buyer who holds no applicator certification"
  ],
  "answer": 1,
  "explanation": "Detaching, altering, defacing, or destroying any part of a container or labeling is one of FIFRA's unlawful acts, along with selling unregistered, adulterated, or misbranded pesticides, refusing to keep records or permit EPA inspections, advertising an RUP without its classification, making an RUP available to a noncertified applicator except as the law provides, and using any pesticide inconsistently with its labeling. Supervised RUP application, reduced rates on labeled sites, and public sale of general-use products are all legal.",
  "page": "24"
 },
 {
  "id": "s2-020",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "What criminal penalty can a commercial applicator face for a knowing violation of FIFRA?",
  "choices": [
   "A fine and/or up to one year of imprisonment",
   "A fine and/or up to 30 days of imprisonment",
   "A fine and/or up to five years of imprisonment",
   "A written warning followed by license suspension"
  ],
  "answer": 0,
  "explanation": "A knowing, meaning intentional, violation by a registrant, producer, commercial applicator of a restricted-use pesticide, or other person distributing or selling pesticides is a criminal act punishable by a fine and/or up to one year in prison. Civil penalties are separate: EPA weighs the size of the business, the effect on its ability to stay in business, the gravity of the violation, and any illegal profits, and may issue only a warning for minor violations.",
  "page": "24"
 },
 {
  "id": "s2-021",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "How is a knowing FIFRA violation by a private applicator punished?",
  "choices": [
   "As a felony punishable by a fine and/or up to one year of imprisonment",
   "As a civil matter that can be settled only through a monetary penalty",
   "As a misdemeanor punishable by a fine and/or up to 30 days imprisonment",
   "As a misdemeanor punishable by community service and mandatory retraining"
  ],
  "answer": 2,
  "explanation": "A knowing violation by a private applicator is a misdemeanor and results in a fine and/or up to 30 days of imprisonment. The stiffer penalty of a fine and/or up to one year applies to knowing violations by registrants, producers, commercial applicators of RUPs, and pesticide sellers and distributors.",
  "page": "24"
 },
 {
  "id": "s2-022",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Under the federal pesticide container and containment regulation, which commercial applicators may need to verify that their storage has secondary containment?",
  "choices": [
   "Those storing pesticides in containers larger than 500 gallons",
   "Those storing pesticides in containers larger than 250 gallons",
   "Those storing any amount of restricted-use pesticide overnight",
   "Those refilling their own containers from a dealer's bulk tank"
  ],
  "answer": 0,
  "explanation": "EPA's 2006 container and containment rules mostly apply to pesticide manufacturers and refillers, but a commercial applicator who stores pesticides in containers greater than 500 gallons may need to verify the container is surrounded by a secondary containment structure. Some states implement their own containment rules instead of the federal ones, and every applicator must follow the container handling and cleaning instructions in the labeling's Storage and Disposal section.",
  "page": "24"
 },
 {
  "id": "s2-023",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Which protections must employers provide to agricultural workers and pesticide handlers under the Worker Protection Standard?",
  "choices": [
   "Pesticide safety training, personal protective equipment, and decontamination supplies",
   "Annual medical monitoring, respirator fit testing, and paid recovery leave after exposures",
   "Certified applicator licenses, liability insurance, and reimbursement for protective clothing",
   "Closed mixing systems, enclosed application cabs, and weekly cholinesterase blood testing"
  ],
  "answer": 0,
  "explanation": "The WPS is intended to reduce occupational pesticide exposure and related illnesses and injuries among agricultural workers and pesticide handlers. It requires employers to provide pesticide safety training, personal protective equipment, and decontamination supplies, and also to maintain certain records and display specific pesticide safety information on the premises.",
  "page": "25"
 },
 {
  "id": "s2-024",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Which businesses must comply with the Worker Protection Standard?",
  "choices": [
   "Only businesses that employ ten or more agricultural workers during any thirty-day period of the season",
   "Retail dealers and distributors that sell restricted-use pesticides to farms, nurseries, and greenhouses",
   "Agricultural establishments and commercial businesses hired for pesticide application or crop advising on them",
   "Only commercial pesticide application businesses, since farms are regulated through applicator certification instead"
  ],
  "answer": 2,
  "explanation": "The WPS covers owners and operators of agricultural establishments, such as farms, nurseries, and forest and greenhouse operations producing agricultural plants, and owners and operators of commercial businesses hired to apply pesticides or perform crop advising tasks on those establishments. Coverage does not hinge on a worker headcount, and pesticide dealers are not the regulated group.",
  "page": "25"
 },
 {
  "id": "s2-025",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Under the cooperative enforcement agreements every state has signed with EPA, who acts as the primary pesticide regulatory authority enforcing FIFRA within a state?",
  "choices": [
   "The nearest EPA regional office",
   "The designated state lead agency",
   "The state agricultural extension service",
   "The state attorney general's office"
  ],
  "answer": 1,
  "explanation": "All 50 states have signed cooperative enforcement agreements with EPA that designate an agency within the state, the state lead agency, as the primary pesticide regulatory authority for enforcing FIFRA. In some states more than one agency shares that role, such as a structural pest control board that regulates the structural pest control industry. Any state, tribe, territory, or federal agency that certifies RUP applicators must also have an EPA-approved certification plan.",
  "page": "25"
 },
 {
  "id": "s2-026",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Which federal law governs the establishment of pesticide tolerances for food and feed products?",
  "choices": [
   "The Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA)",
   "The Federal Food, Drug, and Cosmetic Act (FFDCA)",
   "The Endangered Species Act (ESA)",
   "The Occupational Safety and Health Act (OSHA)"
  ],
  "answer": 1,
  "explanation": "The FFDCA is the statute under which pesticide tolerances, the maximum residue levels allowed in or on human food and animal feed, are established, and EPA and the Food and Drug Administration are responsible for administering it. FIFRA governs pesticide registration and use rather than food residue limits.",
  "page": "25"
 },
 {
  "id": "s2-027",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "What did the Food Quality Protection Act change about how EPA assesses the risks of pesticide residues in food?",
  "choices": [
   "EPA must set separate residue standards for each state based on regional diets and local drinking water quality",
   "EPA must apply a single health-based standard covering aggregate dietary and other nonoccupational exposures",
   "EPA must set every food tolerance at zero unless the manufacturer proves the residue is harmless to adults",
   "EPA must transfer all tolerance-setting responsibilities from the FDA to the USDA's Pesticide Data Program"
  ],
  "answer": 1,
  "explanation": "The FQPA established a single, health-based safety standard for pesticide residues in food or feed that considers aggregate risk from dietary exposure plus other nonoccupational sources such as drinking water and residential lawn use, along with the cumulative effects of pesticides that act on the body in similar ways. It also requires EPA to focus explicitly on exposures and risks to infants and children, apply an additional safety factor for data uncertainty, review all old pesticides against the new standard, and test pesticides for endocrine-disruption potential.",
  "page": "26"
 },
 {
  "id": "s2-028",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Which agencies administer the Endangered Species Act?",
  "choices": [
   "The U.S. Fish and Wildlife Service and the National Marine Fisheries Service",
   "The Environmental Protection Agency and the U.S. Forest Service",
   "The U.S. Department of Agriculture and the National Park Service",
   "The Environmental Protection Agency's Office of Pesticide Programs and its regional offices"
  ],
  "answer": 0,
  "explanation": "The ESA is administered by the U.S. Fish and Wildlife Service and the National Marine Fisheries Service, jointly called the Services. The act makes it illegal to kill, harm, or collect endangered or threatened wildlife or fish, or to remove listed plants from areas under federal jurisdiction, and it obligates EPA to ensure that no registered pesticide use is likely to jeopardize the survival of a listed species.",
  "page": "26"
 },
 {
  "id": "s2-029",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "A pesticide product might harm an endangered species. What does its labeling direct the applicator to do?",
  "choices": [
   "Consult a county bulletin to learn whether special precautions apply where the product will be used",
   "Obtain a site-specific waiver from the U.S. Fish and Wildlife Service before every outdoor application",
   "Notify the state lead agency at least 24 hours before applying the product outside a structure",
   "Survey the treatment area for listed species and report any sightings to the EPA regional office"
  ],
  "answer": 0,
  "explanation": "Under the Endangered Species Protection Program, which each state pesticide regulatory agency implements in cooperation with EPA, such a product carries a labeling statement telling the applicator to consult a county bulletin, available through the Internet-based Bulletins Live! system, to see whether special precautions apply in that county. Bulletin measures can include buffer strips, reduced application rates, timing restrictions, or a prohibition on use within the identified habitat.",
  "page": "26"
 },
 {
  "id": "s2-030",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Who establishes federal pesticide application recordkeeping requirements for private applicators?",
  "choices": [
   "The Environmental Protection Agency (EPA)",
   "The U.S. Department of Agriculture (USDA)",
   "The Food and Drug Administration (FDA)",
   "The Occupational Safety and Health Administration (OSHA)"
  ],
  "answer": 1,
  "explanation": "The USDA administers the program that sets federal recordkeeping requirements for private applicators, while states establish the recordkeeping requirements for commercial applicators and may impose private-applicator requirements that exceed the USDA's. Beyond meeting the legal requirements, keeping good application records is a wise practice: they are invaluable documentation in the event of a complaint or lawsuit.",
  "page": "26"
 },
 {
  "id": "s2-031",
  "section": 2,
  "sectionName": "Federal Pesticide Laws and Regulations",
  "question": "Are pesticide application businesses currently required by federal law to keep records of employee pesticide training?",
  "choices": [
   "No; they are not currently required by federal law, though keeping them is a good idea",
   "Yes; FIFRA requires every business to retain them for three years after each employee completes training",
   "Yes; but only businesses that apply restricted-use pesticides must keep them on file",
   "No; federal law actually discourages records that contain employee identification numbers"
  ],
  "answer": 0,
  "explanation": "Federal law does not currently require employee training documentation, but it may in the future, and a state, tribal, territorial, or federal agency may demand written proof that employees were trained in proper pesticide use when hired. In the case of the WPS, records document that the mandatory training requirement was satisfied. Useful entries include the employee's name and identification number, the training date, the materials and their source, and the employee's signature with the date signed.",
  "page": "27"
 },
 {
  "id": "s3-001",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "On a pesticide product, what exactly is the label?",
  "choices": [
   "The comprehensive product-use manual and brochures the manufacturer distributes with the product",
   "The information printed on and attached to the pesticide container",
   "The front panel of the container that shows the brand name and signal word",
   "The Safety Data Sheet the dealer supplies at the point of sale"
  ],
  "answer": 1,
  "explanation": "The label is the information printed on and attached to the container itself, and users are required by law to comply with all of its instructions and use directions. Manuals, brochures, leaflets, and Safety Data Sheets are part of the broader labeling, not the label.",
  "page": "32"
 },
 {
  "id": "s3-002",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "How does pesticide labeling differ from the label?",
  "choices": [
   "Labeling is the draft wording a manufacturer submits to EPA before the final label is printed",
   "Labeling is the state-approved supplement, while the label is the federally approved document",
   "Labeling covers the label plus all other product information referenced on it, such as use manuals, brochures, leaflets, and Safety Data Sheets",
   "Labeling refers only to the supplemental documents that accompany special local need registrations and Section 18 emergency exemption products, not the container text"
  ],
  "answer": 2,
  "explanation": "Labeling is the broader term: the label itself plus all other information about the product referenced on the label and given when you buy it, including product-use manuals, brochures, leaflets, and Safety Data Sheets. It carries the instructions for safe and correct use.",
  "page": "32"
 },
 {
  "id": "s3-003",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What must happen before a pesticide may be sold in the United States?",
  "choices": [
   "The manufacturer must publish its efficacy and toxicity data in a peer-reviewed scientific journal",
   "The product must complete one full season of provisional sales under a temporary label",
   "Every state regulatory agency must independently verify the manufacturer's residue studies",
   "EPA must review the registration application and find the product presents no unreasonable risk"
  ],
  "answer": 3,
  "explanation": "No pesticide may be sold until EPA has reviewed the manufacturer's registration application and determined that use of the product does not present an unreasonable risk to humans, wildlife, or the environment. EPA must approve all proposed label language, and any later change to registered labeling also requires EPA approval.",
  "page": "32"
 },
 {
  "id": "s3-004",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What is the preharvest interval listed on many agricultural pesticide labels?",
  "choices": [
   "The minimum number of days between the last application and harvest of the crop",
   "The maximum number of days a crop may stay in the field after its final treatment",
   "The number of days workers must stay out of a treated field before harvest begins",
   "The number of days a mixed spray solution remains usable in the tank before harvest"
  ],
  "answer": 0,
  "explanation": "Preharvest intervals (days to harvest) and preslaughter intervals (days to slaughter) are the minimum number of days between the last pesticide application and the harvest of crops or slaughter of livestock. EPA sets them to allow the pesticide time to break down, preventing unacceptable residues on food, feed, or animal products.",
  "page": "33"
 },
 {
  "id": "s3-005",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What can happen to a food or feed commodity carrying pesticide residues above the EPA tolerance?",
  "choices": [
   "It may be sold only after a mandated washing and processing step removes the residues",
   "It may be condemned and destroyed",
   "It may be diverted to livestock feed at a discounted price",
   "It may be held in storage until the residues degrade below the tolerance level"
  ],
  "answer": 1,
  "explanation": "If residues exceed the EPA tolerance, or are found on a commodity with no specified tolerance, the commodity may be condemned and destroyed. Tolerances apply when the crop or animal (including meat, milk, and eggs) is ready for market or livestock feed; the specific tolerance values are not printed on product labels.",
  "page": "33"
 },
 {
  "id": "s3-006",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Which type of pesticide registration is the most common?",
  "choices": [
   "Section 18 emergency exemption",
   "Section 24(c) special local need registration",
   "Section 3 registration",
   "Section 25(b) minimum-risk exemption"
  ],
  "answer": 2,
  "explanation": "Section 3 registrations are the most common type under FIFRA. Products with this registration carry an official EPA registration number on the label, except for products EPA classifies as minimum-risk pesticides.",
  "page": "33"
 },
 {
  "id": "s3-007",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What does a special local need (SLN) registration under Section 24(c) allow?",
  "choices": [
   "A state to expand or limit the uses of certain registered pesticides within its jurisdiction",
   "A manufacturer to sell an unregistered product nationwide while its application is pending",
   "An applicator to use any registered pesticide on a crop that is not listed on its label",
   "A county government to prohibit the sale of a federally registered pesticide in its area"
  ],
  "answer": 0,
  "explanation": "Section 24(c) SLN registrations let states expand or limit uses of certain registered pesticides within their own jurisdictions, such as allowing use on crops or sites not on the label or restricting uses to address local concerns. The manufacturer must provide supplemental labeling for each SLN registration.",
  "page": "33"
 },
 {
  "id": "s3-008",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "An applicator obtains SLN supplemental labeling issued by a neighboring state. What use does it permit back in the applicator's own state?",
  "choices": [
   "Full use, because an SLN registration issued by any state is valid across state lines",
   "Use only under the direct supervision of an applicator who holds a current certification issued by the neighboring state that granted the registration",
   "Use at reduced rates after the applicator's own state regulatory agency is notified",
   "None, because SLN registrations are legal only in the region, state, or local area the labeling specifies"
  ],
  "answer": 3,
  "explanation": "It is illegal to apply a pesticide under an SLN registration issued by another state or region; the registration is valid only in the area specified in the labeling. To use a product for an SLN purpose you must also have the SLN labeling in your possession, and its registration number includes a code for the issuing state.",
  "page": "34"
 },
 {
  "id": "s3-009",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Under what circumstances can EPA grant a Section 18 emergency exemption?",
  "choices": [
   "When a registered product is out of stock in a region during the peak application season",
   "When a pest problem has no currently registered pesticide and no other feasible pesticide alternative exists",
   "When a manufacturer needs extra time to finish the residue studies required for full registration",
   "When a state, tribe, or territory wants to permanently add a new crop or application site to a registered product's federally approved label"
  ],
  "answer": 1,
  "explanation": "Section 18 exemptions address pest problems for which no pesticide is currently registered, and there must be no other feasible pesticide alternative. The exemption allows sale and use of a registered product for a specific nonregistered purpose during a specified period, at the request of the state, tribe, or territory regulatory agency, and the applicator must have a copy of the Section 18 approval on hand.",
  "page": "34"
 },
 {
  "id": "s3-010",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Which label elements are Section 25(b) minimum-risk pesticides excused from carrying?",
  "choices": [
   "An EPA registration number, an EPA establishment number, any signal word, and any PPE requirements",
   "An ingredient statement, the net contents, and the name and address of the manufacturer",
   "Only the signal word, provided a CAUTION designation appears somewhere on the packaging",
   "Only the EPA registration number, since every other standard label element is still required"
  ],
  "answer": 0,
  "explanation": "Minimum-risk pesticides are exempt from registration, do not require EPA label approval or review, and have no label requirements for an EPA registration number, an EPA establishment number, a signal word, or personal protective equipment. To qualify, every active ingredient must be on the minimal-risk actives list and every inert on the minimal-risk inerts list, and many states still require state registration before sale.",
  "page": "34"
 },
 {
  "id": "s3-011",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "At which points in handling a pesticide are you responsible for reading the label?",
  "choices": [
   "Only before the first application of a newly purchased product and after any label revision",
   "Before buying, before mixing and applying, when storing, and before disposing of the product",
   "Only at purchase, since the dealer must review the use directions with you at that time",
   "Before applying and before disposal, the two points where legal liability can attach to the user"
  ],
  "answer": 1,
  "explanation": "The user must read and understand all labeling before buying (to confirm the product is registered for the intended use, check for restrictions, and learn what PPE and equipment are needed), before mixing and applying (precautions, first aid, weather suitability, and the pest life stage controlled), when storing, and before disposing of unused pesticides and empty containers.",
  "page": "34"
 },
 {
  "id": "s3-012",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Two products from different manufacturers contain the identical active ingredient. What should you expect about their trade names?",
  "choices": [
   "Both must display the same trade name so buyers can recognize the shared chemistry",
   "The first company to register the ingredient owns the trade name that both must license",
   "The manufacturers will use different trade names even though the active ingredient is the same",
   "They must share a trade name but distinguish themselves with different brand suffixes"
  ],
  "answer": 2,
  "explanation": "Different manufacturers use different trade names even when their products contain the same active ingredient, and most register each trade name as a trademark. Purchasing by the common or chemical name ensures you get the right active ingredient regardless of brand, though products with the same active ingredient are not all labeled for the same uses or rates.",
  "page": "35"
 },
 {
  "id": "s3-013",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What does the brand name \"Tempo 20WP\" tell you about the product?",
  "choices": [
   "It is a water-soluble packet holding 20 grams of product",
   "It is a wettable powder containing 20% active ingredient",
   "It is a wettable powder mixed at 20 pounds per 100 gallons",
   "It is the twentieth formulation registered under the Tempo name"
  ],
  "answer": 1,
  "explanation": "A brand name often indicates the formulation type and the percentage of active ingredient: Tempo is the registered trade name, and 20WP means a wettable powder with 20% active ingredient. The trade or brand name appears plainly on the front panel and is the name used in advertising.",
  "page": "35"
 },
 {
  "id": "s3-014",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What is the active ingredient of a pesticide product?",
  "choices": [
   "The solvent or carrier that transports the pesticidal chemical through the outer covering and into the body of the target pest",
   "Any component that makes up more than half of the formulation by weight",
   "The compound added to give the formulation an identifiable color and odor",
   "The chemical in the formulation that actually controls the pest or performs the desired function"
  ],
  "answer": 3,
  "explanation": "The active ingredient is the chemical or chemicals responsible for the product's pesticidal activity, the material that actually controls a pest or performs a desired function such as repelling or regulating growth. Every label must list each active ingredient and the percentage of each in the product.",
  "page": "35"
 },
 {
  "id": "s3-015",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "How must inert ingredients appear in the ingredient statement of a pesticide label?",
  "choices": [
   "Each inert must be listed by its officially accepted common name",
   "Each inert must be listed by its full chemical name together with the individual percentage it contributes to the total formulation",
   "The label must show the percentage of the total contents they make up, though they usually are not named",
   "They appear only on the Safety Data Sheet and are omitted from the label entirely"
  ],
  "answer": 2,
  "explanation": "Inert ingredients usually are not named individually, but the label must show what percentage of the total contents they make up. In the Tempo 20WP example, the label lists 20% active ingredient and 80% inert ingredients.",
  "page": "35"
 },
 {
  "id": "s3-016",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Which common names may appear in the ingredient statement on a pesticide label?",
  "choices": [
   "Only common names officially accepted by EPA",
   "Any shortened name the manufacturer has registered as a trademark",
   "Common names approved by the state where the product is offered for sale",
   "Any name for the compound published in a recognized chemistry index"
  ],
  "answer": 0,
  "explanation": "Because chemical names are complex, many active ingredients are given a shorter common name, but only common names officially accepted by EPA may be used in the ingredient statement. The official common name is usually followed by the chemical name in the list of active ingredients; for Tempo, the common name is cyfluthrin.",
  "page": "35"
 },
 {
  "id": "s3-017",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Where must the restricted-use statement appear on the label of a restricted-use pesticide?",
  "choices": [
   "In the Directions for Use section beside each restricted application site",
   "At the top of the front panel",
   "Immediately following the ingredient statement",
   "On the back panel above the storage and disposal instructions"
  ],
  "answer": 1,
  "explanation": "Every federally restricted-use product must carry the restricted-use statement at the top of the front panel of the label. The statement limits retail sale and use to certified applicators or persons under their direct supervision, and only for uses covered by the applicator's certification.",
  "page": "36"
 },
 {
  "id": "s3-018",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Why does EPA classify certain pesticides as restricted use?",
  "choices": [
   "They could harm humans, livestock, wildlife, or the environment even when used according to label directions",
   "They persist in treated soil or in surface water for longer than one full growing season after a single application made at labeled rates",
   "They are concentrated formulations that uncertified users cannot reliably dilute to safe strengths",
   "Their accident history shows more reported poisonings than any other group of registered products"
  ],
  "answer": 0,
  "explanation": "Restricted-use pesticides demand special attention because there is reason to believe they could harm humans, livestock, wildlife, or the environment even when used according to label directions. The restricted-use statement indicates the specific hazard, such as high toxicity to humans and wildlife or a groundwater hazard.",
  "page": "36"
 },
 {
  "id": "s3-019",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Who may use a restricted-use pesticide?",
  "choices": [
   "Any licensed farm operator applying the product to land the operator owns or leases",
   "Anyone at least 18 years old who signs the dealer's record book at the time of purchase",
   "Certified applicators or persons under their direct supervision, for uses the certification covers",
   "Only government applicators responding to a declared public health or pest emergency"
  ],
  "answer": 2,
  "explanation": "Restricted-use products are for retail sale to and use only by certified applicators or persons under their direct supervision, and only for uses covered by the certified applicator's certification. Users must have demonstrated the competence to handle these products properly.",
  "page": "36"
 },
 {
  "id": "s3-020",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Which statement describes unclassified, or general-use, pesticides?",
  "choices": [
   "Anyone can purchase and use them without special permits or restrictions",
   "Anyone can purchase them, but application requires a certified applicator's supervision",
   "They require a state purchase permit but no applicator certification to apply",
   "They may be used by anyone, but only on sites enrolled in a state general-use registry"
  ],
  "answer": 0,
  "explanation": "Unclassified pesticides, often called general-use pesticides, typically have lower toxicity and less potential to harm humans and the environment than restricted-use products, so anyone can purchase and use them without special permits or restrictions.",
  "page": "36"
 },
 {
  "id": "s3-021",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "In which units is the net contents of a dry pesticide formulation expressed?",
  "choices": [
   "Gallons, quarts, or pints",
   "Pounds or ounces",
   "Percentage of active ingredient by weight",
   "Number of standard application doses"
  ],
  "answer": 1,
  "explanation": "Net contents is expressed as pounds or ounces for dry formulations and as gallons, quarts, or pints for liquids. Liquid formulations may also list the pounds of active ingredient per gallon of product, and many labels now add metric units such as grams, kilograms, or liters.",
  "page": "36"
 },
 {
  "id": "s3-022",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What do the two sets of numbers in a typical EPA registration number identify?",
  "choices": [
   "The year of registration and the product's toxicity category",
   "The producing facility and the state where it operates",
   "The manufacturer and the specific product",
   "The chemical family and the formulation type"
  ],
  "answer": 2,
  "explanation": "Most EPA registration numbers have two sets of numbers identifying the manufacturer and the specific product; an occasional third set is a distributor's identification number on distributor products. The registration number, required on all labels except Section 25(b) products, shows the product is registered and its label approved by EPA.",
  "page": "36"
 },
 {
  "id": "s3-023",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What does the EPA establishment number on a pesticide label identify?",
  "choices": [
   "The distributor marketing the product under its own brand",
   "The laboratory that performed the registration studies",
   "The port of entry through which an imported product arrived",
   "The facility that produced the product"
  ],
  "answer": 3,
  "explanation": "The establishment number, such as EPA Est. No. 5840-AZ-1, identifies the facility that produced the product, which matters if a problem arises or the product is found to be adulterated. The state abbreviation in the number indicates where the facility is located, Arizona in this example.",
  "page": "37"
 },
 {
  "id": "s3-024",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What does the signal word on a pesticide label indicate?",
  "choices": [
   "The product's relative acute toxicity to humans and animals",
   "The product's potential to cause chronic effects such as cancer",
   "The product's persistence and mobility in soil and groundwater",
   "The category of certification needed to purchase the product"
  ],
  "answer": 0,
  "explanation": "The signal word designates the relative acute toxicity of the product to humans and animals. It must appear in large letters on the front panel of the label along with the statement \"Keep Out of Reach of Children.\"",
  "page": "37"
 },
 {
  "id": "s3-025",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "A label displays DANGER—POISON with a skull and crossbones symbol. What does this combination mean?",
  "choices": [
   "The product is corrosive to eyes and skin but presents little hazard if it is swallowed",
   "The product is highly toxic by any route of entry and can cause death in very low doses",
   "The product is moderately toxic through at least one route of entry into the body",
   "The product is flammable and must be kept well away from heat and open flame"
  ],
  "answer": 1,
  "explanation": "DANGER—POISON with the skull and crossbones must appear on all products that are highly toxic by any route of entry into the body; these products can cause death in very low doses. The word \"poison\" must be printed in red, and PELIGRO, the Spanish word for danger, must also appear on the label.",
  "page": "37"
 },
 {
  "id": "s3-026",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "A product carries the signal word DANGER without the word POISON. What does that signal?",
  "choices": [
   "The product is highly toxic by at least one route of entry, or can cause severe eye damage or skin irritation",
   "The product is fatal only when swallowed, not through skin contact or breathing the vapors",
   "The product is moderately toxic by every one of the possible routes of entry into the human body rather than highly toxic by one",
   "The product was registered before labeling rules began requiring the POISON designation"
  ],
  "answer": 0,
  "explanation": "DANGER alone signals that the product is highly toxic by at least one route of entry. Products with this signal word can cause severe eye damage or skin irritation.",
  "page": "37"
 },
 {
  "id": "s3-027",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What level of hazard does the signal word WARNING indicate?",
  "choices": [
   "High acute toxicity through a single route of entry into the body",
   "Slight toxicity accompanied by minor, short-lived eye and skin irritation",
   "Moderate toxicity orally, dermally, or through inhalation, or moderate eye and skin irritation",
   "Low acute toxicity by any route of entry, paired with a significant risk of long-term chronic health effects"
  ],
  "answer": 2,
  "explanation": "WARNING signals that the product is moderately toxic either orally, dermally, or through inhalation, or that it causes moderate eye and skin irritation. AVISO, the Spanish word for warning, must also appear on the label.",
  "page": "37"
 },
 {
  "id": "s3-028",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What does the signal word CAUTION indicate about a pesticide?",
  "choices": [
   "It is nontoxic when it is used exactly according to the directions on the label",
   "It is slightly toxic orally, dermally, or through inhalation, or causes slight eye and skin irritation",
   "It is moderately toxic by a single route of entry but essentially harmless by each of the other routes of exposure",
   "It has not yet completed the toxicity testing required for a permanent signal word"
  ],
  "answer": 1,
  "explanation": "CAUTION signals slight toxicity either orally, dermally, or through inhalation, or slight eye and skin irritation. Pesticides of very low toxicity are not required to display any signal word, though many manufacturers still put a CAUTION designation on those labels.",
  "page": "37"
 },
 {
  "id": "s3-029",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What do the specific action statements on a pesticide label tell you?",
  "choices": [
   "The emergency first aid treatments to administer to a victim immediately after any accidental pesticide exposure occurs",
   "The steps for neutralizing and cleaning up a spill of the concentrated product",
   "The procedures for calibrating application equipment before each treatment",
   "The precautions and PPE needed to reduce exposure, tied to the product's toxicity and routes of entry"
  ],
  "answer": 3,
  "explanation": "Specific action statements, which usually follow the routes of entry statements, give the precautions and PPE necessary to reduce exposure, and they correspond directly to the product's signal word and routes of entry. DANGER labels use firm directives such as \"Do not breathe vapors or spray mist,\" CAUTION labels use milder wording such as \"Avoid contact with skin or clothing,\" and WARNING labels often combine statements from both.",
  "page": "38"
 },
 {
  "id": "s3-030",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "A pesticide label carries no personal protective equipment statement at all. How should you decide what to wear?",
  "choices": [
   "Consider the signal word, the routes of entry statements, and the specific action statements",
   "Assume no PPE is needed, since any requirement would have been printed on the label",
   "Default to the most protective equipment listed for any product with that active ingredient",
   "Request a written PPE determination from EPA before making the application"
  ],
  "answer": 0,
  "explanation": "Labels vary in the PPE information they carry, and some have no PPE statement at all. Follow all label statements on PPE, and when they are absent, base your choice on the signal word, routes of entry statements, and specific action statements.",
  "page": "38"
 },
 {
  "id": "s3-031",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What were the first aid statements on pesticide labels formerly called?",
  "choices": [
   "The Note to Physicians",
   "The Statement of Practical Treatment",
   "The Emergency Response and Treatment Summary",
   "The Hazards to Humans statement"
  ],
  "answer": 1,
  "explanation": "First aid statements, formerly known as the Statement of Practical Treatment, list the emergency treatments recommended in case of poisoning or accidental exposure, such as flushing eyes with water for 15 minutes and getting medical attention. All DANGER labels, and some WARNING and CAUTION labels, also carry a note to physicians describing medical procedures and antidotes.",
  "page": "39"
 },
 {
  "id": "s3-032",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What is the purpose of a special toxicity statement such as \"This product is highly toxic to bees\"?",
  "choices": [
   "It legally obligates the applicator to locate and notify every beekeeper operating hives near the application site before any spraying begins",
   "It reclassifies the product as restricted use whenever it is applied outdoors",
   "It alerts you to the product's particular wildlife hazards so you can pick the safest product and take extra precautions",
   "It identifies nontarget species that void the product warranty if they are harmed"
  ],
  "answer": 2,
  "explanation": "Special toxicity statements flag products that are especially hazardous to wildlife, such as bees, fish and aquatic invertebrates, or birds. They alert you to a product's special hazards, help you choose the safest product for a particular job, and remind you to take extra precautions.",
  "page": "39"
 },
 {
  "id": "s3-033",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "A label carries no general environmental statements, such as warnings about drift or runoff. What does that absence mean?",
  "choices": [
   "The product has been demonstrated to pose no hazard to the environment",
   "You still need to take adequate precautions against contaminating the environment",
   "Any environmental restrictions have been moved to the Safety Data Sheet",
   "The product is limited to indoor applications where drift cannot occur"
  ],
  "answer": 1,
  "explanation": "General environmental statements are commonsense reminders, such as not applying when runoff is likely, when weather favors drift, or when bees are likely to be in the area. The absence of any or all of these statements does not mean you can skip adequate precautions.",
  "page": "39"
 },
 {
  "id": "s3-034",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What does the \"Physical or Chemical Hazards\" section of a pesticide label describe?",
  "choices": [
   "The product's acute toxicity to humans and to domestic animals",
   "The pace at which the product degrades in soil and surface water",
   "The product's compatibility with other pesticides in a tank mix",
   "Possible fire, explosion, or chemical hazards of the product"
  ],
  "answer": 3,
  "explanation": "This section covers the product's possible fire, explosion, or chemical hazards. Examples include a flammability warning not to use, pour, spill, or store near heat or open flame or cut or weld the container, and a corrosivity warning to store only in a corrosion-resistant tank.",
  "page": "40"
 },
 {
  "id": "s3-035",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "On which pesticide labels does the \"Agricultural Use Requirements\" section appear?",
  "choices": [
   "Only on labels of agricultural products covered by the EPA Worker Protection Standard",
   "On every product labeled for any outdoor application, agricultural or not",
   "On all restricted-use pesticides regardless of their application site",
   "On any product that may be applied on farms, lawns, or golf courses"
  ],
  "answer": 0,
  "explanation": "The Agricultural Use Requirements section is found only on labels of agricultural products covered by the Worker Protection Standard, and it links the product to the WPS regulations in 40 CFR Part 170. Those requirements protect agricultural workers and handlers on farms and in forests, nurseries, and greenhouses through training, decontamination, notification, emergency assistance, PPE, and restricted-entry intervals.",
  "page": "40"
 },
 {
  "id": "s3-036",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What does a restricted-entry interval (REI) specify?",
  "choices": [
   "How long a treated crop must be withheld from harvest after the final application",
   "How long a mixed spray solution may be stored in application equipment before use",
   "How much time must pass between a pesticide application and the reentry of unprotected workers into the treated area",
   "How long warning signs must remain posted at every entrance to a treated field after the pesticide application has been completed"
  ],
  "answer": 2,
  "explanation": "The REI is the time that must pass between a pesticide application and the reentry of unprotected workers into the treated area. On WPS-covered labels the REI statement is found under the Agricultural Use Requirements heading.",
  "page": "40"
 },
 {
  "id": "s3-037",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "A label shows no REI or other restricted-entry statement. When should people reenter the treated area?",
  "choices": [
   "After a default interval of 12 hours has elapsed",
   "After 24 hours, unless the state has established a shorter interval",
   "Immediately, because no reentry restriction applies to the product",
   "Only after sprays have dried or dusts have settled"
  ],
  "answer": 3,
  "explanation": "When no REI or other restricted-entry statement appears on the label, all persons should wait at least until sprays have dried or dusts have settled before reentering a treated area. When a label lists multiple REIs, look in the Directions for Use section for each crop.",
  "page": "41"
 },
 {
  "id": "s3-038",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Two pesticides with different restricted-entry intervals are mixed in the same tank. Which REI must be followed?",
  "choices": [
   "The most restrictive one, meaning the longer of the two intervals",
   "The interval of whichever product was applied at the higher rate",
   "The average of the two intervals listed on the product labels",
   "The interval of the product that carries the more severe signal word"
  ],
  "answer": 0,
  "explanation": "When two or more pesticides are mixed together, you are required to follow the most restrictive REI, which is the longer one.",
  "page": "41"
 },
 {
  "id": "s3-039",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Which applications are covered by a label's \"Nonagricultural Use Requirements\" section?",
  "choices": [
   "Applications made to fallow farmland between rotations of any labeled crop",
   "Uses outside the WPS, such as lawns, golf courses, ornamentals, structures other than greenhouses, aquatic areas, and rights-of-way",
   "Any use of a general-use pesticide on privately owned residential property, whether the application is made indoors or outdoors on the grounds",
   "Applications inside nurseries and greenhouses that grow plants for retail sale"
  ],
  "answer": 1,
  "explanation": "The Nonagricultural Use Requirements section applies to pesticide uses not within the scope of the Worker Protection Standard, including lawns, golf courses, ornamental plantings, structures (except greenhouses), aquatic areas, and rights-of-way. Specific reentry times generally are not listed for these uses, but the label often cautions people and pets to stay out until sprays have dried or dusts have settled.",
  "page": "41"
 },
 {
  "id": "s3-040",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Why do the \"Storage and Disposal\" statements on most labels leave out specific disposal instructions?",
  "choices": [
   "State and local laws vary considerably",
   "EPA has no authority to regulate disposal through product labeling",
   "Detailed disposal instructions are reserved for the Safety Data Sheet",
   "Manufacturers cannot anticipate the container sizes sold in each market"
  ],
  "answer": 0,
  "explanation": "All labels contain instructions for storing and disposing of the pesticide, its rinsate, and its container, but because state and local laws vary considerably, specific instructions usually are not included. Typical statements include storing at temperatures above 32°F, triple rinsing the container promptly after emptying, not reusing nonrefillable containers, and offering containers for recycling.",
  "page": "41"
 },
 {
  "id": "s3-041",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Which information is found in the \"Directions for Use\" section of a pesticide label?",
  "choices": [
   "The product's chemical name, its formulation type, and the percentage of inert ingredients",
   "The routes of entry through which the product is most hazardous to the people handling it",
   "The pests controlled, the crop or site protected, mixing instructions, and the rate and timing of application",
   "The recommended emergency treatments to administer after an accidental exposure, along with the note to physicians on antidotes"
  ],
  "answer": 2,
  "explanation": "Directions for Use covers the pests the manufacturer claims the product will control; the crop, animal, or site it protects; mixing instructions; the rate and frequency of application; how close to harvest it can be applied; phytotoxicity and other possible injury; where and when to apply; plant-back, composting, and grazing restrictions; and how to minimize drift.",
  "page": "41"
 },
 {
  "id": "s3-042",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "A label directs you to a website for additional use instructions, but the address no longer works. What must you do before applying the product?",
  "choices": [
   "Proceed using only the instructions that are printed on the container itself",
   "Substitute the web instructions from a similar product with the same active ingredient",
   "Ask your state regulatory agency to waive the requirements that were posted online",
   "Contact the manufacturer and acquire the referenced material first"
  ],
  "answer": 3,
  "explanation": "Information a label references on a website is binding, and it is the applicator's responsibility to seek and obtain it. If the web address has changed or is no longer available, you must contact the manufacturer and acquire the referenced material before making an application.",
  "page": "43"
 },
 {
  "id": "s3-043",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "What separates a mandatory label statement from an advisory one?",
  "choices": [
   "Mandatory statements are written by EPA, while advisory statements are added by the state agency",
   "A mandatory statement must be followed to legally use the pesticide, while an advisory statement is a recommendation",
   "Mandatory statements address human safety, while advisory statements address only product performance",
   "Mandatory statements appear on the front panel, while advisory statements appear on the back panel"
  ],
  "answer": 1,
  "explanation": "Mandatory statements direct the user to take or avoid specific actions and must be followed to legally use the pesticide; they are generally written as imperatives such as \"Do not apply within 66 feet of wells.\" Advisory statements are manufacturer recommendations or best management practices written in descriptive, nondirective terms, and they cannot conflict with mandatory statements or be false or misleading.",
  "page": "43"
 },
 {
  "id": "s3-044",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "An applicator misuses a pesticide and causes crop damage on a neighboring property. What is the applicator's legal position?",
  "choices": [
   "The manufacturer shares the liability, because its registered product is what actually caused the damage to the neighboring crop",
   "The applicator is liable, because the label is a legal document and misuse can bring civil or criminal prosecution",
   "The applicator is shielded from liability if the certification exam covered that product",
   "Liability attaches only if the misused product was classified as restricted use"
  ],
  "answer": 1,
  "explanation": "The label is a legal document, and failure to follow it can cause a serious accident and constitute a legal violation subject to civil or criminal prosecution. The user is liable for any personal injury, crop or site damage, or pollution that occurs through the misuse of a pesticide.",
  "page": "44"
 },
 {
  "id": "s3-045",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "Who is required to develop the Safety Data Sheet for a pesticide product and provide it on request?",
  "choices": [
   "The Environmental Protection Agency",
   "The Occupational Safety and Health Administration",
   "The pesticide manufacturer",
   "The retail dealer who sells the product"
  ],
  "answer": 2,
  "explanation": "Pesticide manufacturers are required to develop an SDS for each product and provide it upon request. Commercial establishments must keep SDSs and make them available to workers or others who may contact the substance, its diluted end product, or its residues.",
  "page": "44"
 },
 {
  "id": "s3-046",
  "section": 3,
  "sectionName": "Pesticide Labeling",
  "question": "How does the Safety Data Sheet relate to the pesticide label?",
  "choices": [
   "It is an OSHA-regulated document for many professionals, used alongside the label but never in place of it",
   "It is the EPA-approved master version of the label, so its instructions override the container",
   "It is a simplified summary of the label written for applicators with limited technical training",
   "It replaces the label for any product manufactured after the 2012 international formatting change"
  ],
  "answer": 0,
  "explanation": "Unlike the FIFRA label, which is written for the pesticide end user, the SDS is regulated by the Occupational Safety and Health Administration and designed for multiple professionals such as manufacturers, transporters, medical personnel, and firefighters, so it carries more detailed technical information. Use it in conjunction with the label to understand the product, never in place of the label; since the 2012 formatting change it may even show a different signal word and pictograms not found on the label.",
  "page": "45"
 },
 {
  "id": "s4-001",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What makes up a pesticide formulation?",
  "choices": [
   "The technical grade active ingredient in its pure, concentrated form",
   "The mixture of solvents and carriers an applicator adds at the spray tank",
   "A combination of active and inert ingredients that forms an end-use product",
   "A blend of two or more active ingredients registered against the same pest"
  ],
  "answer": 2,
  "explanation": "A formulation combines the active ingredient with inert ingredients to create the end-use product. The inerts may be carriers, diluents, surface-active ingredients, or other additives that make the product safer, easier to handle and apply, or more effective.",
  "page": "49"
 },
 {
  "id": "s4-002",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Why do manufacturers formulate active ingredients instead of selling them in pure technical grade form?",
  "choices": [
   "Many pure active ingredients are too toxic, unstable, or hard to handle to apply directly",
   "Federal law forbids the sale of any pesticide product that contains a single ingredient",
   "Technical grade active ingredients lose most of their potency within weeks of manufacture",
   "Formulated end-use products always control a much wider range of pest species than pure ingredients do"
  ],
  "answer": 0,
  "explanation": "In pure technical grade form, some active ingredients are extremely toxic, many do not mix well with water, some are unstable, and some are difficult or unsafe to handle, transport, or store. Adding inert ingredients makes the end-use product safer and easier to use.",
  "page": "49"
 },
 {
  "id": "s4-003",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What defines an inert ingredient in a pesticide product?",
  "choices": [
   "It is chemically inactive and will not react with other substances",
   "It has no pesticidal activity of its own",
   "It makes up less than half of the product by weight",
   "It is nontoxic to humans and other mammals"
  ],
  "answer": 1,
  "explanation": "Inert ingredients are defined by having no pesticidal activity. They are not necessarily chemically inactive or harmless; they serve as carriers, diluents, or additives that make the product safer, easier to use, or more effective.",
  "page": "49"
 },
 {
  "id": "s4-004",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Along with the intended use of the pesticide, which property of an active ingredient determines how it is formulated?",
  "choices": [
   "Its molecular weight",
   "Its vapor pressure",
   "Its color and odor",
   "Its solubility"
  ],
  "answer": 3,
  "explanation": "Solubility and the intended use of the pesticide are the two factors that determine how an active ingredient is made into an end-use product. Some active ingredients dissolve in water, some only in oils or organic solvents, and a few dissolve readily in no solvent at all.",
  "page": "50"
 },
 {
  "id": "s4-005",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Once mixed, which type of liquid mixture will not settle out and needs no agitation?",
  "choices": [
   "A suspension",
   "A true solution",
   "An emulsion",
   "An invert emulsion"
  ],
  "answer": 1,
  "explanation": "A true solution cannot be separated by filtration or other mechanical means, will not settle out, and needs no shaking or stirring once made. Solutions are also transparent, while suspensions must be agitated and most are cloudy or opaque.",
  "page": "50"
 },
 {
  "id": "s4-006",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How is a suspension formed?",
  "choices": [
   "By dispersing undissolved fine solid particles in a liquid",
   "By dissolving a solid substance completely in a liquid carrier",
   "By suspending droplets of one liquid within another liquid",
   "By binding an active ingredient onto granule-sized clay particles"
  ],
  "answer": 0,
  "explanation": "A suspension is made by dispersing very small solid particles that do not dissolve in the liquid carrier, like flour in water. It must be agitated to keep the particles evenly distributed, or the undissolved parts will settle or float, and most suspensions are cloudy or opaque.",
  "page": "50"
 },
 {
  "id": "s4-007",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Which best describes an emulsion, such as homogenized milk or a diluted EC spray?",
  "choices": [
   "A solid pesticide dissolved completely in an oil-based carrier",
   "Fine mineral particles dispersed evenly throughout water",
   "Droplets of one liquid suspended in another liquid",
   "Two liquids combined chemically into a single new compound"
  ],
  "answer": 2,
  "explanation": "An emulsion is a special kind of suspension in which droplets of one liquid are suspended in another; each ingredient keeps its own identity. It is made by dissolving the active ingredient in an oil-based solvent and diluting with water, usually with emulsifiers added to keep it from separating, and it typically looks milky.",
  "page": "50"
 },
 {
  "id": "s4-008",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Which group of formulations is typically sold ready to use, needing no further dilution or mixing?",
  "choices": [
   "Wettable powders, soluble powders, and dry flowables",
   "Aerosols, dusts, pellets, granules, and most baits",
   "Emulsifiable concentrates, flowables, and soluble powders",
   "Ultra-low-volume concentrates, wettable powders, and liquid concentrates"
  ],
  "answer": 1,
  "explanation": "Ready-to-use products are applied with no further dilution or mixing; examples are aerosol (A), dust (D), pellet (P), granule (G), and most bait (B) products. Wettable powders, soluble powders, water-dispersible granules, and emulsifiable concentrates are concentrates that must be mixed or diluted first.",
  "page": "51"
 },
 {
  "id": "s4-009",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Compared with ready-to-use products, what is the usual trade-off of buying a pesticide as a concentrate?",
  "choices": [
   "Longer shelf life in storage, but a narrower range of pests listed on the product label",
   "Lower toxicity to the applicator, but a much higher cost for each unit of area treated",
   "Easier calibration of application equipment, but a greater chance of surface damage",
   "Lower cost per treated area, but more toxicity and more handling at mixing time"
  ],
  "answer": 3,
  "explanation": "Concentrates are often less expensive per treatment or unit area treated, but they are usually more toxic than dilute formulations of the same active ingredient and require more handling to mix and load, so they present a higher exposure risk to the user.",
  "page": "51"
 },
 {
  "id": "s4-010",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How much active ingredient is in a 10-pound bag of a product labeled 80 WDG?",
  "choices": [
   "8 pounds",
   "2 pounds",
   "0.8 pound",
   "10 pounds"
  ],
  "answer": 0,
  "explanation": "In a dry product name, the number gives the percentage of active ingredient by weight, so 80 WDG is a water-dispersible granule that is 80% active ingredient. A 10-pound bag therefore holds 8 pounds of active ingredient and 2 pounds of inert ingredient.",
  "page": "51"
 },
 {
  "id": "s4-011",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "On a liquid product label, what does the designation 4F indicate?",
  "choices": [
   "A flowable containing 4 percent active ingredient by weight",
   "A formulation that must be diluted with 4 parts of water",
   "A flowable with 4 pounds of active ingredient per gallon",
   "A fumigant that is supplied in 4-gallon containers"
  ],
  "answer": 2,
  "explanation": "Liquid formulations usually state the amount of active ingredient in pounds per gallon, so 4F means a flowable formulation with 4 pounds of active ingredient per gallon. Dry products, by contrast, state the percentage of active ingredient by weight.",
  "page": "51"
 },
 {
  "id": "s4-012",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How much active ingredient do most emulsifiable concentrates contain?",
  "choices": [
   "Less than 1 pound per gallon",
   "Between 2 and 6 pounds per gallon",
   "Between 8 and 10 pounds per gallon",
   "Between 10 and 12 pounds per gallon"
  ],
  "answer": 1,
  "explanation": "Most ECs contain between 2 and 6 pounds of active ingredient per gallon, along with one or more petroleum-based solvents and a mixing agent that lets the formulation mix with water to form an emulsion.",
  "page": "52"
 },
 {
  "id": "s4-013",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Which is a disadvantage of emulsifiable concentrate formulations?",
  "choices": [
   "They settle out of suspension quickly unless the spray tank is agitated constantly",
   "They are highly abrasive and rapidly wear out spray pumps and nozzles",
   "They leave a heavy visible residue on nearly every treated surface",
   "Their solvents can deteriorate rubber or plastic hoses and pump parts"
  ],
  "answer": 3,
  "explanation": "The petroleum-based solvents in ECs can cause rubber or plastic hoses, gaskets, pump parts, and other exposed surfaces to deteriorate. ECs actually need little agitation, are not abrasive, and leave little visible residue; other drawbacks include easy skin absorption, phytotoxicity risk, strong odor, and flammability.",
  "page": "53"
 },
 {
  "id": "s4-014",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How much active ingredient does a ready-to-use low-concentrate solution typically contain?",
  "choices": [
   "About 1 percent or less per unit volume",
   "About 5 to 10 percent per unit volume",
   "About 15 to 25 percent per unit volume",
   "About 50 percent per unit volume"
  ],
  "answer": 0,
  "explanation": "Ready-to-use low-concentrate solutions consist of a small amount of active ingredient, often 1% or less per unit volume, in a petroleum-based or water-based solvent. They require no further dilution, which reduces personal exposure risk but raises the cost per unit of active ingredient.",
  "page": "53"
 },
 {
  "id": "s4-015",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "In which situation are liquid rodenticide baits especially useful?",
  "choices": [
   "Where water is plentiful but food sources are limited",
   "Where rodents must be controlled without any bait stations",
   "Where food is abundant but water is scarce or absent",
   "Where sanitation is excellent and rodent numbers are low"
  ],
  "answer": 2,
  "explanation": "Liquid rodenticide baits, mixed with water and placed in specially designed bait stations, often control rodents in areas where food is abundant but water is scarce or lacking. They also work where sanitation is poor, because traditional food-based baits must compete with other food sources there.",
  "page": "54"
 },
 {
  "id": "s4-016",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How much active ingredient do ultra-low-volume concentrates contain?",
  "choices": [
   "About 50 percent",
   "Almost 100 percent",
   "Between 2 and 6 percent",
   "No more than 25 percent"
  ],
  "answer": 1,
  "explanation": "ULV concentrates have almost 100% active ingredient and are designed to be used as is or diluted with only small quantities of specified solvents. Because the concentrated product is applied as very fine droplets, ULV work carries a high drift hazard and high dermal and inhalation exposure risk.",
  "page": "54"
 },
 {
  "id": "s4-017",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What is an invert emulsion?",
  "choices": [
   "A water-soluble pesticide dispersed in an oil carrier",
   "An oil-soluble pesticide dispersed in a water carrier",
   "A solid pesticide suspended in a petroleum solvent",
   "A gas dissolved under pressure in a liquid carrier"
  ],
  "answer": 0,
  "explanation": "An invert emulsion contains a water-soluble pesticide dispersed in an oil carrier, usually fuel oil, using a special emulsifier. These thick, mayonnaise-like mixtures form large droplets that shrink slowly because oil evaporates more slowly than water, so drift is low; they are most often used for right-of-way weed control.",
  "page": "55"
 },
 {
  "id": "s4-018",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Which describes a flowable (F or AF) formulation?",
  "choices": [
   "A water-soluble active ingredient dissolved in oil, forming a transparent concentrate",
   "A liquid active ingredient absorbed into porous granules for direct dry application",
   "A gaseous active ingredient held in liquid form under pressure until it is released",
   "An insoluble solid active ingredient ground fine and suspended in a little liquid"
  ],
  "answer": 3,
  "explanation": "Flowables are made from active ingredients that dissolve in neither water nor oil. The material is ground into a fine powder, often on a dry carrier such as clay, then suspended in a very small amount of liquid to give a thick liquid suspension that combines many characteristics of ECs and wettable powders.",
  "page": "55"
 },
 {
  "id": "s4-019",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How do smoke or fog generator formulations differ from ready-to-use aerosol products?",
  "choices": [
   "They contain a higher percentage of active ingredient than any other liquid formulation",
   "They are packaged in pressurized cylinders that must be heated before they release",
   "They are not packaged under pressure; a machine breaks the liquid into a fine mist",
   "They are dry powders that the generator ignites and disperses as a pesticidal smoke"
  ],
  "answer": 2,
  "explanation": "Formulations for smoke or fog generators are not packaged or sold under pressure. The machines use a rapidly whirling disk or a heated surface to break the liquid into very fine droplets, and they are used mainly for insect control in structures like greenhouses, barns, and warehouses and for outdoor mosquito and biting fly control.",
  "page": "56"
 },
 {
  "id": "s4-020",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How much active ingredient do most ready-to-use dust formulations contain?",
  "choices": [
   "Usually 10 percent or less by weight",
   "Usually 25 to 40 percent by weight",
   "Usually about 50 percent by weight",
   "Usually 75 percent or more by weight"
  ],
  "answer": 0,
  "explanation": "Most dusts are ready to use and contain a low percentage of active ingredient, usually 10% or less by weight, on a fine dry carrier such as talc, chalk, or clay. A few dust concentrates contain much more active ingredient and must be mixed with dry inert carriers before application; dusts are always used dry, never mixed with liquid.",
  "page": "56"
 },
 {
  "id": "s4-021",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How does a tracking powder kill insects and rodents?",
  "choices": [
   "The active ingredient soaks directly through the skin or exoskeleton on contact",
   "Pests walk through the dust, pick it up on their bodies, and swallow it while grooming",
   "The fine particles block the breathing openings of any pest that crosses them",
   "The powder draws pests in to feed on it because it is blended with food-grade bait"
  ],
  "answer": 1,
  "explanation": "Tracking powders are finely ground dusts carrying an adsorbed stomach poison. Insects and rodents that walk through the dust pick it up on their legs, feet, and fur and then ingest it when grooming, which makes these products effective where bait acceptance is poor, such as sites where food is abundant.",
  "page": "57"
 },
 {
  "id": "s4-022",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What amount of active ingredient do granular formulations usually contain?",
  "choices": [
   "Less than 1 percent",
   "15 to 30 percent",
   "30 to 50 percent",
   "1 to 15 percent"
  ],
  "answer": 3,
  "explanation": "The amount of active ingredient in granular formulations is relatively low, usually ranging from 1% to 15%. The active ingredient coats the outside of coarse carrier particles, such as clay, ground corncobs, or walnut shells, or is absorbed into them.",
  "page": "57"
 },
 {
  "id": "s4-023",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Why are contact pesticides rarely sold as granular formulations?",
  "choices": [
   "Granules break down too quickly once they are exposed to direct sunlight",
   "Granular carrier materials chemically deactivate contact active ingredients",
   "Granules do not stick to foliage or other uneven surfaces",
   "Granules cannot be applied with common spreader equipment"
  ],
  "answer": 2,
  "explanation": "Granules do not stick to foliage or other uneven surfaces, so products that must contact the pest are rarely formulated this way. Granular pesticides are mostly applied to soil, where they control weeds, nematodes, and insects or deliver systemic pesticides taken up by plant roots.",
  "page": "58"
 },
 {
  "id": "s4-024",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Why can granular pesticides be especially hazardous to waterfowl and other birds?",
  "choices": [
   "Birds may eat the grain-like granules or mistake them for grit needed to grind their food",
   "The granules dissolve quickly in the shallow water where waterfowl feed and rest",
   "Birds absorb the active ingredient through their feet while walking over treated soil",
   "Granule dust coats the feathers of birds and destroys their natural waterproofing"
  ],
  "answer": 0,
  "explanation": "Birds may feed on grain- or seed-like granules, or mistake them for the grit they need to grind up their food, so granular products can be hazardous to nontarget species, especially waterfowl and other birds.",
  "page": "58"
 },
 {
  "id": "s4-025",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How do pellet formulations differ from granular formulations?",
  "choices": [
   "Pellets contain a much higher percentage of active ingredient than granules do",
   "Pellet particles are uniform in weight and shape, allowing precise application",
   "Pellets dissolve fully in water, while granular products only form suspensions",
   "Pellets are used only as fumigants, while granules never release toxic gases"
  ],
  "answer": 1,
  "explanation": "In pellet formulations all particles are about the same weight and shape because the active ingredient and inert materials are mixed into a slurry and extruded under pressure, then cut to length. That uniformity permits precise application, often as spot treatments. A few fumigants come as pellets and are clearly labeled to avoid confusion.",
  "page": "58"
 },
 {
  "id": "s4-026",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How much active ingredient do wettable powders contain?",
  "choices": [
   "1 to 15 percent, most often around 10 percent",
   "15 to 50 percent, most often around 30 percent",
   "5 to 95 percent, usually 50 percent or more",
   "5 to 95 percent, usually 25 percent or less"
  ],
  "answer": 2,
  "explanation": "Wettable powders contain 5% to 95% active ingredient, usually 50% or more. The particles do not dissolve in water; mixed with water they form a suspension that settles quickly without constant agitation, and the spray is prepared by first making a slurry with a small amount of water.",
  "page": "59"
 },
 {
  "id": "s4-027",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What happens when a wettable powder spray is applied to a porous surface such as concrete or untreated wood?",
  "choices": [
   "Both the water and the pesticide soak deep into the treated material",
   "The pesticide penetrates the pores while the water evaporates right away",
   "The particles bond chemically to the surface and cannot be washed off",
   "Only the water penetrates; the pesticide particles stay on the surface"
  ],
  "answer": 3,
  "explanation": "On porous materials such as concrete, plaster, and untreated wood, only the water carrier penetrates; the wettable powder particles remain on the treated surface. This is one reason wettable powders have excellent residual activity and do not usually harm treated surfaces.",
  "page": "59"
 },
 {
  "id": "s4-028",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What added benefit do water-dispersible granules (dry flowables) offer over wettable powders?",
  "choices": [
   "Reduced handler exposure from larger, less dusty, easier-to-measure particles",
   "No agitation is needed once the granules have dissolved fully in the spray tank",
   "A much higher percentage of active ingredient in every pound of formulated product",
   "The granules dissolve into a true solution instead of forming a spray suspension"
  ],
  "answer": 0,
  "explanation": "WDGs/DFs are wettable powders compressed into dust-free, granule-sized particles. They share the advantages and disadvantages of wettable powders, including the need for constant agitation, but reduce handler exposure because the particles are larger and less dusty and are easier to remove from the container and measure.",
  "page": "59"
 },
 {
  "id": "s4-029",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Which single disadvantage of wettable powders do soluble powders share?",
  "choices": [
   "Constant mechanical agitation is needed to keep the tank mixture uniform",
   "Inhalation hazard while measuring and mixing the concentrated powder",
   "Abrasive particles that wear out spray pumps and spray nozzles",
   "Visible residues that are left behind on most treated surfaces"
  ],
  "answer": 1,
  "explanation": "Soluble powders dissolve in water to form a true solution, so after thorough mixing no more agitation is needed. They keep all the advantages of wettable powders and only one drawback: the inhalation hazard while measuring and mixing the concentrated powder. Few pesticides come this way because few active ingredients dissolve in water.",
  "page": "60"
 },
 {
  "id": "s4-030",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How much active ingredient do most bait formulations contain?",
  "choices": [
   "Usually 10 to 20 percent",
   "Usually about 25 percent",
   "Usually less than 5 percent",
   "Usually 40 percent or more"
  ],
  "answer": 2,
  "explanation": "A bait is an active ingredient mixed with food or another attractive substance, and the amount of active ingredient in most bait formulations is quite low, usually less than 5%. Baits either attract the pest or are placed where the pest will find them.",
  "page": "60"
 },
 {
  "id": "s4-031",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Which formulations are now the primary ones used for cockroach control in the pest control industry?",
  "choices": [
   "Pastes and gels injected into cracks and crevices",
   "Wettable powder suspensions sprayed along baseboards",
   "Granules scattered behind kitchen appliances",
   "Fogging concentrates released throughout the structure"
  ],
  "answer": 0,
  "explanation": "Insecticides formulated as pastes and gels are now the primary formulations used in cockroach control. They are injected or placed as a bead or dot inside small cracks and crevices where insects hide or travel, using syringes or bait guns that force the bait out when a plunger or trigger is pressed.",
  "page": "60"
 },
 {
  "id": "s4-032",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What distinguishes a fumigant from other pesticide formulations?",
  "choices": [
   "It must always be diluted with water immediately before it is applied",
   "It only controls pests that ingest the treated material or commodity",
   "It is always packaged as a liquid held under high pressure",
   "It delivers its active ingredient to the target site as a gas"
  ],
  "answer": 3,
  "explanation": "Fumigants deliver the active ingredient as a gas. Some are liquids under pressure that become gases when released, some are volatile liquids in ordinary containers, and some are solids that release gas in humid conditions or in the presence of water or water vapor.",
  "page": "61"
 },
 {
  "id": "s4-033",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Why must a site be enclosed or covered during a fumigation treatment?",
  "choices": [
   "To protect the fumigant from breaking down in direct sunlight",
   "To keep the pesticidal gas from escaping the target area",
   "To hold in the heat that the fumigant needs in order to activate",
   "To keep rain from diluting the fumigant below an effective dose"
  ],
  "answer": 1,
  "explanation": "Because fumigants work as gases, the target site must be enclosed or covered to prevent the gas from escaping. Fumigants are nonspecific and highly toxic to humans and all other organisms, carry a high inhalation exposure risk, and most require specialized personal protective equipment.",
  "page": "61"
 },
 {
  "id": "s4-034",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What is a microencapsulated pesticide?",
  "choices": [
   "A pesticide sealed inside a water-soluble film bag that dissolves in the spray tank",
   "A gel formulation packaged in premeasured syringes for crack and crevice work",
   "Pesticide particles or droplets surrounded by a coating such as plastic or starch",
   "A pesticide bonded to microscopic clay particles that release it as they decompose"
  ],
  "answer": 2,
  "explanation": "Microencapsulated pesticides are dry particles or liquid droplets surrounded by a plastic, starch, or other coating. They are mixed with water and applied as a spray, and the coating can provide timed slow release, which may mean longer restricted-entry or preharvest intervals for highly toxic products.",
  "page": "61"
 },
 {
  "id": "s4-035",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Why can highly toxic microencapsulated pesticides be especially dangerous to honey bee colonies?",
  "choices": [
   "Bees may gather pollen-sized capsules and carry them back to the hive",
   "The coating material attracts foraging bees because it is made from sugars",
   "The capsules dissolve in nectar and contaminate the flowers that bees visit",
   "The formulation vaporizes in warm weather and drifts into hives near fields"
  ],
  "answer": 0,
  "explanation": "If the capsules do not break down quickly and are the same size as pollen grains, foraging bees may collect them and carry them back to the hive. When the coatings later break down and release the pesticide, the whole colony may be poisoned.",
  "page": "61"
 },
 {
  "id": "s4-036",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "As a rule, the film of a water-soluble pesticide bag dissolves in which liquid?",
  "choices": [
   "Organic solvents",
   "Water",
   "Undiluted emulsifiable concentrates",
   "Refined crop oils"
  ],
  "answer": 1,
  "explanation": "The special film dissolves when added to water in the spray tank, releasing a premeasured dose of wettable powder, soluble powder, or gel. As a rule it will not dissolve in organic solvents or undiluted ECs, so mixers must follow label instructions, store the packets dry, and never handle them with damp or wet gloves.",
  "page": "62"
 },
 {
  "id": "s4-037",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How do impregnated pesticide products such as livestock ear tags and pet collars work?",
  "choices": [
   "Body heat melts the carrier so the pesticide spreads over the animal's skin and coat",
   "The pesticide is carried in the animal's bloodstream and kills pests as they feed",
   "The solid material shreds gradually, dropping pesticide dust onto the animal's coat",
   "Pesticide is slowly released from the solid material, and the vapors control nearby pests"
  ],
  "answer": 3,
  "explanation": "Impregnates incorporate the active ingredient into a solid material, usually plastic. The pesticide evaporates or is released over time, and its vapors control nearby pests. Ear tags, plastic pest strips, adhesive tapes, and pet collars are common examples, and fertilizers may also be impregnated with pesticides.",
  "page": "62"
 },
 {
  "id": "s4-038",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "When does federal law allow an applicator to tank-mix two pesticides?",
  "choices": [
   "Whenever no label of a product in the mix specifically prohibits combining them",
   "Only when the combination is listed as an approved mixture on both product labels",
   "Only after the state pesticide agency has issued a permit for that combination",
   "Whenever both products carry the same signal word and same formulation type"
  ],
  "answer": 0,
  "explanation": "Federal law allows applicators to combine pesticides unless the labeling of one or more components of the intended tank mix specifically prohibits it. If no prohibition exists, a pesticide may be mixed with a fertilizer or with one or more other pesticides.",
  "page": "63"
 },
 {
  "id": "s4-039",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "When pesticides are tank-mixed, what rule applies to the dosage of each product in the mixture?",
  "choices": [
   "The combined total of all products must not exceed the highest single label rate",
   "Each product must be cut back to half of its own individual label rate",
   "Each must be at or below the label rate for that separate component",
   "Dosages may be raised slightly to make up for dilution in the mixture"
  ],
  "answer": 2,
  "explanation": "In a tank mix, all dosages must be at or below the label rate for each separate component of the mixture. Tank mixing itself saves time, labor, fuel, and equipment wear and reduces soil compaction, but the products must be compatible.",
  "page": "63"
 },
 {
  "id": "s4-040",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What is incompatibility in the context of pesticide mixtures?",
  "choices": [
   "A label statement that prohibits applying a pesticide to certain crops or application sites",
   "A condition that keeps mixed pesticides from forming a uniform solution or suspension",
   "A chemical reaction that makes a stored pesticide grow more toxic over time",
   "The tendency of two pesticides to control the same spectrum of pest species"
  ],
  "answer": 1,
  "explanation": "Incompatibility is a condition that prevents pesticides from mixing together properly to form a uniform solution or suspension. Products must be compatible before they can be tank-mixed; compatibility testing and tank-mix preparation are covered in the chapter on planning the application.",
  "page": "63"
 },
 {
  "id": "s4-041",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What is an adjuvant?",
  "choices": [
   "A low-toxicity companion pesticide added to a tank mix to broaden its control spectrum",
   "A carrier liquid used to dilute a pesticide concentrate to its final spray strength",
   "A registered synergist that multiplies the toxicity of an active ingredient",
   "A chemical without pesticidal activity added to change how a pesticide performs"
  ],
  "answer": 3,
  "explanation": "An adjuvant is a chemical that affects how a pesticide works, improving its action or changing the characteristics of the formulation or spray mixture. Adjuvants alone have no pesticidal activity; most end-use products already contain them, and applicators may also add them to a tank mix.",
  "page": "63"
 },
 {
  "id": "s4-042",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Why are there no standards for the composition, quality, or performance of adjuvants?",
  "choices": [
   "The EPA does not register adjuvants because they lack pesticidal properties",
   "Adjuvant standards are set separately by each state, so no national rules exist",
   "Manufacturers are exempt from standards as long as they publish Safety Data Sheets",
   "Adjuvant chemistry varies too widely for any single standard to be practical"
  ],
  "answer": 0,
  "explanation": "Because adjuvants lack pesticidal properties, the U.S. Environmental Protection Agency does not register them, and as a result no standards exist for their composition, quality, or performance. Questions about an adjuvant should go to its manufacturer, which can supply labels, technical data sheets, and SDSs.",
  "page": "63"
 },
 {
  "id": "s4-043",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Most pesticide solutions and suspensions are stable within which pH range?",
  "choices": [
   "7.0 to 8.5",
   "4.0 to 5.5",
   "5.5 to 7.0",
   "6.5 to 9.0"
  ],
  "answer": 2,
  "explanation": "Most pesticide solutions or suspensions are stable between pH 5.5 and 7.0, slightly acidic to neutral; water outside this range can degrade some pesticides very rapidly. When using a buffer or pH modifier, add it to the spray tank water first and mix well before adding pesticides or other adjuvants.",
  "page": "64"
 },
 {
  "id": "s4-044",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What does a safener adjuvant do?",
  "choices": [
   "Neutralizes pesticide spills so that a contaminated area can be cleaned up safely",
   "Reduces a formulation's toxicity to the handler or the treated surface",
   "Slows the breakdown of a pesticide when it is exposed to strong sunlight",
   "Prevents a pesticide from leaching downward into shallow groundwater"
  ],
  "answer": 1,
  "explanation": "Safeners reduce the toxicity of a pesticide formulation to the pesticide handler or to the treated surface. They are one type of adjuvant that is not a surfactant; extenders and stickers, by contrast, are the adjuvants that slow wash-off, evaporation, or photodegradation on the target.",
  "page": "64"
 },
 {
  "id": "s4-045",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Which adjuvant increases the viscosity of a spray mixture, which can reduce drift and slow evaporation?",
  "choices": [
   "A thickener",
   "An extender",
   "A sticker",
   "A compatibility agent"
  ],
  "answer": 0,
  "explanation": "Thickeners increase the viscosity of spray mixtures, which may reduce drift and slow evaporation; slower evaporation gives systemic pesticides more time to be absorbed by foliage. Extenders keep pesticides active on the target longer, and compatibility agents help pesticides and fertilizers combine.",
  "page": "64"
 },
 {
  "id": "s4-046",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "How do surfactants such as wetting agents and spreaders improve spray coverage?",
  "choices": [
   "They chemically bond the pesticide to the waxy cuticle of the treated leaf",
   "They lower the evaporation rate of the spray droplets while they fall",
   "They give the droplets an electric charge that pulls them onto the foliage",
   "They physically change the surface tension of the spray droplets"
  ],
  "answer": 3,
  "explanation": "Surfactants, or surface active ingredients, alter the dispersing, spreading, and wetting properties of spray droplets by physically changing droplet surface tension. Lower surface tension lets droplets spread out instead of beading up, improving coverage, especially on plants with waxy or hairy leaves.",
  "page": "64"
 },
 {
  "id": "s4-047",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "Why should cationic surfactants not be used as stand-alone surfactants?",
  "choices": [
   "They break down within a few hours of being mixed",
   "They foam excessively inside the spray tank",
   "They are often phytotoxic",
   "They are strongly corrosive to spray equipment"
  ],
  "answer": 2,
  "explanation": "Cationic surfactants carry a positive charge and are often phytotoxic, so they should not be used as stand-alone surfactants. Anionic surfactants, with a negative charge, are most often used with contact pesticides, while nonionic surfactants, with no charge, are often used with systemic products and are compatible with most pesticides.",
  "page": "65"
 },
 {
  "id": "s4-048",
  "section": 4,
  "sectionName": "Pesticide Formulations",
  "question": "What is the relationship between adjuvants and surfactants?",
  "choices": [
   "All surfactants are adjuvants, but not all adjuvants are surfactants",
   "All adjuvants are surfactants, but not all surfactants are adjuvants",
   "The two terms describe exactly the same group of spray additives",
   "Surfactants are mild pesticides, while adjuvants are inert additives"
  ],
  "answer": 0,
  "explanation": "An adjuvant is any substance added to modify the properties of a formulation or finished spray, while a surfactant is the specific kind of adjuvant that affects the interaction between a spray droplet and a treated surface. So every surfactant is an adjuvant, but adjuvants such as drift control additives and safeners are not surfactants.",
  "page": "65"
 },
 {
  "id": "s5-001",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which parts of a pesticide label indicate the product's human toxicity concerns and the precautions needed to reduce your risk?",
  "choices": [
   "The signal word and the Hazards to Humans and Domestic Animals section",
   "The ingredient statement and the net contents declaration on the front panel",
   "The directions for use and the storage and disposal section",
   "The establishment number and the agricultural use requirements box"
  ],
  "answer": 0,
  "explanation": "The signal word and the label's Hazards to Humans and Domestic Animals section tell you the human toxicity concerns and the precautions that minimize your risk. Physical or chemical hazards such as being explosive or combustible appear under Precautionary Statements, and the Safety Data Sheet gives further detail on toxicity and precautions.",
  "page": "69"
 },
 {
  "id": "s5-002",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which equation expresses the risk a pesticide poses to a handler?",
  "choices": [
   "Hazard = toxicity x exposure",
   "Hazard = toxicity + exposure",
   "Hazard = toxicity / exposure",
   "Hazard = concentration x application rate"
  ],
  "answer": 0,
  "explanation": "Hazard, or risk, is the probability of harm arising from the combination of a product's innate toxicity and the level of human exposure. An applicator can lower risk by choosing a less toxic product, by reducing exposure, or both; even a low-toxicity product becomes hazardous when the likelihood of exposure is high.",
  "page": "70"
 },
 {
  "id": "s5-003",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "What does the term \"toxicity\" describe?",
  "choices": [
   "The likelihood that a handler will get the product onto or into the body",
   "A pesticide's capacity to cause short-term (acute) or long-term (chronic) injury",
   "The probability that harm will occur when a product is used in a particular situation",
   "The amount of active ingredient that a formulation contains per gallon"
  ],
  "answer": 1,
  "explanation": "Toxicity is the measure of a pesticide's capacity to cause injury or illness, a combination of its chemical properties and its concentration. Getting the product onto or into the body is exposure, and the probability of harm in a given situation is hazard, or risk.",
  "page": "70"
 },
 {
  "id": "s5-004",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Pesticides can enter or contact the body through which four routes?",
  "choices": [
   "Skin, ears, nose, and mouth",
   "Hair, eyes, stomach, and lungs",
   "Skin, eyes, lungs, and mouth",
   "Skin, fingernails, lungs, and eyes"
  ],
  "answer": 2,
  "explanation": "The four routes of exposure are dermal (skin), ocular (eye contact), inhalation (lungs), and oral (mouth). Routine handling tasks such as opening containers, mixing and loading concentrates, spraying, cleaning up spills, and reentering a treated area too soon present an especially high likelihood of exposure.",
  "page": "70"
 },
 {
  "id": "s5-005",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "During which task does the greatest hazard to the applicator most often occur?",
  "choices": [
   "Spraying the diluted mixture",
   "Mixing and loading the concentrate",
   "Storing unopened containers",
   "Driving the sprayer between treatment sites"
  ],
  "answer": 1,
  "explanation": "Mixing and loading expose the handler to the chemical in its most concentrated, most toxic form unless engineering controls such as lock-and-load devices or water-soluble bags of formulated product are used. Hazards while handling or applying the diluted pesticide are frequently much lower.",
  "page": "70"
 },
 {
  "id": "s5-006",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "How do systemic effects of a pesticide differ from local effects?",
  "choices": [
   "Systemic effects occur away from the contact point, after absorption and distribution through the body",
   "Systemic effects appear only on the skin, while local effects involve the internal organs",
   "Systemic effects are always permanent injuries, while local effects always heal completely within a day",
   "Systemic effects are caused only by fumigants, while local effects come only from liquid sprays"
  ],
  "answer": 0,
  "explanation": "Local (contact) effects such as dermatitis or eye, nose, and throat irritation occur at the spot the pesticide touches. Systemic effects, such as impaired blood clotting, nerve damage, reproductive problems, or kidney and liver damage, happen once the chemical has been absorbed and distributed throughout the body.",
  "page": "71"
 },
 {
  "id": "s5-007",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Severe skin blisters are a local effect specifically associated with which pesticide group?",
  "choices": [
   "Anticoagulant rodenticides",
   "Synthetic pyrethroids",
   "Fumigants",
   "Borate insecticides"
  ],
  "answer": 2,
  "explanation": "Many herbicides and fungicides cause dermatitis, but fumigants can cause severe blisters on the skin. Local effects also include eye irritation and swelling, stinging, or burning of the nose, mouth, or throat.",
  "page": "71"
 },
 {
  "id": "s5-008",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Can it be predicted in advance which people will develop an allergic reaction to a particular pesticide product?",
  "choices": [
   "No; there is no way to predict who will develop an allergy to a given product",
   "Yes; anyone with seasonal hay fever will also react to pesticide products",
   "Yes; a routine blood test given at certification identifies all sensitive people",
   "No; allergies occur only after at least ten years of occupational exposure"
  ],
  "answer": 0,
  "explanation": "Allergic effects strike only some people, and there is no way to predict who will become sensitized to a particular product. Reactions range from dermatitis, blisters, and hives to asthma or life-threatening shock. An allergic reaction also does not mean the person is more sensitive to the pesticide's chronic or delayed effects, which arise from different chemical reactions in the body.",
  "page": "72"
 },
 {
  "id": "s5-009",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which habit is a common cause of oral pesticide exposure in handlers?",
  "choices": [
   "Eating, drinking, or smoking without washing their hands first",
   "Wearing chemical-resistant gloves for more than one task",
   "Standing upwind of the spray rig while the tank mixture is agitating",
   "Storing lunch containers in the cab of the service vehicle"
  ],
  "answer": 0,
  "explanation": "Pesticide on unwashed hands transfers straight to the mouth during eating, drinking, smoking, or chewing. Oral exposure also occurs when pesticide splashes into the mouth during mixing, loading, or equipment cleaning.",
  "page": "72"
 },
 {
  "id": "s5-010",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which working condition commonly leads to inhalation exposure?",
  "choices": [
   "Splashing spray mixture on bare forearms while loading the tank",
   "Handling pesticides in a confined, poorly ventilated area",
   "Touching treated foliage before the spray deposit has dried",
   "Rubbing the eyes with a contaminated glove during a break"
  ],
  "answer": 1,
  "explanation": "Inhalation exposure comes from working in confined or poorly ventilated spaces, handling dusts or powders, wearing an inadequate or poorly fitting respirator, and being exposed to spray or dust drift. Splashes and contact with treated surfaces are dermal exposures, and rubbing the eyes with contaminated hands or gloves is an eye exposure.",
  "page": "72"
 },
 {
  "id": "s5-011",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "During a spraying operation, studies show up to what percentage of total body exposure to pesticides occurs through skin contact?",
  "choices": [
   "97%",
   "75%",
   "50%",
   "25%"
  ],
  "answer": 0,
  "explanation": "In most cases the skin is the main route of pesticide entry, and some studies show that up to 97% of all body exposure during a spraying operation is by skin contact. Dermal exposure can come from airborne dust, splashes, spills, spray mist, or contact with residues on treated surfaces and contaminated equipment.",
  "page": "73"
 },
 {
  "id": "s5-012",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which parts of the body tend to absorb pesticides most rapidly?",
  "choices": [
   "Warm, moist areas such as the groin and armpits",
   "The palms of the hands and the forearms",
   "Thick, calloused areas such as the heels and the elbows",
   "Cool, dry surfaces such as the shins and kneecaps"
  ],
  "answer": 0,
  "explanation": "Warm, moist skin, including the groin, armpits, head, neck, backs of the hands, and tops of the feet, absorbs pesticide faster than the palms and forearms. The palms and forearms still need protection because they receive the most exposure, cuts and abrasions increase absorption, and the longer a pesticide stays in contact, the more is absorbed.",
  "page": "73"
 },
 {
  "id": "s5-013",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which formulation type penetrates the skin most readily?",
  "choices": [
   "Granular formulations applied dry to the soil surface",
   "Oil-based liquids such as emulsifiable concentrates",
   "Wettable powders mixed into a spray tank",
   "Water-soluble powders and dusts"
  ],
  "answer": 1,
  "explanation": "Oil-based liquid formulations such as emulsifiable concentrates are readily absorbed through the skin. Water-soluble liquids or powders, wettable powders, dusts, and granular pesticides do not penetrate skin easily. Application methods with high dermal exposure include overhead applications, blower-applied mists and dusts, animal pour-ons, and dipping livestock or pets.",
  "page": "73"
 },
 {
  "id": "s5-014",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "When pesticides are accidentally swallowed in the home, who are the most common victims?",
  "choices": [
   "Children",
   "Elderly family members",
   "Teenagers doing yard work",
   "Visiting service workers"
  ],
  "answer": 0,
  "explanation": "Children are the most common victims of accidental ingestion, which typically happens when pesticides are stored improperly, transferred into unlabeled bottles or containers normally used for food or beverages, or when rodent baits are poorly placed. Never store a pesticide in a food or drink container, and keep marked pesticide measuring cups separate from kitchen utensils.",
  "page": "74"
 },
 {
  "id": "s5-015",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Following a single exposure, acute effects of a pesticide usually appear within what period?",
  "choices": [
   "24 hours",
   "48 hours",
   "1 week",
   "30 days"
  ],
  "answer": 0,
  "explanation": "Acute toxicity is the measure of harm caused by a single, one-time exposure event, and acute effects normally occur shortly after exposure, usually within 24 hours. Illness or injury that shows up later than that is classified as a delayed effect.",
  "page": "75"
 },
 {
  "id": "s5-016",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "What does the LD50 of a pesticide represent?",
  "choices": [
   "The dose that kills half of a test-animal population, expressed in mg/kg of body weight",
   "The lowest dose that produces any detectable symptoms in half of the exposed human volunteers",
   "The airborne concentration that kills half of the test animals, expressed in milligrams per liter",
   "The residue level allowed on feed crops, in milligrams per kilogram of harvested commodity"
  ],
  "answer": 0,
  "explanation": "The LD50, or lethal dose 50%, is the dose of a toxicant required to kill 50% of a population of test animals under a standard set of conditions, recorded in milligrams of toxicant per kilogram of body weight. Feeding tests give the oral LD50, while skin tests give the dermal LD50.",
  "page": "75"
 },
 {
  "id": "s5-017",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Product A has an oral LD50 of 40 mg/kg and product B has an oral LD50 of 400 mg/kg. Which is more acutely toxic?",
  "choices": [
   "Product A, since a smaller dose kills half the test animals",
   "Product B, since its LD50 number is ten times larger than product A's",
   "Neither; both values fall within the same toxicity category",
   "It cannot be judged, because LD50 values measure only chronic harm"
  ],
  "answer": 0,
  "explanation": "The lower the LD50 value, the less material it takes to kill 50% of the test population and the greater the toxicity of the chemical. LD50 values have limits: they measure only one effect, death, from a single exposure, and they do not translate directly to humans because human body systems differ slightly from those of test animals.",
  "page": "75"
 },
 {
  "id": "s5-018",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "What does an LC50 value describe?",
  "choices": [
   "The concentration of a substance in air or water that kills 50% of a test population",
   "The single swallowed dose that kills half of the test animals, in mg per kg of body weight",
   "The percentage of active ingredient that a liquid concentrate may lawfully contain",
   "The maximum residue concentration permitted in drinking water, in parts per billion"
  ],
  "answer": 0,
  "explanation": "The LC50, or lethal concentration 50%, is the concentration of a substance in air or water required to kill 50% of the test population, usually stated in parts per million or milligrams per liter. It is a common measure of lethal effects on fish and other aquatic organisms, and the values most directly applicable to human health are lethal concentrations in air.",
  "page": "75"
 },
 {
  "id": "s5-019",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "A pesticide carrying DANGER-POISON because of its acute oral toxicity has an oral LD50 in which range?",
  "choices": [
   "A trace to 50 mg/kg",
   "50 to 500 mg/kg",
   "500 to 5,000 mg/kg",
   "5,000 to 20,000 mg/kg"
  ],
  "answer": 0,
  "explanation": "Highly toxic Hazard Class I products have oral LD50 values from a trace to 50 mg/kg, dermal LD50 from a trace to 200 mg/kg, or inhalation LC50 from a trace to 0.2 mg/l. For these products a very low dose, a few drops to 1 teaspoon, could kill a person.",
  "page": "76"
 },
 {
  "id": "s5-020",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "The signal word WARNING, when based on systemic toxicity, corresponds to which acute oral LD50 range?",
  "choices": [
   "A trace to 50 mg/kg",
   "50 to 500 mg/kg",
   "500 to 5,000 mg/kg",
   "Greater than 5,000 mg/kg"
  ],
  "answer": 1,
  "explanation": "Moderately toxic Hazard Class II products carry WARNING (and the Spanish AVISO) with oral LD50 values of 50 to 500 mg/kg, dermal LD50 of 200 to 2,000 mg/kg, or inhalation LC50 of 0.2 to 2 mg/l. A small to medium dose (1 teaspoon to 1 ounce) could cause death, illness, or skin, eye, or respiratory damage; the concern behind the signal word may be systemic toxicity, contact injury, or both.",
  "page": "76"
 },
 {
  "id": "s5-021",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Slightly toxic products in Hazard Class III must display which signal word, and what is their oral LD50 range?",
  "choices": [
   "CAUTION, with oral LD50 values of 500 to 5,000 mg/kg",
   "CAUTION, with oral LD50 values of 50 to 500 mg/kg",
   "WARNING, with oral LD50 values of 500 to 5,000 mg/kg",
   "DANGER, with oral LD50 values above 5,000 mg/kg"
  ],
  "answer": 0,
  "explanation": "Hazard Class III (slightly toxic) products are required to carry CAUTION, with oral LD50 values between 500 and 5,000 mg/kg, dermal LD50 of 2,000 to 20,000 mg/kg, or inhalation LC50 of 2 to 20 mg/l. A medium to large dose, roughly 1 ounce to 1 pint or 1 pound, could cause death, illness, or skin, eye, or respiratory damage.",
  "page": "76"
 },
 {
  "id": "s5-022",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which statement is true of the lowest-toxicity products in Hazard Class IV?",
  "choices": [
   "They may carry the word CAUTION or no signal word at all",
   "They must display WARNING until further testing is complete",
   "They are exempt from every labeling requirement under FIFRA",
   "They must carry CAUTION plus a child-hazard warning symbol"
  ],
  "answer": 0,
  "explanation": "Hazard Class IV products have oral LD50 values greater than 5,000 mg/kg, dermal LD50 above 20,000 mg/kg, and inhalation LC50 above 20 mg/l, with only slight concern for skin, eye, or respiratory injury. These very low toxicity products may bear CAUTION or no signal word at all.",
  "page": "76"
 },
 {
  "id": "s5-023",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "A product that is highly toxic by the oral, dermal, or inhalation route must display which items on its label?",
  "choices": [
   "DANGER and POISON in red, PELIGRO, and the skull and crossbones",
   "WARNING in capital letters together with a red stop-sign pictogram",
   "DANGER in black letters together with a red exclamation-mark pictogram",
   "POISON alone, printed in red letters inside a diamond-shaped border"
  ],
  "answer": 0,
  "explanation": "Hazard Class I products that are highly toxic by the oral, dermal, or inhalation route must show the signal words DANGER and POISON in red letters, the Spanish word PELIGRO, and a prominently displayed skull and crossbones symbol. As little as a few drops taken orally could be fatal to a 150-pound person. Most fumigants, some insecticides and rodenticides, and a few herbicides carry this signal word.",
  "page": "77"
 },
 {
  "id": "s5-024",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "To determine chronic toxicity, test animals are typically exposed to the active ingredient for how long?",
  "choices": [
   "Two years, representing a lifetime for the animals",
   "Ninety days, which matches one full growing season",
   "Six months, which covers several reproductive cycles",
   "Ten years, which approximates a human working career"
  ],
  "answer": 0,
  "explanation": "Chronic toxicity is determined by subjecting test animals to long-term exposure, typically two years, which represents a lifetime for the species used. The harmful effects that occur from small, repeated doses over time are termed chronic effects; suspected chronic effects of pesticides include genetic changes, tumors, reproductive problems, birth defects, blood and nerve disorders, and endocrine-mediated diseases.",
  "page": "78"
 },
 {
  "id": "s5-025",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which statement about measuring the chronic toxicity of a pesticide is accurate?",
  "choices": [
   "No single measure of chronic toxicity is equivalent to the acute LD50",
   "Chronic toxicity is expressed as a CD50 value printed directly beside the LD50",
   "Chronic toxicity is simply calculated as one-tenth of the product's acute LD50",
   "Chronic toxicity appears on the label as an LC50 in milligrams per liter of air"
  ],
  "answer": 0,
  "explanation": "Chronic toxicity is more difficult to determine through laboratory analysis than acute toxicity and cannot be expressed by a single measure, so there is no chronic equivalent of the LD50. When a product causes chronic effects in laboratory animals, the manufacturer is required to include chronic toxicity warning statements on the label, and the information is also listed on the SDS.",
  "page": "78"
 },
 {
  "id": "s5-026",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "What is a delayed effect of pesticide exposure?",
  "choices": [
   "Illness or injury that does not appear within 24 hours of the exposure",
   "A local rash that spreads to nearby areas of skin over a few hours",
   "A symptom that only ever follows years of repeated small exposures",
   "Poisoning that shows up immediately but takes months to fully heal"
  ],
  "answer": 0,
  "explanation": "Delayed effects are illnesses or injuries that do not appear within 24 hours of exposure; they may be delayed for weeks, months, or even years, and they can be caused by either an acute or a chronic exposure. The label's Precautionary Statements describe any delayed effects the pesticide might cause and how to avoid the exposures leading to them.",
  "page": "79"
 },
 {
  "id": "s5-027",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which organ does most of the work of converting toxic substances into nontoxic or less-toxic forms?",
  "choices": [
   "The liver",
   "The kidneys",
   "The spleen",
   "The pancreas"
  ],
  "answer": 0,
  "explanation": "The liver is the primary organ that transforms toxic substances into nontoxic or less-toxic, more water-soluble forms; the kidneys then filter those water-soluble chemicals out of the blood and into the urine. Substances that cannot be made water-soluble are stored in the body, primarily in fatty deposits and in breast milk.",
  "page": "79"
 },
 {
  "id": "s5-028",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "A worker develops unexplained bloody noses and bleeding gums after a job. These symptoms point toward which pesticide group?",
  "choices": [
   "Anticoagulant-type rodenticides",
   "Chlorophenoxy-type herbicides",
   "Synthetic pyrethroid insecticides",
   "Borate-based insecticide products"
  ],
  "answer": 0,
  "explanation": "Anticoagulant-type rodenticides affect the blood's ability to clot, so exposure may cause bloody noses and bleeding gums. By contrast, borates tend to irritate the skin, nose, and respiratory system, and chlorophenoxy herbicides such as 2,4-D irritate the skin and mucous membranes and may cause vomiting, headaches, diarrhea, and confusion.",
  "page": "79"
 },
 {
  "id": "s5-029",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Nausea, dizziness, weakness, nervousness, and irritation of the eyes and skin are typical of overexposure to which insecticides?",
  "choices": [
   "Synthetic pyrethroids",
   "Borate-based insecticides",
   "Organophosphates",
   "Carbamates"
  ],
  "answer": 0,
  "explanation": "Symptoms associated with synthetic pyrethroid insecticides include nausea, dizziness, weakness, nervousness, and eye and skin irritation. Organophosphates and carbamates instead act as cholinesterase inhibitors, and their poisoning symptoms can progress to respiratory failure and death.",
  "page": "79"
 },
 {
  "id": "s5-030",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Organophosphate and carbamate insecticides poison people by reducing their cholinesterase. What is cholinesterase?",
  "choices": [
   "An enzyme the body needs for proper nerve impulse transmission",
   "A hormone that keeps the heart beating at a constant rhythm",
   "A blood protein that binds and transports oxygen to the muscles",
   "A digestive acid that neutralizes swallowed toxins in the stomach"
  ],
  "answer": 0,
  "explanation": "Cholinesterase is an enzyme necessary for proper nerve impulse transmission and nervous system function. When organophosphate or carbamate insecticides reduce it below a critical level, nerve impulses throughout the body can no longer be controlled; muscles including the heart and breathing muscles are affected, and without medical attention death may result.",
  "page": "80"
 },
 {
  "id": "s5-031",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which symptom belongs to the mild stage of organophosphate or carbamate poisoning?",
  "choices": [
   "Blurred vision",
   "Muscle twitching",
   "Inability to walk",
   "Unconsciousness"
  ],
  "answer": 0,
  "explanation": "Mild poisoning brings fatigue, headache, dizziness, blurred vision, excessive sweating and salivation, nausea and vomiting, and stomach cramps or diarrhea. Inability to walk, weakness, chest discomfort, and constricted pupils mark moderate poisoning, while muscle twitching, unconsciousness, breathing difficulty, and coma are signs of severe poisoning.",
  "page": "80"
 },
 {
  "id": "s5-032",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "When should the baseline cholinesterase test for a handler be performed?",
  "choices": [
   "In the off-season, or at least 30 days after the most recent exposure",
   "Within 48 hours after the first organophosphate application of the year",
   "On the same day the handler first reports any symptoms of poisoning",
   "Only after a documented overexposure has already been confirmed"
  ],
  "answer": 0,
  "explanation": "A baseline must be established before a person begins working with cholinesterase inhibitors: during the off-season or at least 30 days from the most recent exposure. An accurate baseline often requires two tests run at least 72 hours but not more than 14 days apart, and the same laboratory should collect and test all samples from any one individual.",
  "page": "80"
 },
 {
  "id": "s5-033",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "After a significant drop in cholinesterase level, how long must a handler usually avoid these insecticides so the body can rebuild the enzyme?",
  "choices": [
   "Three to five weeks",
   "Three to five days",
   "Six to twelve months",
   "One to two days"
  ],
  "answer": 0,
  "explanation": "A significant reduction in cholinesterase indicates poisoning, and a medical professional will normally advise avoiding further exposure until the level returns to normal, usually a period of three to five weeks while the body builds new cholinesterase.",
  "page": "80"
 },
 {
  "id": "s5-034",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "What should you take with you when you go for medical help after a pesticide exposure?",
  "choices": [
   "The product label, or at minimum the product's EPA registration number",
   "The open pesticide container, secured on the passenger seat of your vehicle",
   "A written summary of the day's weather and application conditions",
   "An unopened retail package of the same product for reference"
  ],
  "answer": 0,
  "explanation": "The medical professional needs to know the pesticide ingredients to determine the proper treatment, so bring a duplicate copy of the label or the one attached to the container, or at minimum the product's EPA registration number. Do not carry pesticides in the passenger space of the vehicle; printing extra labels for the service vehicle and the office is recommended.",
  "page": "81"
 },
 {
  "id": "s5-035",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which phone number reaches the American Association of Poison Control Centers' 24-hour poison help line?",
  "choices": [
   "1-800-222-1222",
   "1-800-858-7378",
   "1-888-426-4435",
   "1-800-424-8802"
  ],
  "answer": 0,
  "explanation": "The AAPCC poison help line, 1-800-222-1222, is staffed 24 hours a day and provides advice beyond the label's first aid instructions. The National Pesticide Information Center answers pesticide questions at 1-800-858-7378, and the Animal Poison Control Center handles poisoned pets and livestock at 1-888-426-4435. Post all emergency numbers near telephones and in the service vehicles pesticide handlers use.",
  "page": "82"
 },
 {
  "id": "s5-036",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Why can it be difficult to attribute symptoms such as nausea and headache to a pesticide exposure?",
  "choices": [
   "Common illnesses such as flu and pneumonia cause similar symptoms",
   "Pesticide poisoning almost never produces symptoms of any kind in adults",
   "Symptoms of poisoning appear only when two products are mixed together",
   "Modern formulations are engineered so they cannot cause human symptoms"
  ],
  "answer": 0,
  "explanation": "The flu, heat exhaustion or heatstroke, pneumonia, asthma, respiratory or intestinal infections, and even a hangover can produce symptoms similar to those of many frequently used pesticides, and plants like poison oak or poison ivy can cause similar skin effects. Even so, whenever symptoms appear after contact with pesticides, seek medical attention immediately; get medical advice for any unusual or unexplained symptoms that develop within 24 hours of an exposure.",
  "page": "81"
 },
 {
  "id": "s5-037",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "After an oral or dermal pesticide exposure, what is usually the first objective of first aid?",
  "choices": [
   "Rinsing the exposed area with water to dilute the pesticide and limit absorption",
   "Giving the victim activated charcoal from the spill response kit right away",
   "Applying an antidote from the first aid kit before symptoms have a chance to start",
   "Transporting the victim before doing anything else at the exposure scene"
  ],
  "answer": 0,
  "explanation": "For oral or dermal exposure the first objective is usually to rinse the exposed area with water, diluting the pesticide and preventing absorption. Always have clean water available; in an extreme emergency even a farm pond, irrigation system, or watering trough will serve. First aid is only the first response, not a substitute for professional care, so get the victim to a hospital or call 911 without delay.",
  "page": "82"
 },
 {
  "id": "s5-038",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which first aid rule applies when a poisoning victim is unconscious?",
  "choices": [
   "Never try to give the person anything by mouth",
   "Give small sips of milk to coat the stomach lining",
   "Induce vomiting at once to empty the stomach",
   "Give two glasses of water before starting transport"
  ],
  "answer": 0,
  "explanation": "Never try to give anything by mouth to an unconscious person, and never induce vomiting in someone who is unconscious or convulsing. Administer artificial respiration if the victim is not breathing and is not vomiting, and get emergency medical help immediately.",
  "page": "82"
 },
 {
  "id": "s5-039",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "When washing pesticide off the skin, why should harsh scrubbing be avoided?",
  "choices": [
   "It can damage the skin and increase pesticide absorption",
   "It spreads the chemical to unexposed areas of the body",
   "It generates heat that vaporizes the pesticide residue",
   "It removes protective oils the label requires you to keep"
  ],
  "answer": 0,
  "explanation": "Remove all contaminated clothing immediately, then wash the affected area, including the hair, with soap and water; showering is better than bathing because it avoids prolonged contact with residues. Scrub gently, because harsh scrubbing can damage the skin and enhance pesticide absorption. Cover chemical burns loosely with a clean, soft cloth, and do not apply ointments, greases, powders, or other medications unless a medical authority instructs.",
  "page": "82"
 },
 {
  "id": "s5-040",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "How should clothing soaked with a pesticide concentrate be handled if you doubt it can be cleaned?",
  "choices": [
   "Seal it in a plastic bag labeled with the pesticide name and take it to a household hazardous waste collection",
   "Run it through two hot machine-wash cycles along with the regular family laundry",
   "Burn it in an open barrel far away from any buildings, wells, or drainage ditches",
   "Bury it at least six inches deep somewhere well away from the treated area"
  ],
  "answer": 0,
  "explanation": "Always wash and store contaminated clothing separately from the family laundry. If clothing is contaminated with a concentrate, or you doubt it can be cleaned, it is often best to dispose of it: place it in a plastic bag, seal the bag, write the name of the pesticide on it, and take it to a household hazardous waste collection.",
  "page": "83"
 },
 {
  "id": "s5-041",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "How long should an eye exposed to pesticide be rinsed with clean water?",
  "choices": [
   "Continuously for 15 minutes",
   "For no more than 5 minutes",
   "For about 30 to 60 seconds",
   "For a minimum of one full hour"
  ],
  "answer": 0,
  "explanation": "Hold the eyelid open and gently wash the eye with drips of clean water, dripped across the eye rather than directly into it, continuously for 15 minutes, flushing under the eyelid to remove debris. Keep the rinse water out of the unaffected eye, add no chemicals or drugs to the wash water unless a medical professional says to, then cover the eye with a clean cloth and seek medical attention immediately.",
  "page": "83"
 },
 {
  "id": "s5-042",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "What is the correct way to move a victim of inhalation exposure to fresh air?",
  "choices": [
   "Carry the victim; do not allow him or her to walk",
   "Support the victim while he or she walks slowly outside",
   "Wait beside the victim until emergency responders arrive",
   "Have the victim crawl below the level of the fumes"
  ],
  "answer": 0,
  "explanation": "Immediately carry the person to fresh air rather than letting them walk. Do not attempt a rescue in an enclosed, contaminated area unless you are wearing appropriate PPE, and warn others nearby of the danger. Then have the victim lie down, loosen clothing, keep them warm and quiet, and give artificial respiration if breathing stops or becomes irregular.",
  "page": "83"
 },
 {
  "id": "s5-043",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "When is it appropriate to induce vomiting in someone who has swallowed a pesticide?",
  "choices": [
   "Only when the product label instructs you to do so",
   "Whenever the victim is conscious and able to swallow",
   "Any time medical help is more than an hour away",
   "Immediately after every swallowed-poison incident"
  ],
  "answer": 0,
  "explanation": "Whether to induce vomiting is one of the most critical first aid decisions, and it must be made quickly and accurately, but vomiting is induced only if the label instructs you to do so. Several pesticides cause more harm when vomited than if they remain in the stomach. If pesticide is in the mouth but has not been swallowed, rinse the mouth with plenty of water and give the victim up to 1 quart of milk or water to drink.",
  "page": "83"
 },
 {
  "id": "s5-044",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "A victim has swallowed an emulsifiable concentrate. Why must you NOT induce vomiting?",
  "choices": [
   "Petroleum solvents aspirated into the lungs during vomiting can be fatal",
   "The product would neutralize any activated charcoal given at the hospital afterward",
   "Vomiting speeds the concentrate's absorption through the wall of the stomach",
   "The emulsifiers would foam and completely block the victim's esophagus"
  ],
  "answer": 0,
  "explanation": "Emulsifiable concentrates and oil solutions are dissolved in petroleum solvents and may be fatal if aspirated into the lungs during vomiting. Vomiting must also never be induced when the victim is unconscious or convulsing, or has swallowed a corrosive poison such as a strong alkali or acid, which burns the throat and mouth as severely coming up as it did going down.",
  "page": "83"
 },
 {
  "id": "s5-045",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "If vomiting is appropriate for a swallowed pesticide, how should the victim be positioned first?",
  "choices": [
   "Kneeling forward or lying on his or her side",
   "Flat on the back with the feet slightly elevated",
   "Sitting upright in a chair with the head tilted back",
   "Standing and leaning forward over a sink or basin"
  ],
  "answer": 0,
  "explanation": "Make sure the victim is kneeling forward or lying on his or her side so vomit cannot enter the lungs. Give at least two glasses of water (never carbonated beverages), touch the back of the throat with a finger or the blunt end of a spoon, never anything sharp and never saltwater, and collect some of the vomitus in case the doctor needs it for chemical analysis. Induce vomiting only as a measure until the victim reaches a hospital.",
  "page": "84"
 },
 {
  "id": "s5-046",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "How does activated charcoal help a person who has swallowed a pesticide?",
  "choices": [
   "It adsorbs many chemicals, acting like a magnet for them",
   "It chemically converts most pesticides into harmless salts",
   "It coats the stomach so the pesticide passes through unchanged",
   "It triggers immediate vomiting to empty the stomach quickly"
  ],
  "answer": 0,
  "explanation": "Activated charcoal acts as a magnet to adsorb many chemicals. Pharmaceutical-grade charcoal is available from most drugstores, and charcoal prepared for pesticide spill cleanup may be substituted in an emergency, but seek the advice of a medical professional or poison control center before administering it, and take the victim to a physician or hospital.",
  "page": "84"
 },
 {
  "id": "s5-047",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Antidotes exist for which pesticide classes?",
  "choices": [
   "Anticoagulant rodenticides and organophosphate or carbamate insecticides",
   "Every federally registered pesticide product, as a condition of EPA registration",
   "Synthetic pyrethroid insecticides and the chlorophenoxy herbicides",
   "Fumigants and other products labeled with DANGER-POISON"
  ],
  "answer": 0,
  "explanation": "Antidotes are available for only a few classes of pesticides: anticoagulant-type rodenticides and organophosphate or carbamate insecticides. Because antidotes can be extremely dangerous if misused, they should be prescribed and administered only by a qualified medical professional, and they should never be used to prevent poisoning.",
  "page": "84"
 },
 {
  "id": "s5-048",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "How can personal protective equipment contribute to heat stress?",
  "choices": [
   "It restricts sweat evaporation, impeding the body's natural cooling",
   "It reflects sunlight onto exposed areas of skin around the face",
   "It absorbs pesticide vapors that then react and generate heat",
   "It compresses surface blood vessels, forcing core body temperature upward"
  ],
  "answer": 0,
  "explanation": "PPE worn during handling or early-entry activities can restrict the evaporation of sweat, impeding the body's natural cooling system and raising the risk of heat stress. Vests and headbands with pockets for ice packs can be worn with or beneath PPE to help keep body temperature down, and anyone under a physician's care should consult the doctor before working in hot or humid conditions.",
  "page": "84"
 },
 {
  "id": "s5-049",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "In heatstroke, body temperature may rise above what level?",
  "choices": [
   "105 degrees F",
   "99 degrees F",
   "101 degrees F",
   "110 degrees F"
  ],
  "answer": 0,
  "explanation": "Normal human body temperature ranges from about 97 to 99 degrees F, averaging 98.6. With heatstroke, the severe, life-threatening form of heat stress, body temperature may exceed 105 degrees F, and staggering, loss of consciousness, or convulsions may result. Cool the victim very quickly, or brain damage or death may occur.",
  "page": "84"
 },
 {
  "id": "s5-050",
  "section": 5,
  "sectionName": "Pesticide Hazards and First Aid",
  "question": "Which sign points to heatstroke rather than milder heat stress?",
  "choices": [
   "The victim has stopped sweating",
   "The victim is sweating heavily",
   "The victim reports severe thirst",
   "The victim feels unusually tired"
  ],
  "answer": 0,
  "explanation": "Lack of sweating is a common symptom of heatstroke: heavy sweating can eventually progress to a complete lack of sweating as the body loses the ability to control its temperature. Fatigue, heavy sweating, and severe thirst are general heat stress symptoms; act immediately to cool down, drink plenty of water, and take breaks in the shade.",
  "page": "84"
 },
 {
  "id": "s6-001",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "What is the minimum clothing to wear whenever you handle pesticides or work around pesticide residues?",
  "choices": [
   "Long-sleeved shirt, long pants, closed-toed shoes, and socks",
   "Coveralls, chemical-resistant gloves, rubber boots, and a wide-brim hat",
   "Short-sleeved shirt, long pants, leather work boots, and a ball cap",
   "A chemical-resistant suit with attached hood and unlined rubber gloves"
  ],
  "answer": 0,
  "explanation": "Basic protective work clothing is a long-sleeved shirt, long pants, closed-toed shoes, and socks, worn every time you handle pesticides or work around residues. Coveralls, chemical-resistant gloves, boots, and headgear are additional PPE that particular labels may require on top of this baseline.",
  "page": "90"
 },
 {
  "id": "s6-002",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Which items make up personal protective equipment as the EPA defines it?",
  "choices": [
   "Coveralls, apron, gloves, footwear, headgear, eyewear, and respirators",
   "Enclosed cabs, closed mixing systems, drift shields, and ventilation fans",
   "Sunscreen, insect repellent, hearing protection, and cooling vests",
   "Long-sleeved shirts, long pants, work belts, and cotton undergarments"
  ],
  "answer": 0,
  "explanation": "EPA defines PPE as the coveralls, apron, gloves, footwear, headgear, eyewear, and respirators worn to keep pesticides off the body. PPE can reduce dermal, inhalation, ocular, and oral exposure, but it does not necessarily eliminate exposure. Enclosed cabs are engineering controls, not PPE, and ordinary shirts and pants are work clothing.",
  "page": "90"
 },
 {
  "id": "s6-003",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Why should a pesticide handler wash their hands before using the toilet during the workday?",
  "choices": [
   "The groin area readily absorbs pesticide",
   "Restroom door handles spread residues to other workers on the crew",
   "Toilet fixtures corrode when they are touched with contaminated gloves",
   "Pesticide residues carried into a septic system harm its bacteria"
  ],
  "answer": 0,
  "explanation": "Contaminated hands transfer pesticide to the groin, and the groin area readily absorbs pesticide through the skin. Washing hands first is one of the basic practices for preventing dermal exposure.",
  "page": "90"
 },
 {
  "id": "s6-004",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "What does the PPE listed on a pesticide label represent?",
  "choices": [
   "The legal minimum that applicators, handlers, and early-entry workers must wear",
   "A recommendation that trained applicators may adjust to fit their own conditions",
   "The maximum protection that could ever be needed for any use of the product",
   "Guidance that binds commercial applicators but not private applicators"
  ],
  "answer": 0,
  "explanation": "The label lists the minimum PPE required, and wearing anything less is illegal and dangerous. All pesticide handlers, including applicators, mixers and loaders, and flaggers, are responsible for following the label's PPE requirements.",
  "page": "90"
 },
 {
  "id": "s6-005",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Under which section of a pesticide label are PPE requirements typically listed?",
  "choices": [
   "Precautionary Statements",
   "Directions for Use",
   "Storage and Disposal",
   "Agricultural Use Requirements"
  ],
  "answer": 0,
  "explanation": "PPE requirements typically appear under the label's Precautionary Statements section. Handlers working in or on a farm, forest, nursery, or greenhouse must also check the Agricultural Use Requirements box for additional PPE requirements, but that box supplements rather than replaces the Precautionary Statements listing.",
  "page": "90"
 },
 {
  "id": "s6-006",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "A label allows reduced PPE when spraying from an enclosed cab, but the state pesticide agency prohibits that reduction. What must the applicator do?",
  "choices": [
   "Follow the state rule, because the more restrictive regulation applies",
   "Follow the label, because federal labeling always overrides state rules",
   "Ask the employer to decide which of the two conflicting standards to use",
   "Follow whichever of the two standards was issued most recently"
  ],
  "answer": 0,
  "explanation": "When a state, tribal, or local regulation is more restrictive than federal pesticide law or the label, the more restrictive rule must be followed. A label may permit less PPE with engineering controls such as an enclosed cab, but the state, tribal, or territorial agency may prohibit that practice.",
  "page": "91"
 },
 {
  "id": "s6-007",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "How much clothing does a very low hazard pesticide still require the applicator to wear?",
  "choices": [
   "A long-sleeved shirt, long pants, shoes, and socks",
   "No specific clothing beyond whatever the applicator finds comfortable",
   "Only closed-toed shoes together with basic eye protection",
   "Coveralls worn over a short-sleeved shirt and short pants"
  ],
  "answer": 0,
  "explanation": "Even very low hazard pesticides require a long-sleeved shirt, long pants, shoes, and socks. Label PPE requirements then increase from that floor depending on the product's toxicity, formulation, dilution, and the route of exposure for the activity.",
  "page": "91"
 },
 {
  "id": "s6-008",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "How does the EPA define a chemical-resistant material for PPE?",
  "choices": [
   "It prevents any measurable amount of pesticide from moving through the material",
   "It neutralizes pesticides chemically as soon as they touch its surface",
   "It allows no more than 5 percent of a pesticide to pass through per hour",
   "It withstands repeated hot-water laundering without losing repellency"
  ],
  "answer": 0,
  "explanation": "Chemical resistant means the material lets no measurable amount of pesticide move through, or break through, the fabric or material. Contact time, concentration, temperature, and the product itself all affect how quickly breakthrough can occur.",
  "page": "92"
 },
 {
  "id": "s6-009",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "By regulation, what must a coverall worn for pesticide work be?",
  "choices": [
   "A loose-fitting one- or two-piece garment covering everything but head, hands, and feet",
   "A tight-fitting one-piece suit sealed at the wrists, ankles, and neck with elastic bands",
   "A waterproof one-piece garment with a permanently attached hood and attached boots",
   "A disposable garment that is discarded after no more than one hour of wear"
  ],
  "answer": 0,
  "explanation": "Coveralls must be loose-fitting, one- or two-piece garments that cover the entire body except the head, hands, and feet, worn as a second layer over work clothes. They may be woven or nonwoven fabric, and either sturdy enough for repeated laundering or disposable; very few pesticides require a chemical-resistant coverall.",
  "page": "92"
 },
 {
  "id": "s6-010",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "A label requires a chemical-resistant apron for mixing. How much of the body should the apron cover?",
  "choices": [
   "The front of the body from mid-chest to the knees",
   "The front of the body from the collarbone down to the ankles",
   "The chest and stomach down to the waistline only",
   "The full torso, both front and back, from shoulders to knees"
  ],
  "answer": 0,
  "explanation": "Select an apron that covers the front of the body from the middle of the chest to the knees. Labels require a chemical-resistant apron for tasks with concentrate exposure, such as mixing and loading or cleaning application equipment.",
  "page": "93"
 },
 {
  "id": "s6-011",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Which headgear materials should be avoided when making overhead pesticide applications?",
  "choices": [
   "Absorbent materials such as cotton, leather, or straw",
   "Hard synthetic plastics such as polycarbonate and polyethylene",
   "Chemical-resistant hats that have a wide brim",
   "Hoods that are attached to spray jackets or suits"
  ],
  "answer": 0,
  "explanation": "For overhead work, headgear must let no liquid break through, so absorbent materials such as cotton, leather, or straw must not be used; cotton ball caps soak up pesticide. Use a chemical-resistant wide-brim hat or a hood, and wash the headgear at the end of the day. A hood attached to a jacket or suit also keeps spray from running down the neck and back.",
  "page": "93"
 },
 {
  "id": "s6-012",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "When may leather boots be substituted for label-required chemical-resistant footwear?",
  "choices": [
   "Only when the required footwear is not durable enough for rough terrain",
   "Whenever the product being applied is a dry granular formulation",
   "Only when the leather has been treated beforehand with a waterproofing compound",
   "Whenever the application will be completed in under two hours"
  ],
  "answer": 0,
  "explanation": "Regulations allow leather in place of chemical-resistant boots only when the chemical-resistant footwear the label requires is not durable enough for use in rough terrain. Leather and canvas absorb pesticides and cannot be decontaminated, so boots used this way must not be used for anything else.",
  "page": "93"
 },
 {
  "id": "s6-013",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "How tall should rubber boots be if you will walk through a treated area before the spray has dried?",
  "choices": [
   "Extending past the ankle and at least halfway up to the knee",
   "High enough to just cover the ankle bone",
   "All the way to the knee, with the pant legs tucked inside",
   "At least to the top of the sock line"
  ],
  "answer": 0,
  "explanation": "Wear heavy-duty rubber boots that extend past the ankle and at least halfway up to the knee when entering or walking through treated areas before the spray dries. Never wear open-toed shoes or sandals, and do not wear application footwear home or use it for anything else.",
  "page": "93"
 },
 {
  "id": "s6-014",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "How should pant legs be worn with boots during pesticide work?",
  "choices": [
   "Outside the boots, so pesticide cannot run down the legs into the footwear",
   "Tucked inside the boots, so the pant cuffs stay dry during the application",
   "Rolled up above the boot tops to keep the fabric away from the spray",
   "Taped tightly to the boots with waterproof tape around each cuff"
  ],
  "answer": 0,
  "explanation": "Put pant legs outside the boots. If pants are tucked in, pesticide running down the legs collects inside the footwear and is trapped against the skin.",
  "page": "93"
 },
 {
  "id": "s6-015",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "In a study of workers mixing pesticides, what share of the total exposure landed on the hands?",
  "choices": [
   "85%",
   "50%",
   "13%",
   "99%"
  ],
  "answer": 0,
  "explanation": "The study found workers mixing pesticides received 85% of their total exposure on the hands and another 13% on the forearms, which is why hands and forearms get by far the most exposure. The same study showed protective gloves cut exposure by 99%, making gloves essential to dermal protection.",
  "page": "94"
 },
 {
  "id": "s6-016",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Which component of a liquid pesticide formulation determines the type of protective glove needed?",
  "choices": [
   "The solvent",
   "The active ingredient",
   "The surfactant",
   "The inert carrier"
  ],
  "answer": 0,
  "explanation": "The solvent in the formulation determines the glove type: waterproof gloves suffice for solid or water-based formulations, while solvents such as alcohols, ketones, and petroleum distillates demand specific chemical-resistant materials. Glove type varies product to product even among products with similar active ingredients, so read each label.",
  "page": "94"
 },
 {
  "id": "s6-017",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "A label names a glove material without stating a thickness. What thickness is the rule of thumb for the listed material?",
  "choices": [
   "14 mils",
   "4 mils",
   "40 mils",
   "25 mils"
  ],
  "answer": 0,
  "explanation": "A label's glove specification is generally based on a thickness of 14 mils, except for polyethylene and barrier laminate gloves, so use 14 mils as the rule of thumb when buying listed materials. For the same material under the same conditions, a thicker glove gives a longer breakthrough time.",
  "page": "94"
 },
 {
  "id": "s6-018",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Which gloves must never be worn when handling most pesticides?",
  "choices": [
   "Gloves with an absorbent lining or flocking, or made of leather or cloth",
   "Unlined nitrile rubber gloves rated for two or more hours of contact time",
   "Elbow-length butyl rubber gloves chosen in a comfortably fitting size",
   "Barrier laminate gloves thicker than the label's stated specification"
  ],
  "answer": 0,
  "explanation": "Gloves made of any absorbent material, lining, or flocking, including leather and cloth, soak up pesticide and trap it against the bare skin, greatly increasing absorption. The one exception is that cloth gloves are used with fumigants.",
  "page": "95"
 },
 {
  "id": "s6-019",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "What is the recommended way to check gloves for holes?",
  "choices": [
   "Fill them with clean water and gently squeeze, discarding any that leak",
   "Inflate them with compressed air and listen closely for escaping air",
   "Hold them up against a bright light and look for pinpoints of light",
   "Turn them inside out and inspect every seam under magnification"
  ],
  "answer": 0,
  "explanation": "Check gloves closely for holes by filling them with clean water and gently squeezing; discard them if there is any leakage. Check glove integrity before each use, and replace gloves immediately if they get cut, torn, or damaged.",
  "page": "95"
 },
 {
  "id": "s6-020",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "How should glove cuffs and sleeves be arranged when spraying above your head?",
  "choices": [
   "Gloves outside the sleeves with the cuffs folded up 1 or 2 inches",
   "Gloves inside the sleeves with the shirt cuffs buttoned down snugly",
   "Gloves outside the sleeves with the cuffs taped flat against each sleeve",
   "Gloves under the sleeves with the cuffs rolled down toward the hands"
  ],
  "answer": 0,
  "explanation": "Match glove wear to your arm movements: when spraying overhead, wear gloves outside the sleeves with the cuff folded up 1 or 2 inches so pesticide running down the arms is caught instead of entering the glove. For jobs where the hands stay mostly lowered, wear the sleeves over the gloves.",
  "page": "95"
 },
 {
  "id": "s6-021",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Which type of eye protection does NOT protect against pesticide splashes?",
  "choices": [
   "Safety glasses",
   "Tight-fitting goggles",
   "A full-face respirator",
   "A face shield"
  ],
  "answer": 0,
  "explanation": "Safety glasses with shields at the front, brow, and temple are the minimum protective eyewear and their impact-resistant lenses stop flying objects such as granules, but they will not protect the eyes from pesticide splashes. Goggles, a face shield, or a full-face respirator are the options for splash hazards.",
  "page": "95"
 },
 {
  "id": "s6-022",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "May a chemical cartridge from one respirator manufacturer be used on another manufacturer's facepiece?",
  "choices": [
   "No, because respirator approvals are manufacturer-specific",
   "Yes, as long as both units carry a current NIOSH approval number",
   "Yes, provided the cartridge threads screw on securely without an adapter",
   "Only when both manufacturers use the same cartridge color coding"
  ],
  "answer": 0,
  "explanation": "NIOSH approves a respirator as a complete assembly of one manufacturer's components, so parts, cartridges, and filters must never be interchanged between different manufacturers' units. Each manufacturer issues an approval certificate charting every component of the approved assembly.",
  "page": "96"
 },
 {
  "id": "s6-023",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "What are the two classes of respirators most often required for protection from pesticide exposure?",
  "choices": [
   "Atmosphere-supplying respirators and air-purifying respirators",
   "Positive-pressure respirators and negative-pressure respirators",
   "Disposable respirators and permanently reusable respirators",
   "Half-facepiece respirators and full-facepiece respirators"
  ],
  "answer": 0,
  "explanation": "The two classes are atmosphere-supplying respirators, which deliver clean breathable air from an uncontaminated source (airline respirators and SCBA), and air-purifying respirators, which remove contaminants from the air being breathed. Facepiece style and reusability are variations within those classes.",
  "page": "97"
 },
 {
  "id": "s6-024",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Why must an air-purifying respirator never be used where oxygen is limited?",
  "choices": [
   "It removes contaminants from the air but does not supply oxygen",
   "Low oxygen levels chemically destroy the sorbent inside its cartridges",
   "Its exhalation valves seize shut when oxygen concentrations fall",
   "Its blower motor requires oxygen-rich air to run at full capacity"
  ],
  "answer": 0,
  "explanation": "Air-purifying respirators only clean the surrounding air; they supply no oxygen, so they must never be used in an environment with limited oxygen or one that is immediately dangerous to life or health. Those situations call for an atmosphere-supplying respirator.",
  "page": "97"
 },
 {
  "id": "s6-025",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Which respirators are the only ones allowed when using phosphide fumigants in enclosed areas, where the atmosphere may be immediately dangerous to life and health?",
  "choices": [
   "A pressure-demand SCBA with full facepiece, or a pressure-demand full-facepiece airline respirator with an SCBA escape bottle",
   "A full-facepiece powered air-purifying respirator fitted with organic vapor cartridges and high-efficiency particulate filters",
   "A gas mask with a chin-mounted canister approved for organic vapors plus a P100 particulate prefilter and splash goggles",
   "A half-mask chemical cartridge respirator worn together with chemical splash goggles and a chemical-resistant hood"
  ],
  "answer": 0,
  "explanation": "In immediately-dangerous-to-life-and-health situations such as phosphide fumigation of enclosed areas, only two atmosphere-supplying options are allowed: a pressure-demand self-contained breathing apparatus with a full facepiece, or a pressure-demand full-facepiece airline respirator carrying an SCBA escape bottle for emergencies. No air-purifying respirator is acceptable.",
  "page": "97"
 },
 {
  "id": "s6-026",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "What does a particulate filter on a respirator remove from the air?",
  "choices": [
   "Dusts, aerosols, and sprays, but not gases or vapors",
   "Gases and vapors, but not dusts or sprays",
   "Every contaminant, including gases, vapors, and particles",
   "Only oil-based droplets larger than one micron"
  ],
  "answer": 0,
  "explanation": "Particulate filters remove dusts, aerosols, and sprays suspended in the air, and they do not remove gases or vapors. Removing gases and vapors is the job of chemical cartridges or canisters, which use sorbents and in turn do not remove particulates.",
  "page": "97"
 },
 {
  "id": "s6-027",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "What particulate filter rating applies to powered air-purifying respirators?",
  "choices": [
   "HE, meaning High Efficiency",
   "N95, the most common filter class",
   "P100, the highest oil-proof class",
   "OV, meaning organic vapor"
  ],
  "answer": 0,
  "explanation": "PAPR particulate filters are rated High Efficiency, and a label requiring one specifies the acronym HE. The N, R, and P series with efficiencies of 95, 99, and 100 apply to nonpowered air-purifying respirators, where a higher efficiency number means lower filter leakage; OV designates a chemical cartridge, not a filter.",
  "page": "97"
 },
 {
  "id": "s6-028",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "For how long do R-series particulate filters resist oil?",
  "choices": [
   "Up to eight hours",
   "They are not oil-resistant at all",
   "Indefinitely, because they are oil-proof",
   "Up to 40 hours of cumulative use"
  ],
  "answer": 0,
  "explanation": "R-series filters are oil-resistant for up to eight hours. N-series filters are not oil-resistant and must not be used with pesticide mixes containing oil, or with adjuvants that may contain or act like oil, while P-series filters are oil-proof.",
  "page": "98"
 },
 {
  "id": "s6-029",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "With no manufacturer or label direction to go by, when must a particulate filter be discarded?",
  "choices": [
   "After eight hours of cumulative use",
   "After 24 hours of cumulative use",
   "At the end of each application, however brief it was",
   "Only once breathing through it becomes noticeably difficult"
  ],
  "answer": 0,
  "explanation": "EPA regulations require replacing particulate filters per the respirator manufacturer's recommendations or the pesticide labeling, whichever is more frequent; if there are no other use directions, dispose of them after eight hours of cumulative use. Also change any filter as soon as it is damaged, torn, soiled, or breathing becomes too difficult, and never try to clean a dirty filter.",
  "page": "98"
 },
 {
  "id": "s6-030",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "While wearing a chemical cartridge respirator you begin to taste or smell the pesticide. What does this mean?",
  "choices": [
   "Breakthrough has occurred; change the cartridges immediately",
   "The particulate prefilter is loaded and should be rinsed out clean",
   "Your breathing rate has exceeded the cartridge's rated airflow limit",
   "The facepiece seal has failed and the headband needs to be replaced"
  ],
  "answer": 0,
  "explanation": "A properly selected chemical cartridge is essentially 100% efficient until the gas or vapor breaks through, so any taste, smell, or irritation means breakthrough has occurred and the cartridges must be changed at once. This holds for combination units too: detect breakthrough and you change the cartridge even if its filter is still usable.",
  "page": "98"
 },
 {
  "id": "s6-031",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Why must a used organic vapor cartridge be discarded at the end of the workday even if no breakthrough occurred?",
  "choices": [
   "Pesticide trapped in the sorbent can desorb overnight and be inhaled the next day",
   "Overnight humidity swells the sorbent granules until they block the airflow",
   "The cartridge housing becomes brittle after a full day of exposure to sunlight",
   "The NIOSH approval for any opened cartridge lapses after 24 hours of use"
  ],
  "answer": 0,
  "explanation": "Pesticide captured by the sorbent can desorb very easily overnight, so using the same cartridge the next day would mean breathing the released vapors. Dispose of chemical cartridges at the end of the workday unless the manufacturer directs otherwise, and keep unused purifying elements sealed until needed.",
  "page": "98"
 },
 {
  "id": "s6-032",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "A chemical cartridge is past the expiration date stamped on its package, but the package was never opened. What should you do?",
  "choices": [
   "Discard it; an expired purifying element must not be used even if unopened",
   "Use it normally, because expiration dates only apply once a package is opened",
   "Use it for one final workday and then discard it along with the daily trash",
   "Return it to the manufacturer for recertification and a new expiration date"
  ],
  "answer": 0,
  "explanation": "A purifying element must not be used after its expiration date, even if it was never opened. In service, a cartridge's life depends on the type and concentration of pesticide, the user's breathing rate, and the humidity.",
  "page": "98"
 },
 {
  "id": "s6-033",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "How often should a user of a tight-fitting respirator get a fit test, apart from special circumstances?",
  "choices": [
   "Annually",
   "Every five years",
   "Once, when the respirator is purchased",
   "Semiannually"
  ],
  "answer": 0,
  "explanation": "Get fit tested annually, whenever you switch to a different respirator facepiece, and whenever something physically changes that could affect the fit, such as facial scarring, dental work, cosmetic surgery, or a significant change in body weight. Fit testing, done qualitatively or quantitatively, selects the right size and type of tight-fitting respirator for your face.",
  "page": "99"
 },
 {
  "id": "s6-034",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "What check must be performed every time you put on a tight-fitting respirator?",
  "choices": [
   "A user seal check, using positive or negative pressure (preferably both)",
   "A qualitative fit test using a test agent outside the mask",
   "A quantitative fit test with a particle-counting instrument",
   "A cartridge breakthrough test inside a smoke-filled chamber"
  ],
  "answer": 0,
  "explanation": "Do a positive- or negative-pressure user seal check, preferably both, every time you don the mask; it confirms the mask is seated on your face and the inhalation and exhalation valves work. A fit test is different: it is the annual procedure that selects the right size and type of respirator, not a check made at each use.",
  "page": "100"
 },
 {
  "id": "s6-035",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "What respirator option is available to a handler whose beard prevents a good face seal?",
  "choices": [
   "A PAPR with a loose-fitting helmet or hood, which requires no fit test",
   "A half-mask respirator worn over a thin layer of petroleum jelly",
   "A full-face respirator selected one size larger than the fit-tested size",
   "A filtering facepiece respirator secured with doubled elastic head straps"
  ],
  "answer": 0,
  "explanation": "A powered air-purifying respirator with a loose-fitting helmet or hoodlike head covering does not have to seal against the face, so it needs no fit test and can be used by people with facial hair. With any tight-fitting respirator, nothing may interfere with the seal, including beards and stubble.",
  "page": "100"
 },
 {
  "id": "s6-036",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "How should lightly or moderately pesticide-contaminated work clothes be machine washed?",
  "choices": [
   "Hot water at the highest water level, run through two entire machine cycles",
   "Cold water on the shortest available cycle to keep residues from setting in",
   "Warm water with chlorine bleach added to chemically break the pesticide down",
   "Together with the household laundry, using extra heavy-duty liquid detergent"
  ],
  "answer": 0,
  "explanation": "Wash pesticide work clothes separately from other laundry, a few items at a time, using the prewash cycle, hot water at the highest water level, heavy-duty liquid detergent, and the longest wash cycle, running two entire machine cycles for lightly or moderately contaminated items. Afterward, run one empty cycle with detergent and hot water before the washer is used for household laundry, and line dry outdoors if possible.",
  "page": "101"
 },
 {
  "id": "s6-037",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "What should be done with a fabric garment that has been soaked with undiluted pesticide concentrate?",
  "choices": [
   "Remove it immediately and dispose of it carefully; never wash such garments",
   "Prerinse it outdoors with a garden hose, then wash it twice in hot water",
   "Soak it overnight in heavy-duty detergent, then run three full wash cycles",
   "Send it to a commercial laundry service equipped for hazardous fabrics"
  ],
  "answer": 0,
  "explanation": "Never wash garments of absorbent material that have been splashed or soaked with undiluted pesticide or large quantities of diluted pesticide; remove them immediately and dispose of them carefully. If a laundry service is used for ordinary contaminated work clothes, it must be notified that the clothing may be contaminated with pesticides.",
  "page": "101"
 },
 {
  "id": "s6-038",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "How should reusable rubber boots and gloves be cleaned and stored after a day's work?",
  "choices": [
   "Washed inside and out, dried hanging, and kept out of the sun",
   "Wiped dry on the outside only, since washing water damages the lining",
   "Rinsed on the outside and left in direct sunlight to dry and sanitize",
   "Machine washed along with the coveralls and stored in the spray shed"
  ],
  "answer": 0,
  "explanation": "Wash gloves thoroughly before taking them off, then wash both the inside and outside of boots and gloves once removed, hang or leave them to dry, and discard any that leak or show wear. Store them out of the sun, because sunlight quickly degrades rubber; well-kept boots should last multiple seasons, but gloves are not meant for endless reuse and should be replaced often.",
  "page": "101"
 },
 {
  "id": "s6-039",
  "section": 6,
  "sectionName": "Personal Protective Equipment",
  "question": "Where should a cleaned respirator and its replacement purifying elements be stored?",
  "choices": [
   "In a clean, dry place away from sunlight, temperature extremes, and pesticides",
   "Inside the pesticide storage cabinet so all the application gear stays together",
   "Hanging in the spray rig cab so the respirator is always within easy reach",
   "In a sealed bag inside the mixing shed, next to the product inventory shelf"
  ],
  "answer": 0,
  "explanation": "Store cleaned respirators and replacement purifying elements in a clean, dry place not exposed to sunlight or extreme temperatures, positioned so the rubber facepiece keeps its shape. No protective equipment, respirators included, may be stored with or near pesticides or other chemicals.",
  "page": "102"
 },
 {
  "id": "s7-001",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "An applicator weighing the environmental effects of a treatment must answer three questions before applying. Which of these is one of them?",
  "choices": [
   "How long has this product held an EPA registration for this specific use site?",
   "Where will the pesticide go after it leaves its container or application equipment?",
   "What is the maximum residue level the treated commodity is allowed to carry at sale?",
   "Which restricted-use classification does this product carry in the state of application?"
  ],
  "answer": 1,
  "explanation": "Anyone who uses a pesticide must consider three things: where the pesticide will go once it leaves the container or equipment, what effects it could have on the nontarget sites it may reach, and what can be done to minimize harmful effects. Registration history, residue tolerances, and classification are separate matters.",
  "page": "105"
 },
 {
  "id": "s7-002",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Compared with a less-soluble product, a pesticide that dissolves easily in water is more likely to do what?",
  "choices": [
   "Bind tightly to negatively charged clay particles and soil organic matter",
   "Change readily from a liquid into a gas during hot weather",
   "Move offsite in surface runoff or in water moving down through the soil",
   "Stay active in its original chemical form for an extended period"
  ],
  "answer": 2,
  "explanation": "Solubility measures how readily a pesticide dissolves in a solvent, usually water. Highly water-soluble pesticides dissolve easily and are more likely than less-soluble ones to travel with water, either in surface runoff or by moving down through the soil. Binding to soil is adsorption, turning to gas is volatility, and remaining active over time is persistence.",
  "page": "106"
 },
 {
  "id": "s7-003",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Why are pesticide molecules that carry a positive charge tightly held by soil?",
  "choices": [
   "Soil particles are negatively charged, so the two attract and the pesticide adsorbs to them",
   "Soil particles are also positively charged, which locks the molecules into the pore spaces",
   "Positively charged molecules dissolve into the soil water film surrounding each particle",
   "The charge makes the molecules heavier, so they settle out of percolating water quickly"
  ],
  "answer": 0,
  "explanation": "Adsorption is the binding of a pesticide to soil particles, driven by attraction between the chemical and the soil. Positively charged pesticide molecules are tightly adsorbed to negatively charged soil particles, and oil-soluble pesticides are generally more attracted than water-soluble ones to clay and organic matter. A tightly adsorbed pesticide is less likely to move away from the spray site.",
  "page": "106"
 },
 {
  "id": "s7-004",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "A pesticide's persistence is described by its half-life. What does a longer half-life mean?",
  "choices": [
   "The product breaks down into simpler chemicals more rapidly",
   "The product is more persistent and remains active longer",
   "The product is more soluble in water than it is in oils",
   "The product volatilizes at a lower air temperature outdoors"
  ],
  "answer": 1,
  "explanation": "Half-life is a comparative measure of the time a chemical needs to break down. The longer the half-life, the more persistent the pesticide, meaning it stays present and active in its original form longer before degrading. Persistence has nothing to do with solubility or volatility.",
  "page": "106"
 },
 {
  "id": "s7-005",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Which breakdown process degrades pesticides without any living organisms, usually through a reaction with water?",
  "choices": [
   "Chemical degradation",
   "Microbial degradation",
   "Photodegradation",
   "Enzymatic degradation"
  ],
  "answer": 0,
  "explanation": "Chemical degradation is the breakdown of a pesticide by processes that do not involve living organisms, most often a chemical reaction with water. Microbial action requires soil microorganisms, and photodegradation is breakdown in reaction to sunlight.",
  "page": "107"
 },
 {
  "id": "s7-006",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Soil fungi and bacteria break pesticides down through which process?",
  "choices": [
   "Chemical degradation",
   "Photodegradation",
   "Microbial action",
   "Volatilization"
  ],
  "answer": 2,
  "explanation": "Microbial action is the breakdown of chemicals by soil microorganisms such as fungi and bacteria. Chemical degradation works without living organisms, photodegradation is driven by sunlight, and volatilization is a change to vapor, not a breakdown process.",
  "page": "107"
 },
 {
  "id": "s7-007",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "What causes the photodegradation of a pesticide?",
  "choices": [
   "Reaction with moisture held in the soil",
   "Digestion by soil-dwelling microorganisms",
   "Exposure to sunlight",
   "Repeated freezing and thawing of the soil"
  ],
  "answer": 2,
  "explanation": "Photodegradation is the breakdown of chemicals in reaction to sunlight. Breakdown by reaction with water is chemical degradation, and breakdown by fungi or bacteria is microbial action.",
  "page": "107"
 },
 {
  "id": "s7-008",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Which weather conditions speed up the breakdown of pesticides?",
  "choices": [
   "Cool and dry conditions",
   "Cool and wet conditions",
   "Warm and dry conditions",
   "Warm and wet conditions"
  ],
  "answer": 3,
  "explanation": "Water and temperature both affect degradation: warm, wet conditions can increase the speed of pesticide breakdown, while cool, dry conditions slow the process down.",
  "page": "107"
 },
 {
  "id": "s7-009",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Under which set of conditions is a pesticide most likely to volatilize?",
  "choices": [
   "High temperature, increasing wind, and low relative humidity",
   "Low temperature, increasing wind, and high relative humidity",
   "High temperature, still air, and rain-saturated ground surfaces",
   "Low temperature, still air, and moderate relative humidity"
  ],
  "answer": 0,
  "explanation": "Volatility is the tendency of a pesticide to turn into a gas or vapor. The chance of volatilization rises as temperature and wind increase, and it is also more likely when relative humidity is low, because evaporation increases in drier conditions.",
  "page": "107"
 },
 {
  "id": "s7-010",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Pesticide movement away from the application site on wind or air currents is called what?",
  "choices": [
   "Leaching",
   "Drift",
   "Runoff",
   "Percolation"
  ],
  "answer": 1,
  "explanation": "Drift is pesticide movement away from the application site by wind or air currents. It is not only an outdoor problem: indoors, pesticides can move offsite in the air currents created by ventilation systems and forced-air heating and cooling. Runoff and leaching are movement in water, across the surface and down through the soil respectively.",
  "page": "107"
 },
 {
  "id": "s7-011",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "What is the difference between runoff and leaching?",
  "choices": [
   "Runoff moves pesticide across the surface of the treated site, while leaching moves it downward through the soil",
   "Runoff carries only pesticide dissolved in water, while leaching carries only pesticide bound tightly to eroded soil particles",
   "Runoff happens only during natural rainfall events, while leaching happens only where irrigation water is being applied",
   "Runoff carries pesticide down into the groundwater, while leaching carries it across the surface into streams and ponds"
  ],
  "answer": 0,
  "explanation": "Most pesticide movement in water is either surface movement off the treated site, called runoff, or downward movement through the soil, called leaching. Runoff water can reach drainage systems, streams, ponds, and other surface water, while pesticides that leach downward may reach groundwater.",
  "page": "107"
 },
 {
  "id": "s7-012",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Which situation makes pesticide runoff or leaching more likely to occur?",
  "choices": [
   "Applying more rainwater or irrigation water than the site can absorb after treatment",
   "Using a product that adsorbs strongly to clay particles and to soil organic matter",
   "Applying a granular formulation instead of a liquid spray on the treated area",
   "Making the application while the relative humidity is high and the air is calm"
  ],
  "answer": 0,
  "explanation": "Runoff and leaching may occur when too much pesticide is applied or spilled onto a surface, when too much rainwater or irrigation water moves pesticide through the soil offsite or into groundwater, or when highly water-soluble or persistent products are used. A strongly adsorbed pesticide is less likely, not more likely, to move.",
  "page": "107"
 },
 {
  "id": "s7-013",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Which type of drift happens most frequently during pesticide applications?",
  "choices": [
   "Vapor drift",
   "Particle (dust) drift",
   "Spray drift",
   "Blowing-soil drift"
  ],
  "answer": 2,
  "explanation": "Spray drift, the off-target movement of small spray droplets on air currents during a liquid application, occurs more frequently than either vapor drift or particle (dust) drift.",
  "page": "108"
 },
 {
  "id": "s7-014",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Which combination of nozzle orifice and operating pressure produces the largest spray droplets?",
  "choices": [
   "Small orifice and high pressure",
   "Small orifice and low pressure",
   "Large orifice and high pressure",
   "Large orifice and low pressure"
  ],
  "answer": 3,
  "explanation": "High pressure and nozzles with smaller orifices produce small droplets that are likely to drift. Conversely, large nozzle orifices combined with low pressure produce larger droplets, and large droplets are less likely to drift than small ones.",
  "page": "108"
 },
 {
  "id": "s7-015",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "The ASABE spray nozzle classification standard (S-572.1) sorts nozzles into how many droplet size categories?",
  "choices": [
   "Four",
   "Six",
   "Eight",
   "Ten"
  ],
  "answer": 2,
  "explanation": "The American Society of Agricultural and Biological Engineers standard S-572.1 classifies nozzles into eight droplet size categories, from Extra Fine through Ultra Coarse, each with a symbol and a standard color code. The categories help an applicator pick a nozzle, orifice size, and pressure that produce a label-recommended droplet size spectrum.",
  "page": "109"
 },
 {
  "id": "s7-016",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Which environmental factors have the greatest influence on spray drift?",
  "choices": [
   "Air temperature and cloud cover",
   "Wind speed and wind direction",
   "Relative humidity and soil moisture",
   "Barometric pressure and dew point"
  ],
  "answer": 1,
  "explanation": "Wind speed and direction are the most important environmental factors influencing spray drift, and labels may set maximum and minimum wind speeds for application. Humidity and temperature also matter, but they are secondary to wind.",
  "page": "109"
 },
 {
  "id": "s7-017",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "To reduce drift from a boom sprayer, how far above the target crop should the boom be lowered?",
  "choices": [
   "To within 10 to 14 inches",
   "To within 20 to 24 inches",
   "To within 30 to 36 inches",
   "To within 40 to 48 inches"
  ],
  "answer": 1,
  "explanation": "Release height affects drift: applications made close to the ground with large droplets produce little drift, while aerial and tall-tree spraying intersect large distances of air far from the ground. Boom sprayer drift can be reduced by lowering the boom to within 20 to 24 inches of the target crop.",
  "page": "110"
 },
 {
  "id": "s7-018",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "To decrease outdoor drift, spraying is recommended when the wind speed is within what range?",
  "choices": [
   "Between 0 and 3 miles per hour",
   "Between 3 and 10 miles per hour",
   "Between 10 and 15 miles per hour",
   "Between 15 and 20 miles per hour"
  ],
  "answer": 1,
  "explanation": "Spraying when the wind is between 3 and 10 miles per hour helps decrease outdoor drift. Nearly calm air is not the safe choice it appears to be, because applications made under low-wind, stable conditions can produce extensive drift if a temperature inversion is present.",
  "page": "110"
 },
 {
  "id": "s7-019",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "What condition defines a temperature inversion?",
  "choices": [
   "The air at ground level is cooler than the air above it",
   "The air at ground level is warmer than the air above it",
   "The ground-level air and the upper air are at equal temperatures",
   "A layer of humid air near the ground sits beneath a layer of dry air"
  ],
  "answer": 0,
  "explanation": "A temperature inversion exists when the air at ground level is cooler than the air above it. The air is then stable, with little or no vertical movement; nearly all air movement is sideways, so small spray droplets concentrate in the cool layer near the ground and can be carried long distances before settling out.",
  "page": "110"
 },
 {
  "id": "s7-020",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Drift that carries pesticide more than a mile from the treated site is most often the result of what?",
  "choices": [
   "Making the application during a temperature inversion",
   "Spraying while wind speeds exceed ten miles per hour",
   "Operating nozzles above their rated pressure range",
   "Applying during the hottest part of a midsummer day"
  ],
  "answer": 0,
  "explanation": "Long-distance drift of more than a mile is most often caused by applications made during a temperature inversion, when stable air holds a concentrated layer of small droplets near the ground and moves them laterally. Such drift can occur even though conditions at application time seemed ideal, and movement can continue up to one to three hours after the application.",
  "page": "110"
 },
 {
  "id": "s7-021",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Smoke released near the ground rises very little and hangs in the air. What does this tell an applicator?",
  "choices": [
   "A temperature inversion may be present or developing, so pesticides should not be applied",
   "The air is unstable and vertical mixing will quickly dilute and disperse any spray droplets",
   "Conditions are ideal for spraying because there is no wind to carry droplets off the target",
   "Relative humidity has fallen too low for spraying and droplets will evaporate before landing"
  ],
  "answer": 0,
  "explanation": "Stable inversion conditions can be recognized by watching dust or smoke: if it rises little from its source and tends to hang in the air, an inversion may be present or developing. An inversion can also be detected by comparing thermometers at ground level and above; if ground level is cooler, an inversion exists and pesticides should not be applied.",
  "page": "111"
 },
 {
  "id": "s7-022",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Many product labels advise against applying volatile pesticides once air temperatures reach what level?",
  "choices": [
   "75°F or above",
   "80°F or above",
   "85°F or above",
   "95°F or above"
  ],
  "answer": 2,
  "explanation": "Volatile pesticides change from a solid or liquid into a gas, usually in hot weather, and the vapor can drift farther and longer than spray droplets. Many labels advise against applying these products when temperatures are at or above 85°F, and because some products volatilize hours after application, forecast highs later in the day matter too.",
  "page": "111"
 },
 {
  "id": "s7-023",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "What is particle drift?",
  "choices": [
   "Solid particles, such as dust formulations or pesticide-coated soil, moving off the target area in the air",
   "Gaseous pesticide moving off the target area after the product volatilizes in hot afternoon weather",
   "Fine liquid droplets traveling away from the target on air currents while spraying is in progress",
   "Pesticide granules washing downslope from the target area in runoff water after a heavy rainfall event"
  ],
  "answer": 0,
  "explanation": "Particle drift is the airborne movement of solid particles from the target area during or just after an application. The particles may be pesticides formulated as dusts or soil particles with pesticide attached, and some pesticides stay active on blown soil long after application. Vapor drift involves gases and spray drift involves liquid droplets.",
  "page": "111"
 },
 {
  "id": "s7-024",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Who is legally responsible for damage caused by pesticide that moves off the target site?",
  "choices": [
   "The applicator who made the application",
   "The manufacturer that formulated and sold the product",
   "The landowner or customer who requested the treatment",
   "The state agency that registered the product for that use"
  ],
  "answer": 0,
  "explanation": "The applicator is legally responsible for any damages resulting from off-target pesticide movement. That is why the applicator must assess the vulnerability of neighboring and downwind properties and evaluate wind speed, wind direction, and possible temperature inversions before deciding whether to spray.",
  "page": "111"
 },
 {
  "id": "s7-025",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Pesticide reaching a stream after broadcast applications across large agricultural fields is an example of which kind of pollution?",
  "choices": [
   "Point-source pollution",
   "Nonpoint-source pollution",
   "Direct-discharge pollution",
   "Stationary-source pollution"
  ],
  "answer": 1,
  "explanation": "Nonpoint-source pollution comes from a widespread area, such as pesticides moving into streams or groundwater after broadcast applications to large fields, rights-of-way, or turf. Point-source pollution comes from a specific, identifiable location, such as a spill entering a storm sewer, back-siphoning into a water supply, or repeated spills at a mixing and loading site.",
  "page": "112"
 },
 {
  "id": "s7-026",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "When is the risk of pesticide runoff generally at its greatest?",
  "choices": [
   "When heavy rain falls right after application or the ground is saturated or frozen",
   "When an application is made onto dry soil during an extended midsummer drought",
   "When the treated field was recently tilled and the loose surface soil absorbs water",
   "When irrigation water was applied to the site several days before the treatment"
  ],
  "answer": 0,
  "explanation": "Runoff risk is generally greatest when heavy rains immediately follow a pesticide application, or when the ground is already saturated or frozen and cannot absorb water. Surface waters are the most likely to be contaminated by runoff, though shallow groundwater connected to surface streams can be affected as well.",
  "page": "113"
 },
 {
  "id": "s7-027",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Groundwater provides what share of the water used for public and private supplies, irrigation, and industry?",
  "choices": [
   "30%",
   "50%",
   "70%",
   "90%"
  ],
  "answer": 2,
  "explanation": "Groundwater supplies 70% of the water used for public and private water supplies, irrigation, and industry, and it feeds wells and springs. Once groundwater is contaminated, correcting the problem is difficult or even impossible, which is why prevention matters so much.",
  "page": "113"
 },
 {
  "id": "s7-028",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "What is the water table?",
  "choices": [
   "The boundary between the saturated zone and the unsaturated material above it",
   "The overall geologic formation from which usable groundwater can be drawn",
   "The layer of gravel and fractured bedrock that filters water percolating downward",
   "The maximum depth to which a well may legally be drilled for drinking water"
  ],
  "answer": 0,
  "explanation": "The saturated zone is the layer of soil, sand, gravel, or fractured bedrock in which all available spaces are filled with water, and the water table is the boundary between that saturated zone and the overlying unsaturated rock and soil. The overall geologic formation from which groundwater can be drawn is called an aquifer.",
  "page": "113"
 },
 {
  "id": "s7-029",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Which combination of characteristics makes a pesticide most likely to leach into groundwater?",
  "choices": [
   "High solubility, low adsorption, and persistence",
   "High solubility, high adsorption, and rapid breakdown",
   "Low solubility, high adsorption, and persistence",
   "Low solubility, low adsorption, and rapid breakdown"
  ],
  "answer": 0,
  "explanation": "To leach into groundwater a pesticide must move down through the soil in water, resist binding to soil particles, and resist breaking down. Pesticides with high solubility, low adsorption, and persistence are therefore the most likely to leach, and their labels typically carry statements describing these concerns.",
  "page": "113"
 },
 {
  "id": "s7-030",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Why are sandy soils more prone to pesticide leaching than clay or silt soils?",
  "choices": [
   "Water percolates through sand faster and sand offers fewer binding sites for dissolved chemicals",
   "Sandy soils remain saturated far longer, holding dissolved pesticide where later rains can move it",
   "Sand contains more decaying organic matter, which carries adsorbed pesticide downward as it breaks up",
   "Sand particles carry a positive surface charge that repels and mobilizes most pesticide molecules"
  ],
  "answer": 0,
  "explanation": "Percolating water moves faster in sandy soils, and sand has fewer binding sites available for adsorbing dissolved chemicals than clay or silt. That combination makes sandy soils more prone to pesticide movement, although leaching can still occur in clay or silt soils.",
  "page": "113"
 },
 {
  "id": "s7-031",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "How does a high organic matter content affect a soil's interaction with pesticides?",
  "choices": [
   "It increases the soil's ability to hold both water and adsorbed pesticides",
   "It speeds the downward flow of water carrying dissolved pesticide toward the groundwater",
   "It has little effect, because decaying plant material binds nutrients rather than pesticides",
   "It repels water-soluble pesticides so that they remain exposed on the soil surface"
  ],
  "answer": 0,
  "explanation": "Organic matter is decaying plant material, and the higher a soil's organic matter content, the greater its ability to hold both water and adsorbed pesticides. Pesticides held in the root zone are less likely to leach into groundwater and may be taken up by plants.",
  "page": "114"
 },
 {
  "id": "s7-032",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Why does a shallow water table raise the risk of groundwater contamination?",
  "choices": [
   "Less soil lies above the water, so there are fewer chances for degradation or adsorption",
   "Shallow groundwater always connects directly with every nearby surface stream and pond",
   "Shallow groundwater stays warmer, which converts pesticides into more toxic compounds",
   "Wells in shallow aquifers pump harder and pull surface pesticides down toward the water"
  ],
  "answer": 0,
  "explanation": "Where the water table is shallow, less soil is available to act as a filter, so there are fewer opportunities for the pesticide to degrade or be adsorbed before reaching groundwater. In such areas, choose products with low leaching potential and take extra precautions during mixing, application, and cleanup.",
  "page": "114"
 },
 {
  "id": "s7-033",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Which geologic material between the soil surface and the groundwater lets water and dissolved pesticides move downward most freely?",
  "choices": [
   "Gravel deposits",
   "Layers of clay",
   "Compacted silt",
   "Solid granite bedrock"
  ],
  "answer": 0,
  "explanation": "The permeability of the geologic layers between the soil surface and groundwater matters: highly permeable materials such as gravel deposits let water and dissolved pesticides move freely downward, while much less permeable clay layers inhibit and slow that downward movement.",
  "page": "115"
 },
 {
  "id": "s7-034",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "EPA requires an environmental hazard statement on every pesticide labeled for outdoor use. What does that statement direct applicators not to do?",
  "choices": [
   "Apply directly to water or intertidal areas below the mean high water mark, or contaminate water when cleaning equipment",
   "Apply within one mile of a public drinking water intake or within 100 feet of any private well without prior written state approval",
   "Apply outdoors when rain is forecast within the next 24 hours or when winds exceed the maximum speed printed on the labeling",
   "Store or mix the product inside a wellhead protection area unless a sealed containment pad has been installed at the site"
  ],
  "answer": 0,
  "explanation": "All products labeled for outdoor use must carry an environmental hazard statement telling users not to apply directly to water, to areas where surface water is present, or to intertidal areas below the mean high water mark, and not to contaminate water supplies when cleaning equipment or disposing of equipment wash water.",
  "page": "115"
 },
 {
  "id": "s7-035",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "What is the minimum distance from wells, lakes, streams, rivers, and storm drains at which pesticides should be mixed and loaded?",
  "choices": [
   "10 feet",
   "25 feet",
   "50 feet",
   "100 feet"
  ],
  "answer": 2,
  "explanation": "Mix and load as far as possible from water, and at least 50 feet from wells, lakes, streams, rivers, and storm drains. When possible, mix and load at the application site, and consider a sealed permanent or portable mixing and loading pad to prevent seepage into the soil.",
  "page": "115"
 },
 {
  "id": "s7-036",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "When filling a spray tank, how large should the air gap between the end of the water supply line and the spray solution be kept?",
  "choices": [
   "At least half the diameter of the discharge pipe",
   "At least equal to the diameter of the discharge pipe",
   "At least twice the diameter of the discharge pipe",
   "At least four times the depth of the tank's fill opening"
  ],
  "answer": 2,
  "explanation": "Back-siphoning is the reverse flow of tank contents into the fill hose when water pressure drops, and it can pull large quantities of pesticide into the water source. The simplest prevention is an air gap between the discharge end of the supply line and the solution, kept at least twice the diameter of the discharge pipe; a backflow prevention device or check valve is another option.",
  "page": "116"
 },
 {
  "id": "s7-037",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "A pesticide must be applied deliberately to a sensitive area to control a regulated pest, as in mosquito abatement or a gypsy moth forest treatment. Who should perform the application?",
  "choices": [
   "Only well-trained applicators",
   "Only federal agency employees",
   "Only licensed aerial applicators",
   "Only local vector-control staff"
  ],
  "answer": 0,
  "explanation": "Sometimes pesticides must be applied to a sensitive area on purpose to control a regulated pest, such as mosquito abatement or gypsy moth forest treatments. Only well-trained applicators should perform these applications. In other situations, leaving an untreated buffer zone around a sensitive area within a larger target site is a practical way to avoid contaminating it.",
  "page": "117"
 },
 {
  "id": "s7-038",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Which pesticide group is responsible for most phytotoxic injury to plants?",
  "choices": [
   "Insecticides",
   "Herbicides",
   "Fungicides",
   "Rodenticides"
  ],
  "answer": 1,
  "explanation": "Nearly all pesticides can cause phytotoxicity, or plant injury, especially when applied at too high a rate, at the wrong time, or under unfavorable conditions, and injury can appear on roots, stems, leaves, flowers, or fruit. Most phytotoxic injury, however, is caused by herbicides, and damage to nearby plants comes primarily from drift, though runoff and root uptake can also be responsible.",
  "page": "117"
 },
 {
  "id": "s7-039",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "How far may bees travel from their hive in search of blooming flowers?",
  "choices": [
   "As far as 1 mile",
   "As far as 3 miles",
   "As far as 6 miles",
   "As far as 10 miles"
  ],
  "answer": 1,
  "explanation": "Bees may travel as far as 3 miles from their hive to find blooming flowers, so an application can endanger colonies well beyond the treated field. Before applying products labeled as toxic to bees, notify area beekeepers so they can protect or move their colonies; some states require notification and keep beekeeper registries.",
  "page": "118"
 },
 {
  "id": "s7-040",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Applying insecticides in the evening or at night avoids foraging honey bees. Why can an early morning application still put wild bees at risk?",
  "choices": [
   "Wild bees forage at or before dawn",
   "Wild bees are drawn toward fresh spray deposits on foliage",
   "Morning dew keeps residues wet, which makes them more toxic",
   "Wild bees spend the night inside the crop canopy and stay into midday"
  ],
  "answer": 0,
  "explanation": "Evening or night applications, made when bees are not foraging, help minimize bee kills. Early morning application may still protect honey bees, but wild bees forage at or before dawn, so they can be exposed. Other precautions include not treating crops or nearby weeds in bloom and keeping drift away from hives and attractive habitat.",
  "page": "118"
 },
 {
  "id": "s7-041",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "When a fish kill follows pesticide pollution of water, which product group is the most likely cause?",
  "choices": [
   "Herbicides",
   "Fungicides",
   "Insecticides",
   "Plant growth regulators"
  ],
  "answer": 2,
  "explanation": "Fish kills often result from water pollution by a pesticide, and insecticides are the most likely cause. The danger is greatest in small ponds or streams under conditions of low water flow or low volume, where the chemical is not diluted.",
  "page": "118"
 },
 {
  "id": "s7-042",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "Why are granular and pelleted pesticide formulations a particular danger to birds?",
  "choices": [
   "Birds and other animals often mistake the granules for food and eat them",
   "Granules give off concentrated vapors that poison birds flying over a field",
   "Granules dissolve instantly in the puddles that birds rely on for drinking",
   "Granules cling to feathers and are absorbed straight through a bird's skin"
  ],
  "answer": 0,
  "explanation": "Granular and pelleted formulations are a particular concern because birds and other animals often mistake them for food and ingest them. When birds or other wildlife are in or near a treated area, liquid formulations may be the safer choice, and baits should be placed where pets, birds, and wildlife cannot reach them.",
  "page": "118"
 },
 {
  "id": "s7-043",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "A hawk is harmed after feeding on rodents that were killed by a pesticide. What is this called?",
  "choices": [
   "Secondary poisoning",
   "Acute dermal poisoning",
   "Bioaccumulation",
   "Cross-contamination"
  ],
  "answer": 0,
  "explanation": "Secondary poisoning occurs when pesticide residues remaining on or in the body of a dead animal harm the predator or scavenger that feeds on it. Predatory birds and mammals feeding on pesticide-killed animals are a special concern, and labels may carry statements about secondary poisoning.",
  "page": "119"
 },
 {
  "id": "s7-044",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "What has been the most important source of pesticide poisoning of livestock?",
  "choices": [
   "Contaminated feed, forage, and drinking water",
   "Direct overspray during nearby field applications",
   "Licking residues off recently treated companion animals",
   "Breathing vapors that spread from structural fumigations"
  ],
  "answer": 0,
  "explanation": "The most important source of livestock pesticide poisoning has been contaminated feed, forage, and drinking water. The contamination often traces back to improper or careless transportation, storage, handling, application, or disposal of pesticides.",
  "page": "119"
 },
 {
  "id": "s7-045",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "What separates an endangered species from a threatened species?",
  "choices": [
   "An endangered species is on the brink of extinction in all or a significant part of its range; a threatened species is likely to become endangered",
   "An endangered species is protected by the federal government, while a threatened species is protected only under individual state wildlife regulations",
   "An endangered species has already lost all of its natural habitat, while a threatened species has lost more than half of its remaining habitat range",
   "An endangered species now survives only in captivity, while a threatened species still keeps small self-sustaining breeding populations in the wild"
  ],
  "answer": 0,
  "explanation": "An endangered species is one on the brink of extinction throughout all or a significant part of its range, while a threatened species is one likely to become endangered. Because living things form a delicately balanced network, losing a single species can set off a chain reaction affecting many others.",
  "page": "119"
 },
 {
  "id": "s7-046",
  "section": 7,
  "sectionName": "Pesticides in the Environment",
  "question": "A product label states the pesticide might harm an endangered species and instructs the applicator to check for required precautionary measures. Where are those county-level measures published?",
  "choices": [
   "In county bulletins developed by EPA",
   "In the state's annual pesticide law digest",
   "In the product's safety data sheet appendix",
   "In the county Extension pest control calendar"
  ],
  "answer": 0,
  "explanation": "Under the Endangered Species Protection Program, run by each state in cooperation with EPA, products that might harm an endangered species carry a label statement directing applicators to consult a county bulletin. EPA develops these bulletins, which list the measures required in each affected county, such as buffer strips, reduced rates, timing restrictions, or outright prohibition within the identified habitat.",
  "page": "119"
 },
 {
  "id": "s8-001",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "At what point are serious pesticide accidents most likely to occur?",
  "choices": [
   "While pesticides sit in long-term storage",
   "While the pesticides are in transit",
   "During mixing and loading at the job site",
   "While application equipment is being cleaned"
  ],
  "answer": 1,
  "explanation": "Serious pesticide accidents are more likely while the product is being moved. Transportation-related accidents can happen at any point in the distribution chain, from the manufacturer to the job site, so applicators must know how to prevent transport mishaps and respond quickly when one occurs.",
  "page": "123"
 },
 {
  "id": "s8-002",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "How high may pesticide containers be stacked on a transport vehicle?",
  "choices": [
   "No more than two containers high",
   "No higher than the cab of the truck",
   "No higher than the sides of the vehicle",
   "As high as the tie-down straps will reach"
  ],
  "answer": 2,
  "explanation": "Containers must never be stacked higher than the sides of the vehicle. Loads should also be secured against punctures and impacts from closely packed items, and flatbed trucks should have tie-down rings or racks to make securing the load easier.",
  "page": "124"
 },
 {
  "id": "s8-003",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Why must liquid pesticides never be carried in the passenger area of a vehicle?",
  "choices": [
   "A spill could produce harmful fumes that the occupants inhale",
   "Heat from the cab destabilizes most liquid formulations",
   "DOT placarding rules classify the cab as unprotected cargo space",
   "Liquid containers block the driver's view of the mirrors"
  ],
  "answer": 0,
  "explanation": "Chemicals spilled in the passenger area can give off harmful fumes that the occupants breathe, and a spill in the cab is difficult to remove, so it can lead to long-term inhalation exposure.",
  "page": "124"
 },
 {
  "id": "s8-004",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Why is it best to transport pesticide containers in their original shipping boxes?",
  "choices": [
   "The boxes display the placards required on highway routes",
   "Retailers refuse to take back products that were shipped loose",
   "The cardboard is treated to absorb small leaks before they spread",
   "Many of the boxes meet DOT packaging standards, adding protection"
  ],
  "answer": 3,
  "explanation": "Depending on the material, many original shipping boxes meet U.S. Department of Transportation packaging standards, which gives the contents added protection. Carrying only a minimum amount of product on the vehicle at one time also limits what a mishap can release.",
  "page": "124"
 },
 {
  "id": "s8-005",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "After a pesticide spill on the road, who is the first person in a position to contain it and keep it from spreading?",
  "choices": [
   "The responding fire department",
   "The vehicle operator",
   "The distributor who supplied the product",
   "The state pesticide regulatory agency"
  ],
  "answer": 1,
  "explanation": "The driver reaches the spill before anyone else; by the time first responders arrive it may already be contained. That is why the driver must know basic emergency response procedures for containing a spill, company guidelines, and who will notify local, state, and federal authorities.",
  "page": "124"
 },
 {
  "id": "s8-006",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "A driver hauling pesticides that are regulated as hazardous materials may have to comply with DOT requirements covering which items?",
  "choices": [
   "Commercial driver licenses, placarding, shipping papers, and annual inspections",
   "Worker Protection Standard training, respirator fit testing, and medical monitoring",
   "Container recycling, rinsate handling, and disposal manifests",
   "Dealer licensing, restricted-use permits, and application recordkeeping"
  ],
  "answer": 0,
  "explanation": "Some drivers transporting pesticides regulated as hazardous materials are required to follow DOT rules on commercial driver licenses, placarding, shipping papers, and annual inspections.",
  "page": "124"
 },
 {
  "id": "s8-007",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "How should the product labels and SDSs carried in a transport vehicle be organized?",
  "choices": [
   "By EPA registration number",
   "Alphabetically by product name",
   "By signal word, with the most toxic products first",
   "In the order the products were loaded onto the vehicle"
  ],
  "answer": 1,
  "explanation": "Labels and Safety Data Sheets should be well organized and arranged alphabetically by product name so they can be found quickly after a spill. The SDS tells the driver and emergency responders what PPE to use, whether the spill poses an inhalation or explosion risk, decontamination procedures, and emergency telephone numbers.",
  "page": "125"
 },
 {
  "id": "s8-008",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Before loading pesticides for transport, an applicator should confirm that each container has which three things?",
  "choices": [
   "A legible attached label, a tight closure, and pesticide-free outside surfaces",
   "A child-resistant cap, a printed batch number, and a DOT hazard diamond on the side",
   "An unbroken seal, a dated sales receipt, and shrink-wrap over the closure",
   "A duplicate label, a bar code, and a bilingual warning statement"
  ],
  "answer": 0,
  "explanation": "Inspect containers before transport to be sure the label is legible and attached, the closure is tight, and no pesticide residue is on the outside surfaces. Application equipment such as hand sprayers, backpack sprayers, and spreaders must also be secured for the trip.",
  "page": "125"
 },
 {
  "id": "s8-009",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "A vehicle must display placards when it transports pesticides in containers larger than what size?",
  "choices": [
   "55 gallons",
   "100 gallons",
   "119 gallons",
   "250 gallons"
  ],
  "answer": 2,
  "explanation": "Placards are required when transporting pesticides in containers larger than 119 gallons or in quantities greater than 1,000 pounds; they are also required for pesticides bearing a DOT poison label.",
  "page": "126"
 },
 {
  "id": "s8-010",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "A business ships pesticides in quantities large enough to require placards. What must it develop and implement?",
  "choices": [
   "A closed mixing and loading system",
   "A hazardous waste manifest for every load",
   "An annual driver retraining program",
   "A transportation security plan"
  ],
  "answer": 3,
  "explanation": "Shipping or transporting materials in quantities that require placards triggers a transportation security plan. The plan must include measures to prevent unauthorized access, a security check of employees who pick up and transport the placarded materials, and the intended route of travel.",
  "page": "126"
 },
 {
  "id": "s8-011",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Why is a separate building preferred for storing pesticides rather than sharing space with fertilizer, equipment, and records?",
  "choices": [
   "Emergency crews have more options when responding to fires and spills",
   "National fire codes forbid pesticides and fertilizers from ever sharing a roof",
   "A shared building cannot be insured against chemical losses",
   "Combined storage always violates local zoning ordinances"
  ],
  "answer": 0,
  "explanation": "Storing pesticides apart from fertilizers and similar products gives emergency response crews more options when dealing with fires and spills. Keeping equipment, employees, and records away from pesticides is recommended wherever possible.",
  "page": "126"
 },
 {
  "id": "s8-012",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Which location should be rejected when choosing a pesticide storage site?",
  "choices": [
   "On high ground away from runoff paths",
   "Near a stream that is likely to flood",
   "At the edge of the property, away from the office",
   "On a gentle slope that drains away from the well"
  ],
  "answer": 1,
  "explanation": "Storage facilities should not be located in a flood zone, near a stream likely to flood, or where runoff water flows toward the facility. If flooding is possible, consider building dikes around the facility, and store products on raised pallets or shelves so high water cannot damage containers or carry them offsite.",
  "page": "126"
 },
 {
  "id": "s8-013",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "What can excess moisture do to slow-release pesticide products in storage?",
  "choices": [
   "Cause them to release their active ingredients",
   "Convert them into fumigant formulations",
   "Permanently neutralize their active ingredients",
   "Change them into restricted-use products"
  ],
  "answer": 0,
  "explanation": "Water or excess moisture can make slow-release products give up their active ingredients. It can also rust metal containers, split or crumble paper and cardboard packaging, make labeling peel or smear until unreadable, and cause dry pesticides to clump, degrade, or dissolve.",
  "page": "126"
 },
 {
  "id": "s8-014",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "How should noxious vapors be removed from a pesticide storage room?",
  "choices": [
   "By venting the room into an adjoining work area",
   "With exhaust fans directed to the outside of the building",
   "By running a recirculating filter unit above the shelving",
   "By opening interior doors so air moves through the building"
  ],
  "answer": 1,
  "explanation": "Exhaust fans that vent to the outside of the building reduce the buildup of noxious vapors from the solvents used in many formulations. Ventilating the storage room into an adjoining room does little to solve the problem.",
  "page": "126"
 },
 {
  "id": "s8-015",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Where can an applicator usually find the temperature limits for storing a particular product?",
  "choices": [
   "In the DOT hazardous materials table",
   "On the state restricted-use product list",
   "On the pesticide labeling",
   "In the facility's written security plan"
  ],
  "answer": 2,
  "explanation": "Pesticide labeling often gives the temperature limits for storing a product. The storage room itself should be well ventilated and have controlled temperatures.",
  "page": "126"
 },
 {
  "id": "s8-016",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "The storage-room exhaust fan is switch-operated rather than on a timer. What should a handler do before entering the room?",
  "choices": [
   "Enter promptly and open a window once inside",
   "Put on a respirator instead of running the fan",
   "Turn on the fan and wait a few minutes for vapors to clear",
   "Knock and listen for hissing containers before opening the door"
  ],
  "answer": 2,
  "explanation": "If the exhaust fan is not on a timer that starts it automatically at a set temperature, turn the fan switch on before entering the storage room and wait a few minutes to let any vapors clear.",
  "page": "127"
 },
 {
  "id": "s8-017",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Why should the floor of a pesticide storage area be cement or another impervious material?",
  "choices": [
   "Spills stay on the surface, where they are easy to clean and decontaminate",
   "Porous floors trap solvent vapors that can later ignite from static discharge",
   "Concrete keeps the room cooler than a wood floor in summer heat",
   "Soil floors are prohibited by DOT wherever placarded products are kept"
  ],
  "answer": 0,
  "explanation": "An impervious floor retains spilled material on the surface and is easy to clean and decontaminate after a release. A floor that slopes into a sump helps collect and contain spills, and nonabsorbent shelving and pallets made of plastic or metal serve the same purpose.",
  "page": "127"
 },
 {
  "id": "s8-018",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Along with the pesticide containers themselves, which items belong at a pesticide storage site?",
  "choices": [
   "Treated seed and veterinary supplies",
   "Pesticide equipment and a spill cleanup kit",
   "The crew's everyday work clothing and PPE",
   "Feed and medications used on the farm"
  ],
  "answer": 1,
  "explanation": "Only pesticide containers, pesticide equipment, and a spill cleanup kit belong at the storage site. Food, drink, tobacco, feed, medication, medical and veterinary supplies, seed (treated and untreated), clothing, and PPE other than what is needed for emergency response must be kept out.",
  "page": "127"
 },
 {
  "id": "s8-019",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "A stored container's label has been destroyed. What should be done immediately?",
  "choices": [
   "Mark the container with basics such as the trade name, EPA registration number, signal word, and use classification",
   "Set the container aside until a state inspector can identify the contents",
   "Pour the contents into a new container that still carries a readable label",
   "Dispose of the container and its contents as hazardous waste the same day"
  ],
  "answer": 0,
  "explanation": "Immediately mark the container with basic labeling information, such as the trade name, EPA registration number, signal word, and use classification, then find a replacement label online or get one from the manufacturer. Never use a product from an unmarked container unless you are certain what it is.",
  "page": "127"
 },
 {
  "id": "s8-020",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Why is it dangerous to keep pesticides in empty food containers such as milk jugs or soft drink bottles?",
  "choices": [
   "The plastic used for food packaging reacts chemically with most pesticide solvents",
   "Children associate a container's shape, size, and color with its usual contents",
   "Food containers cannot be sealed tightly enough to hold liquid formulations",
   "Food containers are too small to display the required labeling information"
  ],
  "answer": 1,
  "explanation": "Storing pesticides in food containers is illegal and can cause serious injury, because children connect the shape, size, and color of a container with what it normally holds. Pesticides belong in their original container or, where state law allows, in a properly labeled service container.",
  "page": "127"
 },
 {
  "id": "s8-021",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "What is suggested for partially used bags of wettable powders, dusts, and granules stored where humidity is high?",
  "choices": [
   "Move the bags to the highest shelf, where the air stays warmest and driest",
   "Empty the bags into glass jars with tight-fitting lids",
   "Refrigerate the bags between uses to keep moisture out of the powder",
   "Place the bags in a covered plastic trash bag or tub to reduce clumping"
  ],
  "answer": 3,
  "explanation": "Like bagged fertilizer, dry pesticide formulations clump together under high humidity. Placing partially used bags of wettable and soluble powders, dry flowables, dusts, and granules in a plastic trash bag or covered tub reduces clumping. Keep every container securely closed when not in use.",
  "page": "127"
 },
 {
  "id": "s8-022",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "How should containers be arranged on metal storage shelving?",
  "choices": [
   "Heaviest containers on the upper shelves so any leak drips away from the bags below",
   "Liquids on the top shelves and dry products underneath them",
   "Heaviest containers on the lower shelves, never extending past the shelf edge",
   "Alphabetically by product name, with the oldest stock at eye level"
  ],
  "answer": 2,
  "explanation": "Place the heaviest containers, and liquids, on the lower shelves, and never let containers extend beyond the edge of the shelving, where they could be knocked off or torn open. Drums and bags go on plastic pallets.",
  "page": "127"
 },
 {
  "id": "s8-023",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "How much liquid must the diked area around a bulk pesticide tank be able to contain?",
  "choices": [
   "Half of the tank's volume",
   "The tank's volume plus at least an additional 10%",
   "Exactly the tank's volume, measured at the fill line",
   "Twice the combined volume of every tank inside the dike"
  ],
  "answer": 1,
  "explanation": "The area inside a dike around a bulk or mini-bulk tank must be large enough to hold the volume of the liquid in the tank plus at least an additional 10%. Valves, pumps, and transfer hoses stay inside the diked area when not in use.",
  "page": "128"
 },
 {
  "id": "s8-024",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "What is the first step when a damaged pesticide container is found in storage?",
  "choices": [
   "Telephone the product's manufacturer",
   "Photograph the damage for the insurer",
   "Put on appropriate PPE",
   "Carry the container outdoors to vent"
  ],
  "answer": 2,
  "explanation": "Put on appropriate PPE first, then place the damaged container inside a larger one, such as a 5-gallon bucket, and clean up any spilled pesticide along with contaminated materials. If possible, use the pesticide immediately at a site and rate the label allows, or dispose of it according to label directions.",
  "page": "128"
 },
 {
  "id": "s8-025",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Why mark each stored pesticide container with the year it was purchased?",
  "choices": [
   "So warranty claims can be documented",
   "So the oldest product can be used first",
   "Because EPA requires dated inventories",
   "So auditors can reconcile purchase records"
  ],
  "answer": 1,
  "explanation": "Keeping an inventory and marking each container or box with its purchase year lets you use the oldest product first. Use it as it was meant to be used, since a replacement product may carry different label directions; questions about shelf life go to the dealer or manufacturer.",
  "page": "128"
 },
 {
  "id": "s8-026",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "How much pesticide should be purchased at one time?",
  "choices": [
   "Only as much as is needed for the season",
   "Enough to cover the next two seasons",
   "The largest package available, to lower the unit cost",
   "A full year's supply, ordered each winter"
  ],
  "answer": 0,
  "explanation": "Avoid storing large quantities of pesticides for long periods; buy only what the season requires. Accumulating outdated or unwanted product wastes money and may end with paying a disposal service, while using product up according to the label avoids both problems.",
  "page": "128"
 },
 {
  "id": "s8-027",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "EPA has canceled a product's registration and issued a notice prohibiting use after a specific date. What may happen to stock kept past that date?",
  "choices": [
   "It may be used up at half the labeled rate",
   "It must be returned to the dealer for a refund",
   "It may have to be disposed of as hazardous waste",
   "It may be sold, but only to certified applicators"
  ],
  "answer": 2,
  "explanation": "When EPA cancels a registration, it usually either allows continued use until the product clears the distribution chain or issues a federal notice prohibiting use after a specific date. Products kept past that date may have to be disposed of as hazardous waste, so follow the label's directions for disposing of excess or leftover product.",
  "page": "128"
 },
 {
  "id": "s8-028",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "What is the first step in developing a security program for a pesticide business or farm?",
  "choices": [
   "Installing perimeter cameras and intrusion detection systems",
   "Hiring trained guards for the storage facility",
   "Filing a security plan with local law enforcement",
   "Conducting a risk assessment of its vulnerabilities"
  ],
  "answer": 3,
  "explanation": "Security planning starts with a risk assessment of the business's or farm's vulnerabilities: list the assets that need protecting, the possible threats, and the steps that can be taken to protect them.",
  "page": "129"
 },
 {
  "id": "s8-029",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "A security risk assessment groups a facility's assets into which three broad categories?",
  "choices": [
   "Buildings, vehicles, and chemicals",
   "People, information, and property",
   "Employees, inventory, and utilities",
   "Products, records, and reputation"
  ],
  "answer": 1,
  "explanation": "Any place that stores or transports pesticides shares assets broadly defined as people (employees, visitors, customers, contractors, and neighbors), information (confidential business, proprietary, and employee material), and property (such as pesticide storage facilities, vehicles, and application equipment).",
  "page": "129"
 },
 {
  "id": "s8-030",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "At a minimum, what instruction should every employee of a pesticide operation receive?",
  "choices": [
   "Inventory control, security of storage and application equipment, and emergency preparedness",
   "Forklift certification, annual respirator fit testing, and hazard communication recordkeeping",
   "Sprayer calibration methods, drift management, and pesticide label mathematics",
   "Defensive driving, first aid certification, and customer service procedures"
  ],
  "answer": 0,
  "explanation": "All employees should at minimum be instructed on pesticide inventory control, security of storage facilities and application equipment, and emergency preparedness and response. Because employees know what normally happens around the facility, they can give early warning when something seems out of place or someone acts suspiciously.",
  "page": "130"
 },
 {
  "id": "s8-031",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Which practice keeps pesticide application equipment left in the field from being misused?",
  "choices": [
   "Leaving the engine idling so the crew can move it quickly",
   "Removing the keys and locking doors and cabinets",
   "Parking it beside a public road where passersby deter theft",
   "Posting a placard stating the equipment's replacement value"
  ],
  "answer": 1,
  "explanation": "Secure and disable equipment left in the field: do not leave keys in the ignition, lock doors and cabinets, and reclaim keys from employees when their employment ends. Unauthorized people must be kept away from all equipment used for storing, mixing, loading, transferring, transporting, and applying pesticides.",
  "page": "130"
 },
 {
  "id": "s8-032",
  "section": 8,
  "sectionName": "Transportation, Storage, and Security",
  "question": "Which purchase attempt should a pesticide business treat as a possible security threat?",
  "choices": [
   "A regular account customer paying by check for the usual seasonal order",
   "A neighboring farm asking to buy a single bag of granules",
   "An employee purchasing a small amount of product at a discount",
   "An unknown person offering cash for a large quantity of pesticides"
  ],
  "answer": 3,
  "explanation": "Be cautious of unknown persons who want to pay cash for large quantities of pesticides. Other preventive steps include asking employees to report unusual incidents or requests, keeping chemical storage areas locked when not in use, and restricting nonemployee access to pesticide storage facilities.",
  "page": "131"
 },
 {
  "id": "s9-001",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "An emergency response plan for a pesticide operation is also known by what other name?",
  "choices": [
   "A contingency plan",
   "A site security plan",
   "A hazard communication plan",
   "A worker protection plan"
  ],
  "answer": 0,
  "explanation": "A carefully thought-out emergency response plan, also called a contingency plan, can keep an emergency from turning into a catastrophe. It protects employees and the community, minimizes environmental damage, and reduces liability if an accident happens. A site security plan is a separate, related document.",
  "page": "135"
 },
 {
  "id": "s9-002",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "During a pesticide emergency, who is responsible for making the necessary calls and filling out reports to government agencies?",
  "choices": [
   "The designated emergency coordinator",
   "The facility's attorney",
   "The senior firefighter at the scene",
   "The pesticide manufacturer's representative"
  ],
  "answer": 0,
  "explanation": "The emergency response plan designates an emergency coordinator as the go-to person. That coordinator must have the authority to make important decisions, coordinates with local fire, police, and paramedic responders, and is the one who makes the necessary calls and fills out reports to government agencies.",
  "page": "136"
 },
 {
  "id": "s9-003",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "An emergency response plan includes a fill-in form of critical information to convey to emergency personnel. Which detail belongs on that form?",
  "choices": [
   "The exact name, quantity, and classification of the pesticides involved",
   "The estimated dollar value of the product lost in the incident",
   "The names and home addresses of employees who were off duty at the time",
   "The date the facility's pesticide storage permit was last renewed"
  ],
  "answer": 0,
  "explanation": "The critical-information form should capture the name of the person reporting, the precise location of the incident, a general description of what happened, the exact name, quantity, and classification of the pesticides involved, the extent of injuries, and whether pesticides have entered surface water.",
  "page": "136"
 },
 {
  "id": "s9-004",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "Where should copies of pesticide labels and Safety Data Sheets be kept for use in an emergency?",
  "choices": [
   "Away from the pesticide storage area",
   "Inside the storage building, attached to each product's shelf",
   "Only on file with the local emergency planning committee",
   "In a fireproof cabinet inside the pesticide storage area"
  ],
  "answer": 0,
  "explanation": "Keep copies of pesticide labels and Safety Data Sheets away from the storage area. If they were stored with the pesticides, the same fire or spill that triggers the emergency could destroy the very documents responders need.",
  "page": "136"
 },
 {
  "id": "s9-005",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "How often should employees be trained on how to carry out the facility's emergency response plan?",
  "choices": [
   "Each year",
   "Every six months",
   "Every two years",
   "Once, at the time of hiring"
  ],
  "answer": 0,
  "explanation": "All employees must be trained each year on how to execute the emergency response plan, so that everyone at the facility knows what to do in a crisis.",
  "page": "136"
 },
 {
  "id": "s9-006",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "What is the backbone of any emergency response plan?",
  "choices": [
   "A step-by-step description of the actions to take in a crisis",
   "A designated emergency response coordinator on call around the clock",
   "Knowing where product labels and Safety Data Sheets are kept",
   "An up-to-date roster of every employee's phone number"
  ],
  "answer": 0,
  "explanation": "The backbone of the plan is a written sequence of actions for a crisis: step-by-step procedures for fires, spills, ammonia leaks, tornadoes, hurricanes, transportation accidents, and other emergencies, covering everything from sounding the alarm to working with local response agencies.",
  "page": "137"
 },
 {
  "id": "s9-007",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "Pesticide products vary widely in flammability. Why is any pesticide caught in a fire still dangerous to responders working the scene?",
  "choices": [
   "Its smoke and fumes are hazardous",
   "All pesticide formulations are themselves highly flammable",
   "Every pesticide reacts violently with the water used on the fire",
   "All pesticide containers are pressurized and burst in the heat"
  ],
  "answer": 0,
  "explanation": "Even though flammability varies from product to product, any pesticide involved in a fire endangers responders because of the smoke and fumes it gives off. The danger also outlasts the flames: pesticide residue in the debris, soil, and runoff may remain hazardous after the fire is out.",
  "page": "137"
 },
 {
  "id": "s9-008",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "Which storage practice helps reduce the chance of a fire in a pesticide storage area?",
  "choices": [
   "Keeping combustible pesticides away from heating sources",
   "Placing combustible pesticides near a heat source so they cannot freeze",
   "Storing all combustible pesticides on the highest shelves",
   "Keeping the storage area tightly sealed and unventilated"
  ],
  "answer": 0,
  "explanation": "To prepare for and help prevent fires, store combustible pesticides away from heating sources, install a fire-detection system, and train employees to use a fire extinguisher.",
  "page": "137"
 },
 {
  "id": "s9-009",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "During a fire at a pesticide facility, why should evacuating employees gather at a designated rendezvous point?",
  "choices": [
   "So that everyone can be accounted for",
   "So they can be assigned firefighting duties by the fire department",
   "So they stay available to help move pesticides out of the building",
   "So investigators can interview each witness before memories fade"
  ],
  "answer": 0,
  "explanation": "Employees evacuating the premises should go to a designated rendezvous point so that everyone can be accounted for. Fighting the fire is left to responders, and cleanup and salvage happen later under expert supervision after everything has cooled.",
  "page": "138"
 },
 {
  "id": "s9-010",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "Once emergency crews are working a fire at your pesticide facility, whose instructions should you follow?",
  "choices": [
   "The onsite incident commander's",
   "Your facility's emergency coordinator's",
   "Your insurance agent's",
   "The pesticide manufacturer's emergency line's"
  ],
  "answer": 0,
  "explanation": "At the scene of a fire, follow the instructions given by the onsite incident commander. Your own role includes notifying the fire department, handing responders the SDSs, labels, emergency plan, and site map, keeping onlookers behind a security perimeter, and making the required regulatory and insurance calls.",
  "page": "138"
 },
 {
  "id": "s9-011",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "Which of these counts as a pesticide spill?",
  "choices": [
   "An accidental release of any amount of pesticide, however small",
   "An accidental release of more than one gallon of pesticide concentrate",
   "Any release of pesticide that reaches surface water or a storm drain",
   "An unintended release exceeding the product's reportable quantity"
  ],
  "answer": 0,
  "explanation": "A spill is an accidental release of any amount of pesticide, small or large; there is no minimum quantity. Spills on public highways, such as when a tank truck overturns, usually have major consequences, and a slow or wrong response can seriously endanger public health and environmental quality.",
  "page": "138"
 },
 {
  "id": "s9-012",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "What are the three C's to remember in the event of any pesticide spill?",
  "choices": [
   "Control the spill, contain it, and clean it up",
   "Call for help, cordon off the area, and cover the spill",
   "Caution bystanders, control traffic, and collect the product",
   "Contact the authorities, contain the spill, and cart it away"
  ],
  "answer": 0,
  "explanation": "In any pesticide spill, remember the three C's: control the spill at its source, contain it so it cannot spread, and clean it up.",
  "page": "138"
 },
 {
  "id": "s9-013",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "What must you always do before starting to respond to a pesticide spill?",
  "choices": [
   "Put on the appropriate personal protective equipment",
   "Sit down and reread your written emergency response plan",
   "Photograph the spill from several angles for documentation",
   "Get cleanup authorization from the product's manufacturer"
  ],
  "answer": 0,
  "explanation": "Act immediately to control a spilled product, but always put on the appropriate PPE before responding. Attacking a spill without protection trades one emergency for another by exposing the responder.",
  "page": "138"
 },
 {
  "id": "s9-014",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "How do you stop a leak coming from a pressurized system such as a sprayer?",
  "choices": [
   "Turn off the pump",
   "Open the tank lid to relieve the internal pressure",
   "Clamp the leaking hose shut with locking pliers",
   "Spray out the remaining tank contents onto the target site"
  ],
  "answer": 0,
  "explanation": "For a pressurized system such as a sprayer, stop the leak by turning off the pump. Small leaking containers go inside larger ones, and a leaking drum is plugged and its contents transferred to another container. Never leave the spill site unattended.",
  "page": "139"
 },
 {
  "id": "s9-015",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "When containing a pesticide spill, what should you above all prevent the material from reaching?",
  "choices": [
   "Surface water, such as drains and waterways",
   "Bare soil anywhere within the spill area",
   "Paved surfaces such as concrete or asphalt",
   "The property line of the application site"
  ],
  "answer": 0,
  "explanation": "Do everything you can to keep a spill from spreading, and above all prevent it from entering surface water; with a shovel you can quickly berm off an area to keep the pesticide out of drains and waterways. A spill contained on the surface is much easier to clean up than one that has entered a body of water.",
  "page": "139"
 },
 {
  "id": "s9-016",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "A pesticide spill has contaminated a stream. When should you contact the regulatory agencies responsible for waterways and pesticides?",
  "choices": [
   "Immediately, without delay",
   "As soon as the spill has been fully contained",
   "Within 24 hours of discovering the contamination",
   "Only if dead fish or affected livestock are observed"
  ],
  "answer": 0,
  "explanation": "If a spill contaminates a stream, pond, or other waterway, contact the state, tribe, or territory agencies for streams and fisheries and for pesticides immediately. They need time to alert downstream users who draw drinking water, prevent livestock poisoning, evacuate swimmers and anglers, and protect irrigated crops. Also call the manufacturer's emergency number on the SDS for steps to lessen the danger.",
  "page": "139"
 },
 {
  "id": "s9-017",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "Which telephone number can be called for emergency response information during a pesticide incident?",
  "choices": [
   "CHEMTREC at 1-800-424-9300",
   "CHEMTREC at 1-800-424-8802",
   "CHEMTREC at 1-800-262-8200",
   "CHEMTREC at 1-800-424-9346"
  ],
  "answer": 0,
  "explanation": "For emergency response information, call CHEMTREC at 1-800-424-9300. Keep the number posted with your emergency calling list so it is at hand when a spill or fire occurs.",
  "page": "139"
 },
 {
  "id": "s9-018",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "In the NFPA hazard identification diamond, which section carries the W symbol that warns responders not to use water?",
  "choices": [
   "The special-hazard box at the bottom",
   "The blue health-hazard box on the left",
   "The red flammability box at the top",
   "The instability box on the right"
  ],
  "answer": 0,
  "explanation": "The NFPA diamond's top, left, and right boxes rate flammability, health, and instability from 0 to 4. The bottom box is reserved for special hazards; its most common entry is the W warning against the use of water, and OX marks an oxidizer.",
  "page": "139"
 },
 {
  "id": "s9-019",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "After a pesticide spill onto soil, what cleanup step might the state, tribal, or territorial regulatory agency require?",
  "choices": [
   "Excavating the top 2 to 3 inches of soil and replacing it with clean soil",
   "Excavating the top 6 to 8 inches of soil and replacing it with clean soil",
   "Tilling the contaminated layer into the top 12 inches of soil to dilute it",
   "Covering the contaminated ground with 2 to 3 inches of fresh topsoil"
  ],
  "answer": 0,
  "explanation": "When a spill occurs on soil, the regulatory agency that handles pesticide spills in your state, tribe, or territory will tell you what to do. For example, it may require that the top 2 to 3 inches of soil be excavated, removed, and replaced with clean soil.",
  "page": "139"
 },
 {
  "id": "s9-020",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "A pesticide spilled on a concrete loading pad, and the contaminated absorbents have been swept up into a drum. What still must be done to the pad?",
  "choices": [
   "Neutralize it as directed by the SDS or the manufacturer",
   "Seal it with an epoxy coating so no residue can leach out",
   "Flush it thoroughly with water toward the nearest drain",
   "Break out and replace the top 2 to 3 inches of concrete"
  ],
  "answer": 0,
  "explanation": "A spill on concrete or asphalt requires neutralizing the surface after the absorbent materials and other contaminated items are swept up and drummed. Follow the neutralizing instructions on the SDS or contact the manufacturer at the number listed there; flushing with water would only spread the contamination.",
  "page": "139"
 },
 {
  "id": "s9-021",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "Which materials are examples of the absorbents that belong in a pesticide spill response kit?",
  "choices": [
   "Spill pillows, absorbent clay, and cat litter",
   "Sawdust, shredded newspaper, and peat moss",
   "Sand, vermiculite, and diatomaceous earth",
   "Baking soda, powdered lime, and gypsum"
  ],
  "answer": 0,
  "explanation": "A spill response kit should hold telephone numbers for emergency assistance, PPE designed for use with pesticides, absorbent materials such as spill pillows, absorbent clay, and cat litter, a shovel, broom, and dustpan, and heavy-duty detergent.",
  "page": "140"
 },
 {
  "id": "s9-022",
  "section": 9,
  "sectionName": "Emergency or Incident Response",
  "question": "Where should spill cleanup kits be kept?",
  "choices": [
   "In each transport vehicle and where pesticides are mixed, loaded, and stored",
   "Only at the central office, where the emergency coordinator controls access to them",
   "At the nearest fire station, so trained responders can bring them to the scene",
   "In the pesticide storage building only, since that is where most spills happen"
  ],
  "answer": 0,
  "explanation": "Keep a spill cleanup kit in each pesticide transport vehicle and at the site where pesticides are mixed, loaded, and stored. Store the kit items in a plastic container and keep them clean and in working order.",
  "page": "140"
 },
 {
  "id": "s10-001",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Before purchasing a pesticide for a job, which two things should the applicator determine?",
  "choices": [
   "Whether the product can be used safely under the application conditions and how much product the treatment area requires",
   "Whether other applicators in the area have used the product successfully and how recently it was applied to the same site",
   "Whether a generic version with the same active ingredient exists and how its formulation differs from the name brand",
   "Whether the dealer can supply the product before the treatment window opens and how long the quoted price will be honored"
  ],
  "answer": 0,
  "explanation": "Choosing the right pesticide means confirming it can be used safely under the conditions of the application and working out how much product the treatment area will need. Reading the label before purchase also reveals the legal target sites, timing considerations, application methods, and any special restrictions.",
  "page": "144"
 },
 {
  "id": "s10-002",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Which section of a pesticide label lists the crops, animals, or sites on which the product may legally be used?",
  "choices": [
   "Directions for Use",
   "Precautionary Statements",
   "Environmental Hazards",
   "Storage and Disposal"
  ],
  "answer": 0,
  "explanation": "The Directions for Use section names the crops, animals, and sites where the pesticide may legally be applied, and under that heading also lists target pests, application rates, spray quality specifications, and general application methods.",
  "page": "144"
 },
 {
  "id": "s10-003",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Two pesticides are considered compatible when what is true of their combination?",
  "choices": [
   "They can be mixed and applied together without reduced effectiveness or altered physical or chemical properties",
   "They carry the same signal word and call for the same personal protective equipment during mixing and loading",
   "They control the same target pest and can be delivered through the same application equipment at the same rate",
   "They come from the same manufacturer and are registered for use on the same crops, animals, or treatment sites"
  ],
  "answer": 0,
  "explanation": "Compatibility means the products can be mixed and applied in combination without reducing effectiveness or changing the physical and chemical properties of the mixture. Sharing a manufacturer, a signal word, or a target pest has nothing to do with whether two products can be safely combined.",
  "page": "144"
 },
 {
  "id": "s10-004",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "A tank mixture of two pesticides turns into a paste, separates into layers, and clogs the sprayer screens. What is this an example of?",
  "choices": [
   "Physical incompatibility",
   "Chemical incompatibility",
   "Enhanced pesticidal activity",
   "Normal settling of a suspension"
  ],
  "answer": 0,
  "explanation": "Physical incompatibility is the failure of products to stay uniformly mixed in the spray tank. It can appear as a putty or paste, separation into layers, or a cottage-cheese look from precipitates, and the mixture may clog screens and nozzles and will not control the target pests.",
  "page": "144"
 },
 {
  "id": "s10-005",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Mixing pesticides with hard water can cause physical incompatibility. Hard water has a pH greater than what value?",
  "choices": [
   "6",
   "7",
   "8",
   "9"
  ],
  "answer": 1,
  "explanation": "Hard water, described as water with a pH greater than 7, is one cause of physical incompatibility, along with improper mixing procedures, inadequate agitation, unstable emulsifiers in some emulsifiable concentrates, and mixing with liquid fertilizers.",
  "page": "145"
 },
 {
  "id": "s10-006",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "A tank mix combines a product labeled DANGER with two products labeled CAUTION. How must the finished mixture be treated?",
  "choices": [
   "As a CAUTION material, since most of the products in the tank carry that signal word",
   "As a WARNING material, the midpoint between the signal words of the products in the mix",
   "As a DANGER material, following the label with the greatest restrictions",
   "According to whichever product contributes the largest share of the finished spray volume"
  ],
  "answer": 2,
  "explanation": "When a tank mix contains a pesticide with a higher toxicity level than the others, the entire mixture is handled according to the more restrictive signal word. That means using the safety equipment and following all other requirements found on the most restrictive label.",
  "page": "145"
 },
 {
  "id": "s10-007",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "What happens in the tank when pesticides are chemically incompatible?",
  "choices": [
   "The products stay chemically unchanged but refuse to remain uniformly mixed no matter how much agitation is applied",
   "A chemical reaction takes place and produces new substances, altering the activity of one or more of the products",
   "The carrier evaporates faster than normal, concentrating the products in the tank above their labeled use rates",
   "The products bind to the tank walls and plumbing, so less active ingredient reaches the nozzles during spraying"
  ],
  "answer": 1,
  "explanation": "Chemical incompatibility is a chemical reaction between mixed products that produces new substances and alters the activity of one or more of them. Clues include heat, a color change, formation of a gas or precipitate, surface scum or foam, or gel and sludge. Failure to stay uniformly mixed without any reaction is physical incompatibility.",
  "page": "145"
 },
 {
  "id": "s10-008",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "When conducting a jar test, how full should the jar be filled with carrier before the products are added?",
  "choices": [
   "One-tenth to one-quarter full",
   "One-fifth to one-half full",
   "One-half to three-quarters full",
   "Three-quarters to completely full"
  ],
  "answer": 1,
  "explanation": "A jar test starts by filling a small glass or plastic container one-fifth to one-half full with the carrier, water or liquid fertilizer. Proportionate amounts of each product are then added one at a time in the recommended tank-mixing order, shaking the jar thoroughly after each addition.",
  "page": "145"
 },
 {
  "id": "s10-009",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "After the last product is shaken into a jar test, how long should the mixture stand before it is checked for flakes, sludge, or separation?",
  "choices": [
   "2 to 5 minutes",
   "10 to 15 minutes",
   "30 to 45 minutes",
   "60 to 90 minutes"
  ],
  "answer": 1,
  "explanation": "The jar-test mixture is allowed to stand for 10 to 15 minutes. If flakes, sludge, gel, precipitates, or other solids form, if the mixture separates into layers, or if heat is given off, the products cannot be safely tank-mixed.",
  "page": "145"
 },
 {
  "id": "s10-010",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "What is a preslurry, in the context of making a tank mix?",
  "choices": [
   "A dry formulation mixed with a little water into a paste before it goes into the tank mix",
   "A concentrated batch of surfactant dissolved in warm water before the other adjuvants are added",
   "The first partial tank of carrier that is circulated to rinse leftover residue out of the plumbing",
   "A small trial batch of the complete mixture used to confirm compatibility before mixing in bulk"
  ],
  "answer": 0,
  "explanation": "A preslurry is made by mixing a dry formulation, such as a wettable powder or water-dispersible granule, with a little water to form a paste before adding it to the tank mix. This ensures the dry product is thoroughly mixed before it joins the full mixture.",
  "page": "146"
 },
 {
  "id": "s10-011",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "In the recommended tank mixing order, which products are added last?",
  "choices": [
   "Emulsifiable concentrates",
   "Wettable powders",
   "Water-dispersible granules",
   "Compatibility agents"
  ],
  "answer": 0,
  "explanation": "The order runs: partially fill the tank with carrier and start agitation, add any compatibility agent, add suspension products (dry formulations first, then liquids), add solution products, add surfactants or other adjuvants, and finish with emulsion products such as emulsifiable concentrates.",
  "page": "146"
 },
 {
  "id": "s10-012",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Which description fits a properly chosen pesticide mixing and loading area?",
  "choices": [
   "Well lighted, ventilated if indoors, and away from people, animals, and food",
   "Adjacent to the water source so tanks fill quickly and spills can be hosed away without delay",
   "Inside the pesticide storage building so the containers travel the shortest possible distance",
   "On ground that drains rapidly so any spilled material soaks away instead of pooling underfoot"
  ],
  "answer": 0,
  "explanation": "The mixing and loading area belongs in a well-lighted place, well ventilated if it is indoors, located away from people, animals, food, and anything else that might be contaminated. Spills that can be hosed toward a drain or that soak into fast-draining ground threaten water sources.",
  "page": "146"
 },
 {
  "id": "s10-013",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Why should a fill hose be kept well above the surface of the mixture when filling a spray tank?",
  "choices": [
   "The air gap keeps the tank mixture from back-siphoning into the water source",
   "The falling stream agitates the mixture and keeps suspended products from settling out",
   "It stops foam from creeping up the hose and giving a false reading of the tank level",
   "It prevents the hose end from corroding through contact with the concentrated mixture"
  ],
  "answer": 0,
  "explanation": "Leaving a distinct air gap between the hose or pipe end and the surface of the pesticide mixture ensures the tank contents cannot back-siphon into the water source. Protecting the water supply, not agitation or foam control, is the reason for the gap.",
  "page": "147"
 },
 {
  "id": "s10-014",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "How does a backflow preventer protect a water source when water is pumped directly into a mix tank?",
  "choices": [
   "It closes automatically when a drop or loss of water pressure occurs",
   "It filters pesticide out of any water that reverses direction in the line",
   "It sounds an alarm and shuts off the pump whenever the flow starts to reverse",
   "It diverts any reversed flow onto a containment pad instead of toward the source"
  ],
  "answer": 0,
  "explanation": "When water is pumped directly from a source into a mix tank, a check valve, anti-siphoning device, or backflow preventer guards against back-siphoning if the pump fails. The backflow preventer's mechanism closes automatically whenever water pressure drops or is lost.",
  "page": "147"
 },
 {
  "id": "s10-015",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "A bib-top apron worn for mixing and loading pesticides should be made from which materials?",
  "choices": [
   "Butyl, nitrile, or foil-laminate",
   "Neoprene, latex, or polyethylene film",
   "Waxed cotton, canvas, or leather",
   "PVC, rubber-coated denim, or vinyl"
  ],
  "answer": 0,
  "explanation": "For body protection while mixing and loading, wear a bib-top apron made of butyl, nitrile, or foil-laminate in case of splashes or contact with contaminated equipment. The style with built-in gloves and sleeves is especially protective.",
  "page": "147"
 },
 {
  "id": "s10-016",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "How should a respirator be selected for handling a particular pesticide?",
  "choices": [
   "Choose one carrying the NIOSH code given on the pesticide product label",
   "Choose the model with the highest protection factor the dealer offers",
   "Match the respirator class to the signal word printed on the product",
   "Use a dust mask for dry formulations and a cartridge respirator for liquids"
  ],
  "answer": 0,
  "explanation": "Respiratory protection is chosen by matching the National Institute for Occupational Safety and Health (NIOSH) code given on the pesticide product label. The label, not the signal word or the formulation type alone, determines which respirator is appropriate.",
  "page": "147"
 },
 {
  "id": "s10-017",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "What is the proper way to open a paper or cardboard pesticide container?",
  "choices": [
   "Tear it carefully along the factory seam so the opening stays as small as possible",
   "Cut it open with a sharp knife or scissors kept for no other purpose",
   "Puncture one corner with a pointed tool so the contents pour out in a thin stream",
   "Slit the top while holding the bag inside the tank opening to catch any spills"
  ],
  "answer": 1,
  "explanation": "Never tear paper or cardboard containers open. Cutting with a sharp knife or scissors reduces the danger of spilling and makes bags easier to close after use. Clean the knife or scissors afterward and do not use them for anything else.",
  "page": "147"
 },
 {
  "id": "s10-018",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "How are dusts, powders, and most other dry pesticide formulations measured?",
  "choices": [
   "By weight, in pounds and ounces",
   "By volume, in pints and quarts",
   "By counting premeasured packets",
   "By the fill lines molded into the container"
  ],
  "answer": 0,
  "explanation": "Dusts, powders, and most dry formulations are measured by weight, while liquids and some granular pesticides are measured by volume. Labels use the English system: pounds and ounces for dry materials, and fluid ounces, pints, quarts, and gallons for liquids.",
  "page": "148"
 },
 {
  "id": "s10-019",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Why does the manual advise against metal measuring utensils for pesticides?",
  "choices": [
   "Some pesticides react with metal, especially aluminum and iron",
   "Metal corrodes too fast to keep its graduation marks readable",
   "Static charge on metal makes dusts cling and causes short measures",
   "Metal surfaces hold residues that later contaminate other mixtures"
  ],
  "answer": 0,
  "explanation": "Some pesticides react with metal, especially aluminum and iron, so measuring utensils should be glass or plastic. Use an assortment of measuring utensils from 1 cup to 1 gallon for liquids, and an accurate scale with measuring cups and spoons for dry products.",
  "page": "148"
 },
 {
  "id": "s10-020",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "When a label requires rinsing an empty pesticide container, when should the rinsing happen?",
  "choices": [
   "Immediately after the container is emptied",
   "Within 24 hours of finishing the application",
   "During end-of-day cleanup along with the sprayer",
   "Just before the container is delivered for recycling"
  ],
  "answer": 0,
  "explanation": "Rinse immediately after emptying the container; residues that are allowed to dry may become difficult to remove. When possible, the rinsate should be added to the next application.",
  "page": "148"
 },
 {
  "id": "s10-021",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "What may legitimately be done with an empty nonrefillable pesticide container?",
  "choices": [
   "Refill it with the same product purchased in bulk from the dealer",
   "Keep it as a dedicated rinsate storage vessel after triple rinsing it",
   "Recycle, recondition, or dispose of it in the manner the label directs",
   "Return it to the manufacturer so it can be inspected, refilled, and sold again"
  ],
  "answer": 2,
  "explanation": "For a nonrefillable container, the label states whether it may be recycled, reconditioned, or disposed of, and the manner of disposal. Pesticide containers must never be reused, and only containers labeled refillable go back to the dealer or manufacturer for refilling.",
  "page": "148"
 },
 {
  "id": "s10-022",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "In each cycle of triple rinsing a small pesticide container, how much water is added?",
  "choices": [
   "Enough to fill it one-tenth full",
   "Enough to fill it one-quarter full",
   "Enough to fill it one-half full",
   "Enough to fill it three-quarters full"
  ],
  "answer": 1,
  "explanation": "For containers of 5 gallons or less: empty the contents into the equipment or mix tank, draining 10 seconds after the flow begins to drip, fill the container one-quarter full with water, recap and shake for 10 seconds, pour the rinsate into the tank, drain again, and repeat two more times.",
  "page": "149"
 },
 {
  "id": "s10-023",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Triple rinsing by rolling the capped container back and forth on its side is the technique for containers of what size?",
  "choices": [
   "Larger than 2.5 gallons or 25 pounds",
   "Larger than 5 gallons or 50 pounds",
   "Larger than 15 gallons or 100 pounds",
   "Larger than 30 gallons or 250 pounds"
  ],
  "answer": 1,
  "explanation": "Containers too large to shake, meaning capacities over 5 gallons or 50 pounds, are triple rinsed by filling one-quarter full with water, tightening the closures, rolling the container on its side through at least one complete revolution for 30 seconds, then tipping it back and forth on each end before emptying the rinsate.",
  "page": "149"
 },
 {
  "id": "s10-024",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "At what pressure and for how long should a pressure-rinsing nozzle be run inside an empty pesticide container?",
  "choices": [
   "About 20 psi for at least 60 seconds",
   "About 40 psi for at least 30 seconds",
   "About 60 psi for at least 20 seconds",
   "About 80 psi for at least 10 seconds"
  ],
  "answer": 1,
  "explanation": "To pressure rinse, hold the emptied container upside down over the application equipment or mix tank, insert the pressure-rinsing nozzle through the side of the container, and rinse at about 40 pounds per square inch for at least 30 seconds, then drain for 10 seconds after the flow begins to drip.",
  "page": "149"
 },
 {
  "id": "s10-025",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "When treating an area on foot with hand-held equipment, how should the applicator move whenever possible?",
  "choices": [
   "Backing out of the area as it is treated",
   "Walking directly into the wind at all times",
   "Moving alongside the swath with the nozzle held downwind",
   "Crossing the treated strip quickly to shorten the exposure"
  ],
  "answer": 0,
  "explanation": "Many applications made on foot walk the applicator into the path of the pesticide, so whenever possible apply while backing out of the treated area. If walking into the pesticide's path is unavoidable, consider shin-high or knee-high rubber boots with spray-resistant or waterproof pants.",
  "page": "150"
 },
 {
  "id": "s10-026",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Which group of equipment is singled out as producing especially high-exposure applications?",
  "choices": [
   "Air-blast sprayers, fog generators, power dusters, and equipment that directs spray overhead",
   "Banded-row sprayers, drop spreaders, wick applicators, and equipment that injects into the soil",
   "Shielded boom sprayers, granule spreaders, bait stations, and crack-and-crevice application tools",
   "Hooded sprayers, low-pressure boom sprayers, closed-cab air seeders, and chemigation systems"
  ],
  "answer": 0,
  "explanation": "High-exposure applications include mist blower or air-blast sprayers, aerosol and fog generators, high-pressure sprayers and power dusters, and equipment that directs applications overhead, such as into tree canopies or at roof eaves. For these, use appropriate gloves, hooded protective coveralls, footwear with sealed cuffs, and a full-face respirator or half-face respirator with sealed goggles.",
  "page": "150"
 },
 {
  "id": "s10-027",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "What extra precaution applies when a pesticide is applied in an enclosed space such as a warehouse, railcar, or grain silo?",
  "choices": [
   "Cut the application rate in half to offset the limited volume of air in the space",
   "Wear an approved respirator and extra protective clothing, even if the same job outdoors would not need them",
   "Run ventilation fans continuously through the application so vapors cannot accumulate",
   "Rotate applicators out of the space every 15 minutes so that no one accumulates a full exposure"
  ],
  "answer": 1,
  "explanation": "Applying pesticides in enclosed spaces such as warehouses, restaurants, cargo areas, grain storage structures, and greenhouses raises the risk of inhalation and dermal exposure. Wear an approved respirator and additional protective clothing even when the same application outdoors would not require them.",
  "page": "150"
 },
 {
  "id": "s10-028",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "What should be done with spray equipment whenever the applicator pauses or stops during an application?",
  "choices": [
   "Turn the equipment off and release the pressure from the tank and nozzles",
   "Leave the system pressurized so the mixture cannot settle in the plumbing",
   "Open every nozzle briefly to equalize the pressure across the whole boom",
   "Shut off the agitation system to spare the pump while the sprayer idles"
  ],
  "answer": 0,
  "explanation": "Turn spray equipment off whenever you pause for any reason, and whenever you stop an application, depressurize the tank by turning off the main pressure valve and releasing the pressure remaining at the nozzles. Agitation, however, must be maintained if the mix is a suspension such as a wettable powder, flowable, or dry flowable.",
  "page": "151"
 },
 {
  "id": "s10-029",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Equipment rinsate may serve as a diluent for a new spray mixture only if which rate condition is met?",
  "choices": [
   "The rinsate makes up no more than 10 percent of the new mixture's total volume",
   "Pesticide from the rinsate plus the new product stays within the label rate for the site",
   "The new mixture is prepared at half the label rate to leave room for the rinsate's pesticide",
   "The rinsate is used within 24 hours of the equipment cleaning that produced it"
  ],
  "answer": 1,
  "explanation": "The amount of pesticide in the rinsate plus the amount of pesticide product in the new mixture must not exceed the label rate for the target site. The rinsate's pesticide must also be labeled for the site being treated, and the rinsate must dilute a mixture containing the same or a compatible pesticide.",
  "page": "151"
 },
 {
  "id": "s10-030",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "What PPE is required when cleaning pesticide-contaminated application equipment?",
  "choices": [
   "Chemical-resistant gloves and safety glasses only, since equipment residues are already diluted",
   "The PPE the labeling lists for mixing and loading the concentrated product from its container",
   "The same PPE the labeling requires for making applications, plus a chemical-resistant apron",
   "Waterproof coveralls and a full-face respirator, no matter what the product labeling requires"
  ],
  "answer": 2,
  "explanation": "Equipment cleaning presents as great a risk of pesticide exposure as many other handling tasks. Wear the same PPE the labeling requires for making applications, plus a chemical-resistant apron or other appropriate protective equipment, and consider eye protection even when the label does not require it.",
  "page": "151"
 },
 {
  "id": "s10-031",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "Rinsate from cleaned application equipment must never be allowed to flow into which of these?",
  "choices": [
   "A labeled application site treated at or below the label rate",
   "Sink or floor drains, storm sewers, wells, streams, lakes, or rivers",
   "A rinsate holding container kept for later use or proper disposal",
   "A fresh tank mix of the same pesticide, used as part of the diluent"
  ],
  "answer": 1,
  "explanation": "Rinsates from cleaned equipment contain pesticides and can harm people and the environment, so they must never flow into water systems, including sink or floor drains, storm sewers, wells, streams, lakes, or rivers. The right destinations are a labeled site at or below the label rate, storage for later use or disposal, or a compatible future mixture.",
  "page": "151"
 },
 {
  "id": "s10-032",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "What strength of water-detergent solution does the manual suggest for cleaning out a spray system?",
  "choices": [
   "2 to 4 ounces of detergent in 30 to 40 gallons of water",
   "8 to 16 ounces of detergent in 30 to 40 gallons of water",
   "8 to 16 ounces of detergent in 10 to 20 gallons of water",
   "24 to 32 ounces of detergent in 50 to 60 gallons of water"
  ],
  "answer": 1,
  "explanation": "When possible, rinse equipment with a strong solution of 8 to 16 ounces of detergent in 30 to 40 gallons of water, circulating it through the system for several minutes. Then remove the nozzles and screens and flush the sprayer twice with clean water; some labels require triple rinsing of the spray system.",
  "page": "152"
 },
 {
  "id": "s10-033",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "When preparing a sprayer for storage, what should be added before the final flushing?",
  "choices": [
   "1 to 5 gallons of lightweight oil, depending on the size of the tank",
   "5 to 10 gallons of RV antifreeze, depending on the size of the tank",
   "A half-gallon blend of equal parts kerosene and liquid detergent",
   "2 to 3 gallons of liquid fertilizer to buffer any remaining residues"
  ],
  "answer": 0,
  "explanation": "Add 1 to 5 gallons of lightweight oil, depending on tank size, before the final flushing; as the water is pumped out, the oil leaves a protective coating inside the tank, pump, and plumbing. Nozzle tips and screens are removed and stored in a can of light oil such as diesel fuel or kerosene to prevent corrosion.",
  "page": "152"
 },
 {
  "id": "s10-034",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "When should contaminated clothes come off and a shower be taken after cleaning application equipment?",
  "choices": [
   "Immediately after the cleanup is finished",
   "At the end of the workday, once all the equipment is stored",
   "Within four hours, after the cleaned equipment has dried",
   "Before beginning the next day's first pesticide handling task"
  ],
  "answer": 0,
  "explanation": "Remove contaminated clothing and shower immediately after cleaning equipment. Waiting until the end of the day may allow additional pesticide to be absorbed through the skin.",
  "page": "153"
 },
 {
  "id": "s10-035",
  "section": 10,
  "sectionName": "Planning the Pesticide Application",
  "question": "After an application draws a complaint or legal action, what may be the applicator's most valuable defense?",
  "choices": [
   "Accurate records of the pesticide application",
   "A liability waiver signed by the customer in advance",
   "Statements from coworkers who observed the work",
   "Proof of current certification and insurance coverage"
  ],
  "answer": 0,
  "explanation": "Good records provide the facts of what was done and demonstrate care in the work. If a complaint or legal action follows an application, accurate records may be the applicator's most valuable defense, while missing or insufficient records invite baseless accusations and additional scrutiny.",
  "page": "154"
 },
 {
  "id": "s11-001",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Which set of considerations governs the choice of a pesticide application method?",
  "choices": [
   "The applicator's certification category, the time of year, and the size of the pesticide storage building",
   "The capacity of the spray tank, the distance to the water source, and the market value of the crop",
   "The habits of the target pest, the target site, the pesticide's properties, equipment suitability, and cost",
   "Local rainfall records, the soil texture of the field, and the number of field workers available"
  ],
  "answer": 2,
  "explanation": "Method selection depends on the nature and habits of the target pest, the characteristics of the target site, the properties of the pesticide, how suitable the available equipment is, and the cost and efficiency of the alternatives. One or more of those factors usually settles the choice for you.",
  "page": "157"
 },
 {
  "id": "s11-002",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "What does a broadcast application do?",
  "choices": [
   "Applies the pesticide uniformly over an entire area or field",
   "Applies the pesticide in parallel strips over or between crop rows",
   "Applies the pesticide only to small, distinct areas within a field",
   "Applies the pesticide beneath the soil surface under pressure"
  ],
  "answer": 0,
  "explanation": "Broadcast means uniform coverage of a whole area or field. Treating parallel strips is a band application, treating small distinct areas is a spot treatment, and forcing pesticide below the surface is soil injection.",
  "page": "158"
 },
 {
  "id": "s11-003",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "An applicator treats parallel strips over the crop rows and leaves the ground between the strips untreated. Which application method is this?",
  "choices": [
   "Basal application",
   "Broadcast application",
   "Directed-spray application",
   "Band application"
  ],
  "answer": 3,
  "explanation": "A band application puts pesticide down in parallel strips or bands, such as between or over rows of a crop. Basal treatment goes to the lower portions of brush or small trees, broadcast covers the entire field uniformly, and directed spray aims at the pests themselves to keep pesticide off nontarget plants and animals.",
  "page": "158"
 },
 {
  "id": "s11-004",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Applying a pesticide inside an enclosed area is known as which kind of treatment?",
  "choices": [
   "Spot treatment",
   "Space treatment",
   "Soil incorporation",
   "Crack-and-crevice application"
  ],
  "answer": 1,
  "explanation": "A space treatment is an application made in an enclosed area. A spot treatment covers small, distinct areas; soil incorporation uses tillage, rainfall, or irrigation to move pesticide into the soil; and a crack-and-crevice application places small amounts into cracks and crevices such as along baseboards and in cabinets.",
  "page": "158"
 },
 {
  "id": "s11-005",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Applying a pesticide under pressure beneath the soil surface is called what?",
  "choices": [
   "Soil incorporation",
   "Basal application",
   "Soil injection",
   "Tree injection"
  ],
  "answer": 2,
  "explanation": "Soil injection delivers the pesticide under pressure below the soil surface. Soil incorporation instead relies on tillage, rainfall, or irrigation equipment to move a surface application down into the soil; tree injection places pesticide under the bark of trees.",
  "page": "158"
 },
 {
  "id": "s11-006",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "What are the two primary types of closed mixing and loading systems?",
  "choices": [
   "Enclosed cabs and permanent pesticide containment pads",
   "Mechanical transfer devices and water-soluble packaging",
   "Gravity-feed hoppers and compressed-air injection units",
   "Direct-injection metering pumps and rinsate recovery tanks"
  ],
  "answer": 1,
  "explanation": "One type uses mechanical devices to move the pesticide from its container into the equipment; the other uses water-soluble packaging that goes into the tank intact. Enclosed cabs and containment pads are separate safety systems, not closed mixing and loading systems.",
  "page": "158"
 },
 {
  "id": "s11-007",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Apart from protecting the handler, what advantage do closed mixing and loading systems give the application itself?",
  "choices": [
   "They measure the concentrate more accurately, so overdosing and underdosing are less likely",
   "They filter the finished spray mixture so that nozzle screens no longer clog during the job",
   "They agitate the tank continuously so wettable powders stay suspended throughout spraying",
   "They lower the pressure needed at the nozzle to atomize the spray mixture into fine droplets"
  ],
  "answer": 0,
  "explanation": "Closed systems increase handler safety, cut the need for some personal protective equipment, and reduce spills, and they also measure the pesticide concentrate more accurately, which reduces the chance of overdosing or underdosing. Filtration, agitation, and atomization are functions of the sprayer, not of the closed system.",
  "page": "158"
 },
 {
  "id": "s11-008",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "How is a water-soluble pesticide bag used?",
  "choices": [
   "The bag is slit open and its contents are poured through the tank screen",
   "The bag is triple rinsed after the premeasured contents have been emptied",
   "The bag is dissolved in a separate bucket and that slurry is added to the tank",
   "The unopened bag is placed into the water or fertilizer in the mixing tank"
  ],
  "answer": 3,
  "explanation": "Water-soluble bags are a simple closed mixing and loading system: the premeasured pesticide stays sealed in the packet, which is dropped unopened into the water or fertilizer in the mixing tank. Mixing must run long enough for the bags to dissolve completely, and few manufacturers offer them for small-volume applications.",
  "page": "159"
 },
 {
  "id": "s11-009",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Minibulk containers adapted to closed mixing and loading systems hold what range of volumes?",
  "choices": [
   "2.5 to 40 gallons",
   "40 to 330 gallons",
   "30 to 250 gallons",
   "100 to 500 gallons"
  ],
  "answer": 1,
  "explanation": "Minibulks range from 40 to 330 gallons and are built to work with closed systems, usually with pump-and-drive units delivering the product and a meter for accurate measuring into the sprayer. They normally go back to the dealer for refilling, which avoids rinsing many small containers.",
  "page": "159"
 },
 {
  "id": "s11-010",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "What personal protective equipment must be worn while applying pesticides from inside an enclosed cab?",
  "choices": [
   "Only eye protection, because the closed cab substitutes for the remaining label PPE",
   "None, provided the doors, hatches, and windows stay closed during the application",
   "All of the PPE the label specifies, since the cab supplements PPE and does not replace it",
   "None, unless the cab lacks a charcoal filter and a positive-pressure ventilation system"
  ],
  "answer": 2,
  "explanation": "An enclosed cab is a supplement to personal protective equipment, not a replacement for it, so you wear everything the label specifies while working inside it. Some agricultural use pesticide labeling allows exceptions for applicators in enclosed cabs, and the outside surfaces of the cab and equipment are contaminated, so wear PPE when climbing in and out or servicing the equipment.",
  "page": "159"
 },
 {
  "id": "s11-011",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "A permanently installed containment pad must be equipped to recover spilled or leaked material by what means?",
  "choices": [
   "An automatic sump system or a manually operated pump",
   "A gravel filter bed draining to a soil absorption field",
   "A drain line plumbed into the site's sanitary sewer connection",
   "An evaporation basin sized for a full season of wash water"
  ],
  "answer": 0,
  "explanation": "Recovery is by either an automatic sump system or a manually operated pump. The pad itself is generally made of impermeable material and is concave or fitted with curbs, berms, or walls tall enough to hold the largest spill, leak, or equipment wash water likely at that site.",
  "page": "160"
 },
 {
  "id": "s11-012",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Roughly what share of all pesticides is formulated for spraying?",
  "choices": [
   "About 50%",
   "About 65%",
   "Nearly 75%",
   "Nearly 90%"
  ],
  "answer": 3,
  "explanation": "Nearly 90% of all pesticides are formulated for spraying, which is why the sprayer is the most common piece of application equipment. A hydraulic sprayer carries the pesticide in water or another liquid carrier.",
  "page": "160"
 },
 {
  "id": "s11-013",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Which sprayer uses both water and air as carriers, with the nozzles forming droplets that an airstream then delivers to the target?",
  "choices": [
   "The hand-held compressed-air sprayer",
   "The hydraulic boom sprayer",
   "The air-blast, or mist, sprayer",
   "The walk-through livestock sprayer"
  ],
  "answer": 2,
  "explanation": "In an air-blast (mist) sprayer the nozzles form the droplets and a stream of air carries them to the target, so both water and air act as carriers. These sprayers are typically used for disease and insect control on fruit trees, vineyards, vegetables, and Christmas trees.",
  "page": "161"
 },
 {
  "id": "s11-014",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "A tank agitation system is especially important with which kinds of formulations?",
  "choices": [
   "Wettable powders and dry flowables",
   "Emulsifiable concentrates and true solutions",
   "Ultra-low-volume oil-based formulations",
   "Soluble powders and ready-to-use liquid baits"
  ],
  "answer": 0,
  "explanation": "Agitation helps with most sprayable formulations and is especially needed for wettable powders and dry flowables. Constantly mixing the pesticide with the liquid carrier keeps the suspension or solution uniform, which is what makes the application come out even.",
  "page": "161"
 },
 {
  "id": "s11-015",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Why must a sprayer pump never be run dry or with the flow restricted at its inlet or outlet?",
  "choices": [
   "Air pulled into the pump changes the droplet size produced at the nozzles",
   "Running dry lets abrasive powders settle out and cake in the bottom of the tank",
   "The pressure gauge then reads low and misleads the operator about the rate applied",
   "The pump depends on the spray liquid for lubrication and to prevent overheating"
  ],
  "answer": 3,
  "explanation": "The spray liquid lubricates the pump and carries away heat, so running the pump dry or against a restriction can damage it. Pump parts should also resist corrosion and abrasion, and the pump should never be run above the speeds or pressures the manufacturer recommends.",
  "page": "161"
 },
 {
  "id": "s11-016",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "What do a sprayer's nozzles control?",
  "choices": [
   "The rate of tank agitation and the total volume of carrier held in the sprayer tank",
   "The amount of material applied, droplet formation and size, and the pattern of the droplets",
   "The output pressure of the pump and the uniformity of the suspension in the tank",
   "The density of the spray liquid and the speed at which the mixture settles out"
  ],
  "answer": 1,
  "explanation": "Nozzles set how much material is applied, how droplets form and what size they are (which governs coverage and drift), and how the droplets are distributed and patterned. Any nozzle's pattern contains a wide range of droplet sizes, and nozzles are classified by the pattern they produce.",
  "page": "161"
 },
 {
  "id": "s11-017",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "What is the effect of using a nozzle that produces mainly small droplets?",
  "choices": [
   "It minimizes off-target drift but covers less of the target surface",
   "It raises the flow rate without altering the angle of the spray pattern",
   "It maximizes surface coverage of the target but drifts off target more easily",
   "It lowers the pressure needed to hold a uniform pattern across the boom"
  ],
  "answer": 2,
  "explanation": "Small droplets maximize surface coverage of the target, while a nozzle that mainly makes larger droplets is the one most likely to minimize off-target drift. Choose nozzles for the target pest, the type of application, the coverage wanted, and the drift potential.",
  "page": "162"
 },
 {
  "id": "s11-018",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Why should brass or aluminum nozzle tips never be used to apply wettable powders and dry flowables?",
  "choices": [
   "The metals react chemically with dry formulations inside the nozzle body",
   "Those abrasive formulations wear the soft metal tips out too quickly",
   "The metals cannot withstand the pressures those formulations require",
   "The tips corrode and leave metallic residues on the treated foliage"
  ],
  "answer": 1,
  "explanation": "Wettable powders and dry flowables are abrasive and wear brass and aluminum tips out too fast, and wear destroys the nozzle's proper operation, so worn nozzles must be replaced. Use hard, wear-resistant tips of plastic, hardened stainless steel, or ceramic, and fit the correct screen size for each nozzle.",
  "page": "162"
 },
 {
  "id": "s11-019",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "How do granular applicators usually meter out the material they apply?",
  "choices": [
   "By gravity feed through an adjustable opening",
   "By a positive-displacement pump feeding a manifold",
   "By compressed air metered through a venturi throat",
   "By an auger driven from the tractor power take-off"
  ],
  "answer": 0,
  "explanation": "Granular applicators normally work by gravity feed and have an adjustable opening that regulates the flow. They can run as separate units or be mounted on planters or cultivating equipment so two operations are combined, and they are made for either band or broadcast application.",
  "page": "162"
 },
 {
  "id": "s11-020",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "When is a drop spreader a better choice than a rotary spreader?",
  "choices": [
   "When a wide swath must be covered in fewer passes",
   "When the granules are unusually light and dusty",
   "When the ground is too rough for a gravity feed",
   "When the granules have to be placed more precisely"
  ],
  "answer": 3,
  "explanation": "Drop spreaders are superior to rotary spreaders whenever more precise placement of the pesticide is wanted. A rotary spreader flings granules to the front and sides with a spinning disk or fan, while a drop spreader lets them fall by gravity through holes uncovered by an adjustable sliding gate in the bottom of the hopper.",
  "page": "162"
 },
 {
  "id": "s11-021",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Besides ground speed, which conditions change the rate that a granular applicator actually delivers?",
  "choices": [
   "Carrier volume, nozzle spacing along the boom, and the operating pressure at the tip",
   "Granule size, shape and density, field terrain, relative humidity, and air temperature",
   "Tank agitation, screen mesh size, and the density of the liquid carrier being used",
   "Soil moisture, the row spacing of the crop, and the depth of the last tillage pass"
  ],
  "answer": 1,
  "explanation": "Granular application rate is affected by ground speed, by the size, shape and density of the granules, by field terrain, and even by relative humidity and air temperature. Nozzles, pressure, and carrier volume belong to sprayers, not granular applicators.",
  "page": "162"
 },
 {
  "id": "s11-022",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Which type of application equipment is used for small-scale disease and insect control?",
  "choices": [
   "Foggers",
   "Dipping vats",
   "Dusters",
   "Chemigation systems"
  ],
  "answer": 2,
  "explanation": "Dusters handle small-scale disease and insect control. Foggers are for indoor pest control and some outdoor insect control, dipping vats treat pests on animals, and chemigation systems apply pesticides through irrigation in greenhouses and field crops.",
  "page": "162"
 },
 {
  "id": "s11-023",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "What is the purpose of calibrating application equipment?",
  "choices": [
   "To be sure the equipment lays down the correct amount of material uniformly over a given area",
   "To confirm the pump can hold the highest pressure the nozzle manufacturer permits for the tip",
   "To document the equipment settings that the pesticide label requires for enforcement purposes",
   "To find the fastest ground speed at which the spray pattern from the boom stays unbroken"
  ],
  "answer": 0,
  "explanation": "Calibration is the process of measuring and adjusting how much pesticide the equipment applies to a given area, and its purpose is to ensure the correct amount goes out uniformly. Too little may fail to control the pest; too much is illegal and can injure the treated plant, animal, or surface, leave illegal residues, and harm nontarget organisms and the environment.",
  "page": "163"
 },
 {
  "id": "s11-024",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Which three variables determine how much spray material a boom sprayer applies per unit of area?",
  "choices": [
   "Tank capacity, pump pressure, and the number of nozzles used",
   "Nozzle material, boom height, and the density of the spray liquid",
   "Carrier volume, agitation rate, and the size of the nozzle screens",
   "Nozzle flow rate, ground speed, and width sprayed per nozzle"
  ],
  "answer": 3,
  "explanation": "The three variables behind gallons per acre or gallons per 1,000 square feet are the nozzle flow rate, the ground speed of the sprayer, and the width sprayed per nozzle. Nozzle flow rate itself varies with orifice size, nozzle pressure, and the density of the spray liquid.",
  "page": "163"
 },
 {
  "id": "s11-025",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "If the ground speed of a sprayer is doubled and nothing else changes, what happens to the gallons of spray applied per acre?",
  "choices": [
   "It stays the same",
   "It doubles",
   "It falls by half",
   "It falls to one-fourth"
  ],
  "answer": 2,
  "explanation": "Spray application rate varies inversely with ground speed, so doubling the speed cuts the gallons applied per acre in half. Doubling the effective width sprayed per nozzle likewise halves the amount applied.",
  "page": "163"
 },
 {
  "id": "s11-026",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "A rectangular area measures 1,320 feet by 120 feet. How many acres is that?",
  "choices": [
   "3.6 acres",
   "2.4 acres",
   "4.8 acres",
   "5.2 acres"
  ],
  "answer": 0,
  "explanation": "Length times width gives 1,320 by 120, or 158,400 square feet. Dividing by the 43,560 square feet in one acre gives 3.6 acres.",
  "page": "164"
 },
 {
  "id": "s11-027",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "A triangular area has a base of 325 feet and a height of 150 feet. What is its area?",
  "choices": [
   "48,750 square feet",
   "12,188 square feet",
   "16,250 square feet",
   "24,375 square feet"
  ],
  "answer": 3,
  "explanation": "Triangular area is the base times the height, divided by two: 325 times 150 is 48,750, and half of that is 24,375 square feet, which works out to about 0.6 acre.",
  "page": "164"
 },
 {
  "id": "s11-028",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "How is the area of a circular site calculated for a pesticide application?",
  "choices": [
   "Multiply 3.14 by the diameter squared, then divide the result by two",
   "Multiply 3.14 by the radius squared, using half the diameter as the radius",
   "Multiply the diameter by 3.14, then multiply that product by the radius",
   "Multiply the radius by the diameter, then multiply the result by 3.14"
  ],
  "answer": 1,
  "explanation": "Circular area equals 3.14 times the radius squared, and the radius is half the diameter. A 90-foot-diameter circle has a 45-foot radius, so its area is 3.14 times 45 squared, or 6,358.5 square feet, about 0.15 acre.",
  "page": "164"
 },
 {
  "id": "s11-029",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "A calibration test showed a boom sprayer put out 10 gallons of water over a 0.25-acre test area. How much spray mixture is needed to treat a 10-acre field?",
  "choices": [
   "100 gallons",
   "250 gallons",
   "400 gallons",
   "40 gallons"
  ],
  "answer": 2,
  "explanation": "Scale up the calibration result: 10 gallons per 0.25 acre equals Y gallons per 10 acres, so Y is 10 times 10 divided by 0.25, which is 400 gallons of spray mixture.",
  "page": "165"
 },
 {
  "id": "s11-030",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "A job needs 400 gallons of finished spray and the label calls for 4 ounces of liquid product per gallon of spray. How many gallons of concentrate does that take?",
  "choices": [
   "6.25 gallons",
   "12.5 gallons",
   "25 gallons",
   "3.1 gallons"
  ],
  "answer": 1,
  "explanation": "Four hundred gallons times 4 ounces per gallon is 1,600 ounces of product. Since one gallon holds 128 fluid ounces, 1,600 divided by 128 gives 12.5 gallons of concentrate.",
  "page": "165"
 },
 {
  "id": "s11-031",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "By how much must sprayer pressure be increased to double the nozzle flow rate?",
  "choices": [
   "It must be increased four times",
   "It must be doubled",
   "It must be increased eight times",
   "It must be increased by half again"
  ],
  "answer": 0,
  "explanation": "Doubling the pressure does not double the flow; the pressure has to go up fourfold to double the flow rate. That is why pressure cannot be used to make major changes in application rate, though it can correct minor changes caused by nozzle wear.",
  "page": "166"
 },
 {
  "id": "s11-032",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Air-induction, or venturi, nozzles need what operating pressure range to work effectively?",
  "choices": [
   "10 to 30 pounds per square inch",
   "20 to 60 pounds per square inch",
   "100 to 200 pounds per square inch",
   "40 to 100 pounds per square inch"
  ],
  "answer": 3,
  "explanation": "Venturi nozzles mix air into the spray, forming larger droplets with fewer fine particles and giving the droplets energy to reach the target, but they need 40 to 100 pounds per square inch to do it. Even at those higher pressures they still cut the likelihood of drift dramatically.",
  "page": "166"
 },
 {
  "id": "s11-033",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "What happens to sprayer pressure when the operating speed is doubled while an electronic rate controller holds the application volume?",
  "choices": [
   "Pressure stays constant because the controller compensates",
   "Pressure rises fourfold, sharply raising drift potential",
   "Pressure doubles, with little change in droplet size",
   "Pressure drops by half, coarsening the spray droplets"
  ],
  "answer": 1,
  "explanation": "A rate controller keeps volume uniform as speed changes, but major speed changes still move the pressure: doubling the speed produces a fourfold pressure increase. With the nozzle orifice unchanged, that added pressure dramatically increases drift potential, and cutting speed lowers pressure enough to hurt coverage and pattern quality.",
  "page": "167"
 },
 {
  "id": "s11-034",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "How does the height of the boom or nozzle above the target affect spray drift?",
  "choices": [
   "The closer it is to the target, the greater the chance of drift",
   "Height changes drift only when wind speeds exceed 10 miles per hour",
   "The closer it is to the target, the less chance of drift",
   "Height affects pattern width only and has no bearing on drift"
  ],
  "answer": 2,
  "explanation": "Spray height, meaning the distance from the target site, is an important drift factor: the nearer the boom or nozzle is to the ground or target, the less chance spray has to drift. Lowering the boom even a few inches reduces off-target movement, but pattern uniformity still has to be watched.",
  "page": "167"
 },
 {
  "id": "s11-035",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "Why should spraying be avoided during a temperature inversion?",
  "choices": [
   "An inversion keeps spray particles from dissipating",
   "An inversion evaporates the carrier before droplets land",
   "An inversion reverses the wind direction without warning",
   "An inversion raises the pressure needed at each nozzle tip"
  ],
  "answer": 0,
  "explanation": "Temperature inversions prevent spray particles from dissipating, so they hang in the air and can move off target. Air stability, wind direction, and wind speed all have to be checked at the time and place of application, along with any weather-related restrictions on the label.",
  "page": "167"
 },
 {
  "id": "s11-036",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "What boom height satisfies the overlap requirement for most nozzle types?",
  "choices": [
   "A height above the target equal to twice the nozzle spacing on the boom",
   "A height above the target equal to half the nozzle spacing on the boom",
   "A height above the target equal to the width of the spray pattern angle",
   "A height above the target equal to the nozzle spacing on the boom"
  ],
  "answer": 3,
  "explanation": "Most nozzle types need some pattern overlap to apply uniformly, and holding a 1:1 ratio of boom height above the target to nozzle spacing on the boom satisfies most overlap requirements.",
  "page": "168"
 },
 {
  "id": "s11-037",
  "section": 11,
  "sectionName": "Pesticide Application Procedures",
  "question": "By how much do tests indicate some drift control additives reduce downwind drift deposits?",
  "choices": [
   "By 10% to 25%",
   "By 25% to 40%",
   "By 50% to 80%",
   "By 80% to 95%"
  ],
  "answer": 2,
  "explanation": "Tests show some additives cut downwind drift deposits by 50% to 80%. Drift control additives are a type of chemical adjuvant and must be mixed and applied according to label directions; research has also found that some products sold to reduce drift actually increase drift potential, and that some raise droplet size so much that coverage and pesticide performance suffer.",
  "page": "168"
 },
 {
  "id": "s12-001",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "A ground sprayer is driven at 4 miles per hour. What is that ground speed in feet per minute?",
  "choices": [
   "352 feet per minute",
   "240 feet per minute",
   "293 feet per minute",
   "440 feet per minute"
  ],
  "answer": 0,
  "explanation": "One mile per hour equals 88 feet per minute, so 4 x 88 = 352 feet per minute. The companion factor for seconds is 1.467, so the same 4 mph is about 5.9 feet per second.",
  "page": "190"
 },
 {
  "id": "s12-002",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "A landowner describes a tract to be treated as 2.5 square miles. How many acres is that?",
  "choices": [
   "1,600 acres",
   "1,280 acres",
   "1,440 acres",
   "2,000 acres"
  ],
  "answer": 0,
  "explanation": "One square mile contains 640 acres, so the area is 2.5 x 640 = 1,600 acres. Rounding the section to 500 or 800 acres before multiplying is what produces the neighboring wrong answers.",
  "page": "190"
 },
 {
  "id": "s12-003",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "A water source you plan to use as a carrier tests at 250 parts per million of a dissolved contaminant. What is that concentration expressed in grams per liter?",
  "choices": [
   "0.25 grams per liter",
   "2.5 grams per liter",
   "0.025 grams per liter",
   "25 grams per liter"
  ],
  "answer": 0,
  "explanation": "Parts per million are converted to grams per liter by multiplying by 0.001, so 250 x 0.001 = 0.25 gram per liter. Each part per million is one thousandth of a gram in a liter.",
  "page": "190"
 },
 {
  "id": "s12-004",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "A product's directions set an upper application temperature of 86 degrees F. What is that limit in degrees Celsius?",
  "choices": [
   "About 30 degrees C",
   "About 24 degrees C",
   "About 33 degrees C",
   "About 47 degrees C"
  ],
  "answer": 0,
  "explanation": "Subtract 32 from the Fahrenheit reading, then multiply by 0.555: 86 - 32 = 54, and 54 x 0.555 = 29.97, about 30 degrees C. Going the other way, add 17.98 to the Celsius figure and multiply by 1.8.",
  "page": "190"
 },
 {
  "id": "s12-005",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "You measure a lawn area to be treated as 200 square yards. How many square feet is that?",
  "choices": [
   "1,800 square feet",
   "600 square feet",
   "2,400 square feet",
   "1,296 square feet"
  ],
  "answer": 0,
  "explanation": "A square yard holds 9 square feet, so 200 x 9 = 1,800 square feet. The factor 1,296 converts square yards to square inches, and 3 converts linear yards to feet, not areas.",
  "page": "190"
 },
 {
  "id": "s12-006",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "Your spray tank holds 250 gallons and the label calls for 3 pounds of wettable powder per 100 gallons of water. How much formulation goes into a full tank?",
  "choices": [
   "7.5 pounds",
   "8.3 pounds",
   "12 pounds",
   "75 pounds"
  ],
  "answer": 0,
  "explanation": "Multiply the gallons in the tank by the pounds recommended per 100 gallons, then divide by 100: 250 x 3 = 750, and 750 / 100 = 7.5 pounds. The same formula applies to soluble and wettable powders alike.",
  "page": "190"
 },
 {
  "id": "s12-007",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "You have only 1 acre to treat, your equipment is calibrated at 40 gallons per acre, and the label calls for 2.5 pounds of formulation per 100 gallons of water. How much formulation belongs in that partial tank load?",
  "choices": [
   "1 pound, or 16 ounces",
   "2.5 pounds, or 40 ounces",
   "0.4 pound, or 6.4 ounces",
   "1.6 pounds, or 25.6 ounces"
  ],
  "answer": 0,
  "explanation": "For a partial load, the gallons figure in the formula is the water you will actually put in, not the tank's capacity. Here that is 40 gallons: 40 x 2.5 = 100, and 100 / 100 = 1 pound, which is 16 ounces.",
  "page": "190"
 },
 {
  "id": "s12-008",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "Your sprayer is calibrated to apply 20 gallons per acre and the tank holds 500 gallons. How many acres will one full tankful cover?",
  "choices": [
   "25 acres",
   "10 acres",
   "33 acres",
   "100 acres"
  ],
  "answer": 0,
  "explanation": "Acres sprayed per tankful is the gallons in the tank divided by the gallons applied per acre: 500 / 20 = 25 acres. That figure is then what the per-acre label rate is multiplied by to load the tank.",
  "page": "191"
 },
 {
  "id": "s12-009",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "One full tankful of your sprayer covers 30 acres, and the label rate is 1.5 pounds of formulation per acre. How much formulation should that tankful receive?",
  "choices": [
   "45 pounds",
   "20 pounds",
   "50 pounds",
   "60 pounds"
  ],
  "answer": 0,
  "explanation": "Once you know the acres a tankful covers, multiply that by the pounds of formulation the label calls for per acre: 30 x 1.5 = 45 pounds. Dividing acres by the rate would give 20, which under-doses the tank.",
  "page": "191"
 },
 {
  "id": "s12-010",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "You plan to treat 6 acres with equipment that is pumping 18 gallons per acre, and the job takes less than a full tank. How many gallons of finished spray do you need to mix?",
  "choices": [
   "108 gallons",
   "96 gallons",
   "120 gallons",
   "84 gallons"
  ],
  "answer": 0,
  "explanation": "For a partial load, gallons needed in the tank is the gallons per acre multiplied by the acres to be treated: 18 x 6 = 108 gallons. The formulation to add is then figured from the acres treated, not from the tank's capacity.",
  "page": "191"
 },
 {
  "id": "s12-011",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "The recommendation is 1.5 pounds of active ingredient per acre and the product on hand is a 75% wettable powder. How many pounds of formulation does each acre require?",
  "choices": [
   "2 pounds",
   "1.1 pounds",
   "2.5 pounds",
   "11.3 pounds"
  ],
  "answer": 0,
  "explanation": "A dosage given as active ingredient must first be converted to formulation: pounds of a.i. per acre times 100, divided by the percent a.i. in the formulation. Here 1.5 x 100 = 150, and 150 / 75 = 2 pounds of formulation per acre.",
  "page": "191"
 },
 {
  "id": "s12-012",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "Your sprayer applies 20 gallons per acre, the tank holds 300 gallons, and the label rate for an emulsifiable concentrate is 1 quart per acre. How much concentrate should the full tank receive?",
  "choices": [
   "15 quarts",
   "20 quarts",
   "6.7 quarts",
   "12 quarts"
  ],
  "answer": 0,
  "explanation": "Liquid formulations use the same arithmetic as dry ones with the liquid measure substituted for pounds: gallons in the tank times quarts per acre, divided by gallons per acre. Here 300 x 1 = 300, and 300 / 20 = 15 quarts.",
  "page": "191"
 },
 {
  "id": "s12-013",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "A recommendation calls for 2 pounds of active ingredient per acre and you have purchased a 4 EC. How much of that concentrate does each acre require?",
  "choices": [
   "0.5 gallon",
   "0.25 gallon",
   "2 gallons",
   "0.125 gallon"
  ],
  "answer": 0,
  "explanation": "The label of a liquid formulation states the pounds of active ingredient in a gallon of concentrate, so a 4 EC carries 4 pounds per gallon. Divide the a.i. needed per acre by that figure: 2 / 4 = 0.5 gallon of formulation per acre.",
  "page": "191"
 },
 {
  "id": "s12-014",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "Your equipment is calibrated at 2 gallons of spray per 1,000 square feet, the tank holds 100 gallons, and the label calls for 0.5 pound of formulation per 1,000 square feet. How much formulation should the full tank receive?",
  "choices": [
   "25 pounds",
   "50 pounds",
   "12.5 pounds",
   "100 pounds"
  ],
  "answer": 0,
  "explanation": "Divide the gallons per tank by the gallons applied per 1,000 square feet to get the sections a tankful covers: 100 / 2 = 50 sections. Then multiply by the rate per 1,000 square feet: 50 x 0.5 = 25 pounds.",
  "page": "192"
 },
 {
  "id": "s12-015",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "A label lists 2 quarts of product per 1,000 square feet, but you have measured your target area in acres. What is the equivalent rate per acre?",
  "choices": [
   "87 quarts per acre",
   "43.5 quarts per acre",
   "21.8 quarts per acre",
   "174 quarts per acre"
  ],
  "answer": 0,
  "explanation": "An acre is 43,560 square feet, which is 43.5 units of 1,000 square feet, so a rate per 1,000 square feet is multiplied by 43.5 to reach a per-acre rate: 2 x 43.5 = 87 quarts per acre.",
  "page": "192"
 },
 {
  "id": "s12-016",
  "section": 12,
  "sectionName": "Appendix C: Conversions and Calculations",
  "sectionLabel": "app. C",
  "question": "A label gives a rate of 4.35 pounds of product per acre, and you must treat several 100-square-foot plots. How much product does each 100 square feet get?",
  "choices": [
   "0.01 pound",
   "0.1 pound",
   "0.001 pound",
   "0.435 pound"
  ],
  "answer": 0,
  "explanation": "Going from a per-acre rate down to a small area, divide by 43.5 for 1,000 square feet or by 435 for 100 square feet. Here 4.35 / 435 = 0.01 pound per 100 square feet, which is 0.1 pound per 1,000 square feet.",
  "page": "192"
 },
 {
  "id": "s13-001",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "Under OSHA's Hazard Communication Standard, who must supply a Safety Data Sheet for a hazardous chemical?",
  "choices": [
   "Its manufacturer, distributor, or importer",
   "The employer at whose site it is handled",
   "The state agency that licenses applicators",
   "The certified applicator who purchases it"
  ],
  "answer": 0,
  "explanation": "OSHA's Hazard Communication Standard puts the duty on chemical manufacturers, distributors, and importers: each must provide a Safety Data Sheet for every hazardous chemical so that users are told about its hazards.",
  "page": "193"
 },
 {
  "id": "s13-002",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "A shop's older files are labeled Material Safety Data Sheets. How do those documents relate to the Safety Data Sheets in use now?",
  "choices": [
   "They are the same kind of document under its former name",
   "They were written for consumers, not for employers",
   "They were issued by EPA, while an SDS comes from OSHA itself",
   "They covered mixtures, while an SDS covers single chemicals only"
  ],
  "answer": 0,
  "explanation": "Safety Data Sheets were formerly known as Material Safety Data Sheets. It is the same document under a newer name, still the manufacturer's, distributor's, or importer's means of communicating a hazardous chemical's hazards to those who handle it.",
  "page": "193"
 },
 {
  "id": "s13-003",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "Since June 1, 2015, how must the information on a Safety Data Sheet be arranged?",
  "choices": [
   "In a uniform set of 16 numbered sections with set headings",
   "In whatever order the manufacturer finds clearest",
   "In 8 numbered sections that mirror the panels of the pesticide label",
   "In 16 sections whose order and headings vary with the type of product"
  ],
  "answer": 0,
  "explanation": "As of June 1, 2015, SDSs must follow a uniform format of 16 numbered sections with standard headings and associated information, so a user can find the same kind of information in the same place on any product's sheet.",
  "page": "193"
 },
 {
  "id": "s13-004",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "OSHA does not enforce every part of a Safety Data Sheet. Which sections does it leave to other agencies?",
  "choices": [
   "Sections 12 through 15",
   "Sections 1 through 4",
   "Sections 9 through 11",
   "Sections 14 through 16"
  ],
  "answer": 0,
  "explanation": "OSHA will not enforce Sections 12 to 15 because those cover matters other agencies handle. Section 15, for instance, describes what appears on the pesticide label, which the U.S. Environmental Protection Agency enforces.",
  "page": "193"
 },
 {
  "id": "s13-005",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "The signal word on a product's Safety Data Sheet is not the same as the signal word printed on that product's pesticide label. What should the applicator conclude?",
  "choices": [
   "The two documents can legitimately differ this way",
   "The sheet is out of date and must be replaced",
   "The product was reformulated after the label copy was printed",
   "The sheet's signal word governs storage but not application"
  ],
  "answer": 0,
  "explanation": "An SDS may carry a different signal word than the pesticide label, and it will show pictograms that do not appear on the label at all, because the sheet is written to OSHA's hazard communication format rather than to the EPA-enforced labeling rules.",
  "page": "193"
 },
 {
  "id": "s13-006",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "You need the manufacturer's emergency telephone number for a product you are handling. Which numbered section of its Safety Data Sheet carries it?",
  "choices": [
   "Section 1, Identification",
   "Section 4, First Aid Measures",
   "Section 16, Other Information",
   "Section 2, Hazard(s) Identification"
  ],
  "answer": 0,
  "explanation": "Section 1 identifies the product and its source: the product identifier, the manufacturer's or distributor's name, address and phone number, an emergency phone number, and the recommended use along with any restrictions on use.",
  "page": "193"
 },
 {
  "id": "s13-007",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "A handler has swallowed a small amount of concentrate. Which Safety Data Sheet section gives the symptoms to watch for and the treatment required?",
  "choices": [
   "Section 4, First Aid Measures",
   "Section 11, Toxicological Information",
   "Section 2, Hazard(s) Identification",
   "Section 8, Exposure Controls"
  ],
  "answer": 0,
  "explanation": "Section 4 covers first aid: the important symptoms, the acute and delayed effects, and the treatment required. Section 11 is background toxicology, listing routes of exposure and numerical measures of toxicity rather than what to do now.",
  "page": "193"
 },
 {
  "id": "s13-008",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "A container tips over and spills in the mixing area. Which Safety Data Sheet section sets out the emergency procedures, protective equipment, and cleanup methods?",
  "choices": [
   "Section 6, Accidental Release Measures",
   "Section 13, Disposal Considerations",
   "Section 5, Firefighting Measures",
   "Section 7, Handling and Storage"
  ],
  "answer": 0,
  "explanation": "Section 6 covers accidental releases: emergency procedures, the protective equipment to wear, and proper methods of containing and cleaning up the spill. Section 13 picks up afterward with disposal of what was collected.",
  "page": "194"
 },
 {
  "id": "s13-009",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "Before shelving a newly delivered pesticide, you want to know which products it must not be stored beside. Which Safety Data Sheet section states that?",
  "choices": [
   "Section 7, Handling and Storage",
   "Section 10, Stability and Reactivity",
   "Section 14, Transport Information",
   "Section 9, Physical and Chemical Properties"
  ],
  "answer": 0,
  "explanation": "Section 7 lists the precautions for handling and storing the product safely, including the incompatible products it must be kept away from. Section 10 covers the chemical's own stability and the chance of hazardous reactions.",
  "page": "194"
 },
 {
  "id": "s13-010",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "Which Safety Data Sheet section gives OSHA's permissible exposure limits, threshold limit values, and the personal protective equipment for a chemical?",
  "choices": [
   "Section 8, Exposure Controls/Personal Protection",
   "Section 11, Toxicological Information",
   "Section 2, Hazard(s) Identification",
   "Section 15, Regulatory Information"
  ],
  "answer": 0,
  "explanation": "Section 8 covers exposure controls and personal protection: OSHA's permissible exposure limits, threshold limit values, the appropriate engineering controls, and the personal protective equipment a handler should wear.",
  "page": "194"
 },
 {
  "id": "s13-011",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "Which Safety Data Sheet section explains proper disposal of a chemical and its container, including recycling or reclamation?",
  "choices": [
   "Section 13, Disposal Considerations",
   "Section 12, Ecological Information",
   "Section 14, Transport Information",
   "Section 6, Accidental Release Measures"
  ],
  "answer": 0,
  "explanation": "Section 13 gives guidance on proper disposal practices, on recycling or reclaiming the chemical or its container, and on handling those materials safely. Section 12 instead addresses environmental impact if the chemical escapes the target area.",
  "page": "194"
 },
 {
  "id": "s13-012",
  "section": 13,
  "sectionName": "Appendix D: Safety Data Sheets",
  "sectionLabel": "app. D",
  "question": "You want to know whether the Safety Data Sheet in your files is the current version. Which section tells you when it was prepared or last revised?",
  "choices": [
   "Section 16, Other Information",
   "Section 1, Identification",
   "Section 15, Regulatory Information",
   "Section 3, Composition/Information on Ingredients"
  ],
  "answer": 0,
  "explanation": "Section 16 is where the sheet records when it was prepared or when the last known revision was made, which is how a user judges whether a filed copy is current.",
  "page": "194"
 },
 {
  "id": "a1-001",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Under what circumstance may an aerial applicator pilot depart from legal flight and aircraft handling requirements?",
  "choices": [
   "Only in an extreme emergency where the public or the environment may be in danger",
   "Whenever the pesticide label's directions conflict with a Federal Aviation Regulation",
   "When the aircraft operator's chief pilot approves the departure before the flight",
   "When complying would prevent finishing the application before the wind picks up"
  ],
  "answer": 0,
  "explanation": "An aerial applicator must follow every regulatory requirement and restriction that applies to pesticide handling and aerial application. The single exception is an extreme emergency in which the public or the environment may be in danger; convenience, employer approval, and weather pressure are never justification.",
  "page": "9",
  "manual": "aerial"
 },
 {
  "id": "a1-002",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Which levels of government have laws and regulations governing pesticide handling and application in the United States?",
  "choices": [
   "Federal and state only, because tribal lands are covered by the federal rules",
   "Federal, state, tribal, territorial, and sometimes local",
   "Federal only, because pesticide law is entirely a national responsibility",
   "State and local only, with the federal agencies acting as advisors"
  ],
  "answer": 1,
  "explanation": "Pesticide handling and application are regulated at the federal, state, tribal, and territorial levels, and sometimes by local government as well. A pilot has to satisfy all of them, not just the federal rules.",
  "page": "9",
  "manual": "aerial"
 },
 {
  "id": "a1-003",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Regarding the people who work where pesticides are present, what do pesticide laws and regulations aim to accomplish?",
  "choices": [
   "Requiring employers to provide health insurance to everyone who handles pesticides",
   "Assuring agricultural and pest control workers of safe working conditions",
   "Barring agricultural workers from entering any field that has been treated",
   "Setting minimum pay rates for flaggers, mixer-loaders, and other ground crew"
  ],
  "answer": 1,
  "explanation": "One stated purpose of pesticide laws and regulations is to assure agricultural and pest control workers safe working conditions where pesticides are present. They do not set wages or insurance benefits, and they regulate rather than forbid work in treated areas.",
  "page": "10",
  "manual": "aerial"
 },
 {
  "id": "a1-004",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Which federal law contains the regulations for certifying the people who apply pesticides?",
  "choices": [
   "Part 137 of the Federal Aviation Regulations for agricultural aircraft",
   "The Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA)",
   "The Occupational Safety and Health Act and its state-plan equivalents",
   "The Federal Food, Drug, and Cosmetic Act (FFDCA)"
  ],
  "answer": 1,
  "explanation": "The federal regulations covering applicator certification, pesticide handling, and pesticide application are part of FIFRA. The EPA, together with state, tribal, and territorial pesticide regulatory agencies, enforces its provisions.",
  "page": "10",
  "manual": "aerial"
 },
 {
  "id": "a1-005",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Which part of the Code of Federal Regulations specifically addresses agricultural aircraft operations?",
  "choices": [
   "Section 40, part 170",
   "Section 14, part 61",
   "Section 14, part 137",
   "Section 7, part 110"
  ],
  "answer": 2,
  "explanation": "The Federal Aviation Regulations at Section 14, part 137 of the Code of Federal Regulations govern agricultural aircraft operations. Part 170 of Section 40 is the Worker Protection Standard, a separate EPA rule.",
  "page": "10",
  "manual": "aerial"
 },
 {
  "id": "a1-006",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Besides dispensing economic poisons, dispensing which material by aircraft makes a business an agricultural aircraft operation?",
  "choices": [
   "Emergency supplies delivered to agricultural workers at remote field sites",
   "Any liquid or dry material dropped to slow an advancing wildfire",
   "Substances meant for plant nourishment, soil treatment, or propagation",
   "Feed pellets dropped to cattle stranded on snowbound rangeland"
  ],
  "answer": 2,
  "explanation": "An agricultural aircraft operation is a business that flies aircraft to dispense economic poisons, to dispense other substances intended for plant nourishment, soil treatment, propagation of plant life, or pest control, or to engage in dispensing activities that directly affect agriculture, horticulture, or forest preservation.",
  "page": "10",
  "manual": "aerial"
 },
 {
  "id": "a1-007",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Which subjects fall under FAA regulations rather than EPA pesticide regulations?",
  "choices": [
   "Reentry intervals and the field posting required after an application",
   "Ferrying routes, operating altitude, and pilot medical exams",
   "Storage, mixing procedures, and empty pesticide container disposal",
   "Product registration and the classification of pesticides for use"
  ],
  "answer": 1,
  "explanation": "FAA regulations cover aircraft operation, aircraft inspection and maintenance, ferrying routes, operating altitude, pilot licensing, and medical exams. Storage, mixing, disposal, product classification, and worker protection are pesticide matters handled through the EPA and the states.",
  "page": "10",
  "manual": "aerial"
 },
 {
  "id": "a1-008",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "What pilot's license and medical certificate must an applicant for aerial applicator pilot certification hold and maintain?",
  "choices": [
   "A private pilot's license and a current Class I Medical Certificate",
   "A commercial pilot's license and a current Class III Medical Certificate",
   "A commercial pilot's license and a current Class II Medical Certificate",
   "A sport pilot certificate and a current Class II Medical Certificate"
  ],
  "answer": 2,
  "explanation": "Applicants for aerial applicator pilot certification must hold and keep current both a commercial pilot's license and a Class II Medical Certificate.",
  "page": "10",
  "manual": "aerial"
 },
 {
  "id": "a1-009",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "What additional document does a pilot need to serve as pilot-in-command for an agricultural aircraft operator?",
  "choices": [
   "An endorsement letter from that operator or the operator's designee",
   "A written contract filed with the state lead agency before each season",
   "A supervisory certification issued by the state pesticide regulatory agency",
   "A separate FAA type rating for every aircraft in the operator's fleet"
  ],
  "answer": 0,
  "explanation": "Working as pilot-in-command for an agricultural aircraft operator requires an endorsement letter from that operator or from a person the operator designates, in addition to the commercial license and current Class II Medical Certificate.",
  "page": "10",
  "manual": "aerial"
 },
 {
  "id": "a1-010",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "What restraint equipment must the aircraft flown by an aerial applicator pilot be fitted with?",
  "choices": [
   "A lap belt at each pilot station, with shoulder harnesses optional below 500 feet",
   "Approved and properly labeled seat belts and shoulder harnesses at each pilot station",
   "Shoulder harnesses at each pilot station, with seat belts required only in turbine aircraft",
   "One approved seat belt at the pilot station plus a restraint net over the hopper"
  ],
  "answer": 1,
  "explanation": "The aircraft must carry approved, properly labeled seat belts and shoulder harnesses for each pilot station. Both restraints are required, and the approval and labeling are part of the requirement.",
  "page": "10",
  "manual": "aerial"
 },
 {
  "id": "a1-011",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "How do state pesticide regulatory agencies determine an applicator's competency in using and handling pesticides?",
  "choices": [
   "Through written examinations",
   "Through supervised field demonstrations witnessed by a state inspector",
   "By reviewing the applicant's logged agricultural flight hours",
   "By interviewing the applicant at the state lead agency office"
  ],
  "answer": 0,
  "explanation": "State pesticide regulatory agencies use written examinations to judge competency in using and handling pesticides. The general standards tested there are covered by the National Pesticide Applicator Certification Core Manual, and states may offer additional preparation materials.",
  "page": "11",
  "manual": "aerial"
 },
 {
  "id": "a1-012",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "How must a state's applicator competency standards compare with the federal regulations?",
  "choices": [
   "They may fall below the federal standards where a state has few aerial applicators",
   "They must conform to the federal regulations at a minimum",
   "They must match the federal standards exactly, with nothing added",
   "They take the place of the federal standards once the EPA approves the program"
  ],
  "answer": 1,
  "explanation": "State competency standards have to conform to the federal regulations as a floor. A state may go beyond that floor, including requiring examinations in extra use categories, but it cannot set a lower bar.",
  "page": "11",
  "manual": "aerial"
 },
 {
  "id": "a1-013",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "The safety-factors standard for certified applicators covers pesticide storage and handling, including which precaution?",
  "choices": [
   "Keeping every product in a locked room that is mechanically ventilated to the outside",
   "Keeping pesticides and used containers out of the reach of children",
   "Holding no more than a single season's supply of any product on hand",
   "Storing liquid concentrates below 40 degrees F so they do not separate"
  ],
  "answer": 1,
  "explanation": "The safety-factors standard covers proper identification, storage, transport, handling, mixing, and disposal of pesticides and used containers, and it specifically includes precautions that keep children from gaining access to pesticides and pesticide containers.",
  "page": "11",
  "manual": "aerial"
 },
 {
  "id": "a1-014",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Knowing the proper procedures for diluting pesticide concentrates is a requirement of which kind?",
  "choices": [
   "A requirement of the local pesticide regulatory agency",
   "An EPA general standard for certified applicators",
   "An FAA requirement for agricultural aircraft operators",
   "A provision of the federal Worker Protection Standard"
  ],
  "answer": 1,
  "explanation": "Correct dilution of concentrates is part of the pesticide knowledge required by the EPA general standards of competency for certified applicators, alongside knowing pesticide types, formulations, compatibility, synergism, persistence, toxicity, residues, and the factors behind pesticide resistance.",
  "page": "12",
  "manual": "aerial"
 },
 {
  "id": "a1-015",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Under the application-techniques standard, what must an applicator demonstrate in addition to choosing the correct technique for a situation?",
  "choices": [
   "How to obtain written waivers from every downwind landowner before spraying",
   "How to prevent drift and pesticide loss into the environment",
   "How to rebuild worn nozzles and pumps without leaving the field",
   "How to calculate a return on investment for each application made"
  ],
  "answer": 1,
  "explanation": "The application-techniques standard requires proper application methods for the various formulations and solutions, selection of the right technique for a given situation, and a demonstrated ability to prevent drift and pesticide loss into the environment.",
  "page": "12",
  "manual": "aerial"
 },
 {
  "id": "a1-016",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "What may a state require of an applicator in addition to the general standards of competency?",
  "choices": [
   "A second Class II medical examination administered by a state-approved physician",
   "Examinations in extra use categories such as vector control or forest pest control",
   "An annual check ride flown with a state pesticide inspector aboard the aircraft",
   "Registration of the pilot's aircraft with the state lead agency each season"
  ],
  "answer": 1,
  "explanation": "States may require certification examinations in categories over and above the general standards. Those categories track particular pesticide uses, such as agricultural pest control, rights-of-way vegetation control, vector control, and forest pest control.",
  "page": "12",
  "manual": "aerial"
 },
 {
  "id": "a1-017",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "A pesticide label refers the applicator to an endangered species area protection map. What is that map's legal standing?",
  "choices": [
   "It is advisory guidance the applicator may weigh or disregard",
   "It becomes part of the pesticide labeling and must be followed",
   "It applies only where the state has adopted it by its own rule",
   "It overrides the label's use directions inside the mapped area"
  ],
  "answer": 1,
  "explanation": "Documents a label refers to, such as endangered species area protection maps or the Worker Protection Standard provisions at 40 CFR part 170, become part of the pesticide labeling. The label and its associated labeling are legal documents whose directions and restrictions bind the applicator.",
  "page": "12",
  "manual": "aerial"
 },
 {
  "id": "a1-018",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "A product's label prohibits aerial application. May it be applied by air if it is tank-mixed with a product approved for aerial use?",
  "choices": [
   "No, the prohibition still applies to the mixture",
   "Yes, as long as the prohibited product is the minor part of the mix",
   "Yes, if the state lead agency issues a written exemption for the job",
   "Yes, provided the labeled rate of the aerial-approved product is not exceeded"
  ],
  "answer": 0,
  "explanation": "When a label prohibits aerial application of the material, it must never be applied by air, and mixing it with pesticides that are approved for aerial application does not lift the prohibition.",
  "page": "12",
  "manual": "aerial"
 },
 {
  "id": "a1-019",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Droplet size information printed on a pesticide label for aerial use is based on which standard?",
  "choices": [
   "ASABE S-327.4",
   "ASABE S-572.1",
   "ASTM E-1620",
   "ISO 10625"
  ],
  "answer": 1,
  "explanation": "Labels that carry aerial-specific directions may give droplet size information based on ASABE S-572.1, Spray Nozzle Classification by Droplet Spectra. Such labels also commonly address allowable weather conditions, spray volume and dilution limits, drift management, sensitive area precautions, and buffer zones.",
  "page": "13",
  "manual": "aerial"
 },
 {
  "id": "a1-020",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "What does the EPA register before a pesticide may be bought or used?",
  "choices": [
   "The generic pesticide material and every product containing it",
   "The specific product, not the generic pesticide material",
   "The plant where the manufacturer formulates the product",
   "Each buyer who intends to purchase the finished product"
  ],
  "answer": 1,
  "explanation": "Manufacturers must register their products with the EPA before anyone can buy or use them, and the EPA registers specific products rather than generic pesticide materials. The evaluation behind registration protects people and the environment from ineffective or harmful chemicals.",
  "page": "13",
  "manual": "aerial"
 },
 {
  "id": "a1-021",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Who may buy, use, or supervise the use of a federal restricted-use pesticide?",
  "choices": [
   "Only certified pesticide applicators",
   "Any employee of a licensed aerial application business",
   "Anyone working under the direction of the farm's owner",
   "Any pilot who holds a current commercial pilot's license"
  ],
  "answer": 0,
  "explanation": "The EPA's registration evaluation classifies each product as restricted-use or general-use at the federal level, and only certified pesticide applicators may purchase, use, or supervise the use of a federal restricted-use pesticide.",
  "page": "13",
  "manual": "aerial"
 },
 {
  "id": "a1-022",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "A pesticide container is too small to carry all of the required label information. What does the EPA require in that case?",
  "choices": [
   "The distributor must hand the buyer a printed copy at the point of sale",
   "The registrant or manufacturer must attach additional labeling",
   "The missing information may be omitted from the smallest package sizes",
   "The information must instead appear in the product's safety data sheet"
  ],
  "answer": 1,
  "explanation": "Regulations set the format of pesticide labels and dictate what they must contain. When a container is too small for all of it, the EPA requires the registrant or manufacturer to attach extra labeling: plastic sleeves glued to the side hold packets on metal and plastic containers, and paper packages usually carry the directions under the bottom flaps.",
  "page": "13",
  "manual": "aerial"
 },
 {
  "id": "a1-023",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "A local agency requires a wider buffer area than the pesticide label does. Which requirement governs the application?",
  "choices": [
   "The label buffer, because federal labeling preempts local requirements",
   "The wider local buffer, since the most restrictive rule governs",
   "Either buffer distance, at the applicator's discretion",
   "The average of the label distance and the local distance"
  ],
  "answer": 1,
  "explanation": "States and local agencies may add restrictions on aerial application that never appear on the label, covering things like buffer areas, no-spray zones, and dilution rates. Always follow whichever requirement is most restrictive at the location being treated, and note that a local agency may even bar aerial application outright or allow only rotary-winged aircraft.",
  "page": "13",
  "manual": "aerial"
 },
 {
  "id": "a1-024",
  "section": 1,
  "sectionName": "Laws and Regulations for the Aerial Applicator Pilot",
  "question": "Which organization started the Professional Aerial Applicator's Support System (PAASS) in 1996?",
  "choices": [
   "The U.S. Environmental Protection Agency",
   "The National Agricultural Aviation Association",
   "The Federal Aviation Administration",
   "The NASDA Research Foundation"
  ],
  "answer": 1,
  "explanation": "PAASS is a drift mitigation and education project the National Agricultural Aviation Association launched in 1996. It reaches out to pilots and operators to cut agricultural aviation accidents, improve pilot safety, and reduce drift incidents, and many insurers of agricultural aviators require the training as a condition of insurability.",
  "page": "13",
  "manual": "aerial"
 },
 {
  "id": "a2-001",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Why does an aerial application operation need written procedures for securing its aircraft, ground equipment, and pesticide materials whenever they are idle?",
  "choices": [
   "To keep people without authorization from gaining access to them",
   "To protect the equipment from weather damage during the off-season",
   "To satisfy the insurance carrier's annual equipment inspection requirement",
   "To keep the pesticide inventory records accurate between applications"
  ],
  "answer": 0,
  "explanation": "Safety awareness across the whole operation protects employees, the public, and the environment, and that starts with procedures that secure the aircraft, ground equipment, and pesticide materials when they are not in use so that unauthorized people cannot reach them.",
  "page": "17",
  "manual": "aerial"
 },
 {
  "id": "a2-002",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Why are curious children treated as a security concern at an aerial application facility?",
  "choices": [
   "They may trespass to inspect the aircraft when no company staff are present",
   "They are legally considered bystanders whose exposure must be reported to the state",
   "They often live in housing built along the ends of agricultural airstrips",
   "They can be persuaded by others to carry pesticide containers off the property"
  ],
  "answer": 0,
  "explanation": "Some people who gain access to a facility simply do not know the hazards of a pesticide operation. Children attracted to aircraft and other pesticide equipment may trespass to look it over while company personnel are away, which is why the site itself has to be secured.",
  "page": "17",
  "manual": "aerial"
 },
 {
  "id": "a2-003",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "What condition must every person taking part in an aerial application operation meet before work begins?",
  "choices": [
   "Well rested, alert, and free of alcohol and drugs",
   "Certified as an applicator and supervised directly by the pilot",
   "Examined by a physician at the start of each spray season",
   "Trained in flagging and equipped with a two-way radio"
  ],
  "answer": 0,
  "explanation": "Each person involved in the application operation must be well rested, alert, and not under the influence of alcohol or drugs. Reliable communication among the pilot, the customers, and ground operations is a separate requirement.",
  "page": "18",
  "manual": "aerial"
 },
 {
  "id": "a2-004",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which measure is described as one of the most fundamental security needs of a pesticide operation?",
  "choices": [
   "Keeping intruders out of the areas used for pesticide storage",
   "Storing all aircraft keys in a locked box inside the pilot's personal vehicle",
   "Photographing and logging every visitor who comes onto the property",
   "Reporting each incoming pesticide shipment to the local sheriff's department"
  ],
  "answer": 0,
  "explanation": "The most basic security need is keeping intruders out of pesticide storage areas. Locks, fencing, lighting, detection systems, and inventory limits all serve that goal.",
  "page": "18",
  "manual": "aerial"
 },
 {
  "id": "a2-005",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which practice is an accepted way to keep an intruder from flying an application aircraft?",
  "choices": [
   "Installing a hidden electrical system shut-off switch",
   "Fueling the aircraft only right before each planned flight",
   "Parking the aircraft where it stays visible from the public road",
   "Taking the pesticide tank off the aircraft at the end of the day"
  ],
  "answer": 0,
  "explanation": "Accepted methods of preventing unauthorized flight include hidden electrical shut-off switches, parking disabled vehicles in front of and behind the aircraft, removing batteries, locking propellers or rotors, and disabling the engines of aircraft that are not in use.",
  "page": "18",
  "manual": "aerial"
 },
 {
  "id": "a2-006",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "You notice unusual requests for information about your operation's pesticides and aircraft. Who should hear about it?",
  "choices": [
   "A local law enforcement agency and the FBI, right away",
   "The state pesticide regulatory agency in the next quarterly report",
   "The pesticide manufacturer's product security department",
   "The Federal Aviation Administration within thirty days"
  ],
  "answer": 0,
  "explanation": "Suspicious behavior, irregular circumstances, or unusual requests for information must be reported immediately to a local law enforcement agency and to the FBI. A security breach itself calls for an immediate call to the local police or sheriff's department.",
  "page": "19",
  "manual": "aerial"
 },
 {
  "id": "a2-007",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Besides accidents, which events must an operation's emergency response procedures plan for?",
  "choices": [
   "Vandalism, burglary, arson, bomb threats, and terrorist activity",
   "Grounding of the fleet by a manufacturer's airworthiness directive",
   "Cancellation of a pesticide product's registration in mid-season",
   "Sudden loss of the operation's liability insurance coverage"
  ],
  "answer": 0,
  "explanation": "Emergency response procedures tell the manager and employees how to respond and whom to contact. Beyond accidents, those plans must cover vandalism, burglary, arson, bomb threats aimed at the operation, and possible widespread terrorist activity involving the equipment or pesticides.",
  "page": "19",
  "manual": "aerial"
 },
 {
  "id": "a2-008",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which applicants has an operation the strongest reason to screen with a background check before hiring?",
  "choices": [
   "Those who will have access to secure areas such as pesticide storage",
   "Those who will fly aircraft over congested areas during applications",
   "Those who will handle customer billing and the operation's business records",
   "Those who will supervise the seasonal flagging crew in the field"
  ],
  "answer": 0,
  "explanation": "Background checks are a useful employee selection tool for people who will have access to secure areas, especially where pesticides are stored. Hiring also has to confirm that handlers hold all the training needed to work with pesticides safely.",
  "page": "19",
  "manual": "aerial"
 },
 {
  "id": "a2-009",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which employee of an aerial application operation counts as a pesticide handler under the Worker Protection Standard?",
  "choices": [
   "One who cleans equipment that may hold pesticide residues",
   "One who drives the ground crew out to the airstrip each morning",
   "One who keeps the operation's application records and billing files",
   "One who negotiates the work orders with growers and property managers"
  ],
  "answer": 0,
  "explanation": "A handler is anyone who mixes, loads, transfers, or applies pesticides; who maintains, services, repairs, cleans, or handles equipment that may hold residues or has been used in mixing or application; or who works with opened containers, including containers emptied but not rinsed.",
  "page": "19",
  "manual": "aerial"
 },
 {
  "id": "a2-010",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Handler training on decontamination has to cover which washing step at the end of the pesticide handling exposure period?",
  "choices": [
   "A thorough shower with soap and warm water",
   "Rinsing the hands and forearms under cold running water",
   "Wiping exposed skin down with disposable alcohol towelettes",
   "Changing into clean coveralls without needing to bathe"
  ],
  "answer": 0,
  "explanation": "Routine and emergency decontamination training includes spill cleanup and the need to shower thoroughly with soap and warm water once the pesticide handling exposure period ends.",
  "page": "20",
  "manual": "aerial"
 },
 {
  "id": "a2-011",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Training on the health hazards of the pesticides employees handle must address which effects?",
  "choices": [
   "Acute, chronic, and delayed effects, plus sensitization",
   "Only the acute effects that appear within the first day",
   "Only effects that appear in the product's safety data sheet",
   "Chronic effects seen in laboratory animals but not in people"
  ],
  "answer": 0,
  "explanation": "Handlers must understand the health hazards of the products they work with, including acute and chronic effects, delayed effects, and sensitization, as those hazards are identified in the pesticide product labeling.",
  "page": "20",
  "manual": "aerial"
 },
 {
  "id": "a2-012",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which right must pesticide handler training explain to employees?",
  "choices": [
   "The right to be protected against retaliation for exercising their rights",
   "The right to refuse any assignment that involves restricted-use pesticides",
   "The right to paid time off following a day of pesticide handling work",
   "The right to select whichever personal protective equipment they prefer"
  ],
  "answer": 0,
  "explanation": "Handler training must cover employee rights: to personally receive information about the pesticides they may be exposed to, to have their physician or employee representative receive that information, and to be protected against retaliatory action for exercising any of those rights.",
  "page": "21",
  "manual": "aerial"
 },
 {
  "id": "a2-013",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "How often do federal Worker Protection Standard rules require pesticide handlers to be trained, at a minimum?",
  "choices": [
   "Every five years",
   "Every year",
   "Every two years",
   "Every three years"
  ],
  "answer": 0,
  "explanation": "Federal WPS regulations set a minimum of once every five years for handler training, and training must happen before any pesticide handling activity. Individual states may require it more often.",
  "page": "21",
  "manual": "aerial"
 },
 {
  "id": "a2-014",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which employees are exempt from the Worker Protection Standard pesticide handler training requirement?",
  "choices": [
   "Those who are certified pesticide applicators",
   "Those who handle pesticides fewer than thirty days a year",
   "Those who work only with general-use pesticide products",
   "Those working under the direct supervision of a certified applicator"
  ],
  "answer": 0,
  "explanation": "Employees certified as pesticide applicators do not have to take the WPS handler training. Everyone else must be trained before performing any handling activity, and at least once every five years thereafter.",
  "page": "21",
  "manual": "aerial"
 },
 {
  "id": "a2-015",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "When are alcohol and drug use ruled out for someone handling pesticides and flying applications?",
  "choices": [
   "Before, during, or right after handling pesticides, and before or during flight operations",
   "Only during the hours in which the person is actually on duty at the loading site",
   "Only within the eight hours immediately ahead of a scheduled application flight",
   "Only while pesticide material is actually loaded aboard the aircraft"
  ],
  "answer": 0,
  "explanation": "Do not use alcohol or drugs before, during, or immediately after handling pesticides, and never before or during flight operations. These substances cause drowsiness and impair the judgment an application demands.",
  "page": "22",
  "manual": "aerial"
 },
 {
  "id": "a2-016",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "A crew member is under a high level of stress from work or personal life. What does that mean for the application?",
  "choices": [
   "That person should not take part in the aerial application operation",
   "That person may work on the ground crew but never inside the aircraft cockpit",
   "That person should be held to a shortened work day at the loading site",
   "That person should be teamed with a second crew member as an observer"
  ],
  "answer": 0,
  "explanation": "Alertness depends on enough sleep and on avoiding activities that bring on fatigue. Stress from work or personal life distracts and interferes with alertness, so a person under high stress should stay out of the aerial application operation.",
  "page": "22",
  "manual": "aerial"
 },
 {
  "id": "a2-017",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Drinking too little water while wearing personal protective equipment in hot weather can bring on heat illness that is easily confused with what?",
  "choices": [
   "Certain kinds of pesticide poisoning",
   "The early stages of hypoxia during flight",
   "An allergic reaction to a spray adjuvant",
   "The effects of breathing fuel or solvent fumes"
  ],
  "answer": 0,
  "explanation": "Insufficient water combined with wearing PPE in hot weather can produce heat-related illness whose signs mimic some kinds of pesticide poisoning. Early symptoms include tiredness, weakness, headache, sweating, nausea, dizziness, and fainting.",
  "page": "22",
  "manual": "aerial"
 },
 {
  "id": "a2-018",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which local restrictions may apply to the pesticide material named on a work order?",
  "choices": [
   "Time of use, application height, buffer zones, and limits near sensitive crops",
   "Maximum aircraft gross weight, minimum runway length, and aircraft registration",
   "Pilot flight-hour limits, mandatory rest periods, and second-pilot requirements",
   "Required spray tank size, minimum boom pressure, and approved pump models"
  ],
  "answer": 0,
  "explanation": "Some materials carry local restrictions on time of use, height of application, prohibitions where sensitive crops are nearby, and required buffer zones. State or local pesticide regulatory agencies can tell you about additional restrictions.",
  "page": "22",
  "manual": "aerial"
 },
 {
  "id": "a2-019",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "An aircraft flown over congested areas must have had a 100-hour or annual inspection within what interval?",
  "choices": [
   "The preceding 100 hours of time in service",
   "The preceding 50 hours of time in service",
   "The preceding 200 hours of time in service",
   "The preceding twelve calendar months, regardless of hours"
  ],
  "answer": 0,
  "explanation": "Any aircraft operated over congested areas must have had a 100-hour or annual inspection by an authorized person within the preceding 100 hours of time in service, or have been inspected under an approved progressive inspection system.",
  "page": "23",
  "manual": "aerial"
 },
 {
  "id": "a2-020",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "What is a congested area for purposes of aerial application inspection requirements?",
  "choices": [
   "A populated area where a crash or a dumped load is more likely to hurt people or property",
   "Any area that lies within five miles of a public-use airport or heliport",
   "A field bordered on every side by trees, power lines, or other flight obstacles",
   "An airstrip that is shared by more than one aerial application business"
  ],
  "answer": 0,
  "explanation": "Congested areas are populated areas where the chance of personal injury or property damage is greater if the aircraft crashes or if the pilot has to dump the pesticide load. Flying over them triggers the 100-hour or annual inspection requirement.",
  "page": "23",
  "manual": "aerial"
 },
 {
  "id": "a2-021",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "While inspecting the dispersal system after winter storage you find seepage around the pump housing. What does that indicate?",
  "choices": [
   "A leaking gasket or loose connections",
   "A boom operating above its rated pressure",
   "A worn or partly plugged nozzle screen",
   "Water contamination in the hydraulic fluid"
  ],
  "answer": 0,
  "explanation": "After winter storage the dispersal system gets a careful check for wear and leaks: hoses in good condition, all fittings tightened, and seepage around the pump housing treated as a sign of a leaking gasket or loose connections.",
  "page": "23",
  "manual": "aerial"
 },
 {
  "id": "a2-022",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which supplies should an operation keep on hand so that a breakdown does not shut work down?",
  "choices": [
   "Nozzles, hoses, fittings, drive belts, fuel, and lubricants",
   "A duplicate GPS unit together with a spare aircraft radio",
   "A full set of replacement propellers, wheels, and tires",
   "An extra pesticide load for each crop on the work order"
  ],
  "answer": 0,
  "explanation": "Critical spare parts and supplies such as nozzles, hoses, fittings, drive belts, fuel, and lubricants stay in stock, and anything used during a breakdown is replaced so the operation is ready next time. Equipment failures delay applications and disrupt scheduling.",
  "page": "23",
  "manual": "aerial"
 },
 {
  "id": "a2-023",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which ability must an application pilot have in relation to the aircraft's maximum legal weight?",
  "choices": [
   "Safely maneuvering the aircraft in normal flight when it is loaded to that weight",
   "Working out the weight of every load without the use of a scale at the strip",
   "Cutting the load by ten percent whenever air temperature is high",
   "Turning down any load heavier than three quarters of that weight"
  ],
  "answer": 0,
  "explanation": "A pilot must be able to maneuver the aircraft safely under normal flight conditions when it is loaded to its maximum legal weight, and must also be capable of the emergency maneuvers that common emergency situations call for.",
  "page": "24",
  "manual": "aerial"
 },
 {
  "id": "a2-024",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Why must an application pilot be able to tell one crop from another from the air?",
  "choices": [
   "To be certain the site being treated is the correct one",
   "To judge the growth stage and adjust the application rate",
   "To estimate how much spray the crop canopy will intercept",
   "To decide what nozzle spacing the crop canopy calls for"
  ],
  "answer": 0,
  "explanation": "Recognizing different crops from the air is how a pilot confirms the correct site is being treated. The pilot must also be able to mark out the boundaries of adjacent nontarget areas.",
  "page": "24",
  "manual": "aerial"
 },
 {
  "id": "a2-025",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "How long may a spray boom be relative to the wingspan of a fixed-wing aircraft or the rotor diameter of a helicopter?",
  "choices": [
   "No more than 75 percent of it",
   "No more than 90 percent of it",
   "No more than 50 percent of it",
   "Up to 100 percent of it"
  ],
  "answer": 0,
  "explanation": "Boom length should not exceed 75 percent of the wingspan of a fixed-wing aircraft or 75 percent of the rotor diameter of a rotary-wing aircraft. The pesticide label may also give boom type and setup requirements.",
  "page": "24",
  "manual": "aerial"
 },
 {
  "id": "a2-026",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "How should someone from the operation scout a target site before the job is accepted?",
  "choices": [
   "By ground, by air, or both",
   "By air only, so the whole field pattern is visible at once",
   "By studying aerial photographs and maps back at the office",
   "By interviewing the property operator over the telephone"
  ],
  "answer": 0,
  "explanation": "Before committing to an application, someone from the operation visits the site to find obstacles, hazards, and sensitive areas, working from the ground, from the air, or both, and then matches those observations against maps and photographs of the area.",
  "page": "25",
  "manual": "aerial"
 },
 {
  "id": "a2-027",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Charted maps of a site's hazards and sensitive areas are already on file. What still has to happen right before the application?",
  "choices": [
   "A final check for recent changes that could create new risk",
   "A pass over the field with clean water in the spray tank",
   "A written release signed by the property manager on site",
   "A call to the state agency to confirm the buffer distances"
  ],
  "answer": 0,
  "explanation": "Maps and aerial photographs of hazards and sensitive areas have to be kept current, and prior to the actual application a final check confirms nothing has changed recently in a way that would put the pilot, other people, the property, or surrounding areas at risk.",
  "page": "25",
  "manual": "aerial"
 },
 {
  "id": "a2-028",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "What can a pesticide label specify about the aircraft used to apply the product?",
  "choices": [
   "Which types of aircraft are or are not acceptable for applying it",
   "The maximum airspeed that may be flown while material is released",
   "The minimum horsepower the aircraft engine has to produce",
   "The number of flight hours the pilot is required to hold"
  ],
  "answer": 0,
  "explanation": "The label carries the legal requirements and use restrictions for the material, including designations of which type of aircraft is or is not acceptable for applying it.",
  "page": "25",
  "manual": "aerial"
 },
 {
  "id": "a2-029",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Two products are going into one tank mix and their labels disagree about mixing, PPE, and application requirements. Which directions apply?",
  "choices": [
   "The most restrictive requirement found among the labels",
   "The requirement printed on the label of the product applied at the higher rate",
   "The requirement on the label of whichever product goes into the tank first",
   "An average of the two requirements, documented on the mix sheet"
  ],
  "answer": 0,
  "explanation": "When a work order calls for a tank mix, review every product's label to confirm the products can legally be combined and are compatible, then follow the directions of whichever label carries the most restrictive requirements for application, mixing, PPE, and other factors.",
  "page": "26",
  "manual": "aerial"
 },
 {
  "id": "a2-030",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "What does a pilot do with pesticide personal protective equipment before climbing into the cockpit?",
  "choices": [
   "Take it off before entering the cockpit",
   "Keep it on for the duration of the application flight",
   "Wear it until the first spray swath has been completed",
   "Seal it in a bag and stow the bag inside the cockpit"
  ],
  "answer": 0,
  "explanation": "The pilot must have the most restrictive label-required handler PPE available for time spent outside the cockpit, and must remove that pesticide PPE before getting into the cockpit. The flight suit, safety harness, and helmet must be in good condition.",
  "page": "26",
  "manual": "aerial"
 },
 {
  "id": "a2-031",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "The label warns that the product is hazardous to foraging honey bees. How is the application handled?",
  "choices": [
   "Time it for when the bees are predictably out of the field",
   "Notify every beekeeper within a mile of the site and then spray as scheduled",
   "Cut the application rate in half and apply at the planned time",
   "Switch to a granular formulation in place of the spray material"
  ],
  "answer": 0,
  "explanation": "Check labels for warnings about foraging honey bees and other pollinating insects, and where such warnings or restrictions appear, shift the application time so it falls when those insects are most predictably not in the field being treated.",
  "page": "26",
  "manual": "aerial"
 },
 {
  "id": "a2-032",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which mixture is given as a common solution for decontaminating a spray tank?",
  "choices": [
   "One quart of household ammonia to each 25 gallons of water",
   "One gallon of household ammonia to each 25 gallons of water",
   "One quart of household bleach to each 10 gallons of water",
   "One pint of household ammonia to each 50 gallons of water"
  ],
  "answer": 0,
  "explanation": "After rinsing the tank with water, decontaminate it with an appropriate cleaning material; common cleaners are ammonia or a commercial tank cleaning product, for example one quart of household ammonia per 25 gallons of water. Run pumps and agitators and flush all hoses and booms.",
  "page": "26",
  "manual": "aerial"
 },
 {
  "id": "a2-033",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "A work order conflicts with one of the label restrictions for the product. What is the required response?",
  "choices": [
   "Delay the application until you and the property manager agree on changes",
   "Make the application as scheduled and note the conflict in the application record",
   "Let the ground crew supervisor decide how the material should be applied",
   "Apply the material at a reduced rate until the conflict has been settled"
  ],
  "answer": 0,
  "explanation": "If the work order conflicts with the safety or legal factors reviewed beforehand, hold off until you and the property manager agree on modifications that resolve it. Resist pressure to fly a high-risk job and refuse any job that is clearly illegal or out of compliance with a label.",
  "page": "27",
  "manual": "aerial"
 },
 {
  "id": "a2-034",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "A grower asks you to apply a household product such as vinegar to control a pest. What is the correct answer?",
  "choices": [
   "Refuse, because it carries no EPA registration number as a pesticide",
   "Apply it, because a product with no pesticide label carries no use restrictions",
   "Apply it only after the application is entered in the operation's records",
   "Apply it if the grower puts the request and the risk in writing"
  ],
  "answer": 0,
  "explanation": "Never apply a material for pest control that EPA has not registered as a pesticide. That bars household and similar products whose labels carry no EPA registration number, such as soaps, spices, and vinegars.",
  "page": "27",
  "manual": "aerial"
 },
 {
  "id": "a2-035",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Within what period must the operator hand the required application information to the grower or property manager?",
  "choices": [
   "Within 30 days of the application",
   "Within 7 days of the application",
   "Within 14 days of the application",
   "Within 60 days of the application"
  ],
  "answer": 0,
  "explanation": "Regulations require the operator to give the grower or property manager the recorded application information within 30 days of the application.",
  "page": "27",
  "manual": "aerial"
 },
 {
  "id": "a2-036",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "How long must the operator keep copies of the required records for a federally restricted-use pesticide application?",
  "choices": [
   "At least two years",
   "At least one year",
   "At least three years",
   "At least five years"
  ],
  "answer": 0,
  "explanation": "Federal regulations set a minimum of two years for keeping copies of restricted-use application records, which cover the date, product name, EPA registration number, total quantity, location, treated area size, and the applicator's name and certification number. State requirements may be longer.",
  "page": "27",
  "manual": "aerial"
 },
 {
  "id": "a2-037",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "How should wind direction be entered in the documentation for an application?",
  "choices": [
   "In degrees, read from a compass",
   "As one of the eight cardinal compass points",
   "As upwind or downwind of the target site",
   "Relative to the direction the swaths were flown"
  ],
  "answer": 0,
  "explanation": "Detailed application records note the weather at the time of application, meaning air stability, temperature, humidity, wind speed, and wind direction recorded in degrees using a compass, plus any weather changes during the application.",
  "page": "28",
  "manual": "aerial"
 },
 {
  "id": "a2-038",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Which emergency equipment must be aboard the application aircraft itself?",
  "choices": [
   "A first-aid kit and a working, properly labeled fire extinguisher",
   "A complete spill cleanup kit along with a supply of absorbent material",
   "An emergency eyewash bottle and a spare change of clothing",
   "A printed copy of the emergency response plan and a hard hat"
  ],
  "answer": 0,
  "explanation": "First-aid kits go in the aircraft and in the loading areas, and the aircraft must carry a working, properly labeled fire extinguisher. The complete spill cleanup kit belongs at the loading area, not in the aircraft.",
  "page": "28",
  "manual": "aerial"
 },
 {
  "id": "a2-039",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "What should be preserved from the aircraft's electronic systems once an application is finished?",
  "choices": [
   "All electronic files, including flight data and as-applied GPS maps",
   "Only the files from applications that later drew a complaint from a neighbor",
   "A single printed page summarizing the acres treated that day",
   "The swath width and spacing settings used for the job"
  ],
  "answer": 0,
  "explanation": "Save every electronic file from an application, including flight data and the as-applied map files from the GPS system, because those files document much of the information the application records are supposed to contain.",
  "page": "28",
  "manual": "aerial"
 },
 {
  "id": "a2-040",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Immediately after a forced landing or crash, what should the pilot do with the aircraft's systems?",
  "choices": [
   "Switch off the batteries and shut off the fuel line",
   "Leave the master switch on so that the radio keeps working",
   "Vent the pesticide tank before leaving the cockpit",
   "Set the parking brake and secure the flight controls"
  ],
  "answer": 0,
  "explanation": "If a crash occurs, switch off the aircraft batteries and shut off the fuel line. A pilot who is uninjured but cannot open the cockpit door should break a window open and get out as fast as possible.",
  "page": "29",
  "manual": "aerial"
 },
 {
  "id": "a2-041",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Pesticide labels must be present at the use site, but aerial applications get an exemption on what condition?",
  "choices": [
   "The pilot keeps radio contact with the ground crew and any flaggers",
   "The pilot has read each of the labels within the previous twenty-four hours",
   "The labels are kept on file at the operation's main business office",
   "The EPA registration number is written on the work order carried aloft"
  ],
  "answer": 0,
  "explanation": "Labels have to be at the use site, which takes in the area being sprayed as well as the mixing-loading site. Aerial applications are exempt from carrying them so long as the pilot maintains radio contact with the ground crew and any flaggers.",
  "page": "29",
  "manual": "aerial"
 },
 {
  "id": "a2-042",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "A hose ruptures in flight and the leaking load threatens people on the ground. What latitude do FAA regulations give the pilot?",
  "choices": [
   "Deviating from required flight patterns and other restrictions",
   "Landing on a public highway without notifying any authority",
   "Jettisoning the load into the nearest waterway or canal",
   "Exceeding the aircraft's maximum legal weight to get back sooner"
  ],
  "answer": 0,
  "explanation": "To protect the public during an equipment emergency of this kind, FAA regulations permit the pilot to deviate from required flight patterns and other restrictions. Any route flown with a leaking load should stay over areas not occupied by people or animals.",
  "page": "29",
  "manual": "aerial"
 },
 {
  "id": "a2-043",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Concentrated pesticide spills at the mixing-loading site. What must the ground crew do first?",
  "choices": [
   "Keep anyone from being exposed to the material",
   "Contain the spill with absorbent material from the kit",
   "Photograph the spill for the operation's records",
   "Telephone the product manufacturer's emergency hotline"
  ],
  "answer": 0,
  "explanation": "The ground crew's first step is preventing any human exposure. Only then do they control, contain, and clean up the spill or leak to stop further contamination of the mixing-loading area, using the spill cleanup kit kept there at all times.",
  "page": "29",
  "manual": "aerial"
 },
 {
  "id": "a2-044",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "What is the legal status of applying a pesticide in a way that exposes people, livestock, or vehicles to the spray or dust?",
  "choices": [
   "Illegal",
   "Permitted when the product is general-use",
   "Permitted when the exposure was unintentional",
   "Allowed if those exposed are notified afterward"
  ],
  "answer": 0,
  "explanation": "It is illegal to apply any pesticide in a manner that exposes people, livestock, vehicles, and other objects to the spray or dust. Farm workers, joggers, and trespassers often do not recognize the hazard until the aircraft is overhead.",
  "page": "30",
  "manual": "aerial"
 },
 {
  "id": "a2-045",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "Midway through an application the wind shifts toward an area where people are present. What does the plan call for?",
  "choices": [
   "Delaying or stopping the application",
   "Reducing boom pressure to produce larger droplets",
   "Flying lower and finishing the remaining swaths quickly",
   "Moving to the upwind end of the field and continuing"
  ],
  "answer": 0,
  "explanation": "The plan must include communication between pilot and ground crew to delay or stop the application whenever anyone spots people nearby, and applications proceed only when no one is in adjacent areas where they could be exposed.",
  "page": "30",
  "manual": "aerial"
 },
 {
  "id": "a2-046",
  "section": 2,
  "sectionName": "Operation and Application Safety",
  "question": "When is an up-to-date Standard Operating Procedures document most valuable to the ground crew?",
  "choices": [
   "When contact with the pilot is impaired and a procedure is in doubt",
   "When the pilot starts applying material to a site that is not on the label",
   "When the crew is deciding the best time of day to make the application",
   "When the customer disputes the price quoted on the work order"
  ],
  "answer": 0,
  "explanation": "A current SOP kept at the loading site guides ground crew members through the steps needed to comply with regulations and company policy, and it matters most when communication with the pilot is impaired and the crew disagrees or is unsure about a procedure such as mixing spray batches.",
  "page": "30",
  "manual": "aerial"
 },
 {
  "id": "a3-001",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "What is off-target pesticide movement?",
  "choices": [
   "Pesticide or residues leaving the treated site at any time by a route other than the application",
   "Pesticide moving through the air away from the target site during the application or shortly thereafter",
   "Pesticide vapor and fine droplets collecting in an inversion layer above the field during application",
   "Pesticide reaching a neighboring crop in amounts high enough to cause visible injury to the plants"
  ],
  "answer": 0,
  "explanation": "Off-target movement is pesticide or pesticide residue leaving the application site at any time and in any manner other than during the application itself, such as volatilization off treated surfaces afterward or leaching through the soil into surface or ground water. Material carried away from the target area during the application is drift, a separate problem the applicator controls while spraying.",
  "page": "33",
  "manual": "aerial"
 },
 {
  "id": "a3-002",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "The National Coalition on Drift Minimization definition of spray drift leaves out which routes of off-site movement?",
  "choices": [
   "Erosion, migration, volatility, and windblown soil particles after the application",
   "Vapors and fine droplets that concentrate in an inversion layer during the application",
   "Dust particles and droplets that leave the dispersal system before reaching the crop",
   "Droplets small enough to stay airborne until they evaporate over the treated field"
  ],
  "answer": 0,
  "explanation": "NCODM defines spray drift as pesticide moving through the air at the time of application or soon thereafter, from the target site to an off-target site, but the definition specifically excludes erosion, migration, volatility and windblown soil particles occurring after the application. Droplets, vapors and dust that leave the dispersal system before reaching the target, including material held in an inversion layer during the application, do count as drift.",
  "page": "34",
  "manual": "aerial"
 },
 {
  "id": "a3-003",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "One micron, the unit used for spray droplet diameter, equals what fraction of an inch?",
  "choices": [
   "1/2,500",
   "1/25,000",
   "1/250,000",
   "1/1,000"
  ],
  "answer": 1,
  "explanation": "A micron, also called a micrometer and written with the symbol µ, is 1/25,000 of an inch, or 0.00003937 inch. For scale, a single sheet of paper is roughly 100 microns thick.",
  "page": "34",
  "manual": "aerial"
 },
 {
  "id": "a3-004",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "About how long does a 20-micron spray droplet take to fall a vertical distance of 10 feet?",
  "choices": [
   "4 minutes",
   "11 seconds",
   "40 seconds",
   "2 seconds"
  ],
  "answer": 0,
  "explanation": "A 20-micron droplet needs roughly 4 minutes to fall 10 feet, while a 400-micron droplet covers the same distance in about 2 seconds and a 100-micron droplet in about 11 seconds. The longer a droplet stays airborne, the greater its chance of drifting off the site.",
  "page": "34",
  "manual": "aerial"
 },
 {
  "id": "a3-005",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "Apart from external conditions such as weather, what has the greatest influence on how much of an aerial spray moves off target?",
  "choices": [
   "The droplet sizes produced and the share of spray volume in a driftable size range",
   "The physical properties of the spray mixture, especially its surface tension and viscosity",
   "The total spray volume in gallons per acre delivered to the treated field",
   "The height of the crop canopy relative to the height of the aircraft"
  ],
  "answer": 0,
  "explanation": "The spray droplets themselves, and the percentage of them falling within a drift-prone size range, are the key factors affecting off-target drift, and they are among the factors an aerial applicator can control. Spray mixture properties matter, but they matter because of how they change droplet size.",
  "page": "34",
  "manual": "aerial"
 },
 {
  "id": "a3-006",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "People who study drift use the term driftable fines for droplets of what size?",
  "choices": [
   "150 to 200 microns or smaller",
   "200 to 300 microns",
   "400 microns or smaller",
   "20 microns or smaller"
  ],
  "answer": 0,
  "explanation": "Droplets classed as driftable fines are 150 to 200 microns or smaller. Drift potential falls off rapidly above about 200 microns, and research shows droplets smaller than 200 microns are very prone to drift.",
  "page": "35",
  "manual": "aerial"
 },
 {
  "id": "a3-007",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "Across what range of wind speeds do droplets of 200 microns or larger have an insignificant drift potential?",
  "choices": [
   "1 to 9 mph",
   "1 to 5 mph",
   "3 to 12 mph",
   "5 to 15 mph"
  ],
  "answer": 0,
  "explanation": "In wind speeds ranging from 1 to 9 mph, droplets 200 microns and larger have insignificant drift potential. Higher velocity winds raise the drift potential of droplets of every size.",
  "page": "35",
  "manual": "aerial"
 },
 {
  "id": "a3-008",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "What becomes of spray droplets smaller than 50 microns in diameter?",
  "choices": [
   "They stay airborne indefinitely or until they evaporate and rarely reach target surfaces",
   "They coalesce into larger droplets inside the spray cloud and then settle onto the crop canopy",
   "They settle quickly because their small mass gives them little air resistance",
   "They evaporate at the nozzle face and never become part of the spray cloud"
  ],
  "answer": 0,
  "explanation": "Droplets below 50 microns remain suspended in the air indefinitely or until they evaporate, so there is no way to keep them on or near the application site. Apart from certain vector control operations they contribute nothing to pest control, so avoid nozzles, orientations and configurations that produce them.",
  "page": "35",
  "manual": "aerial"
 },
 {
  "id": "a3-009",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "A nozzle is rated at a volume median diameter of 400 microns. What does that tell you about its spray?",
  "choices": [
   "Half the spray volume is in droplets above 400 microns and half below",
   "Four hundred microns is the smallest droplet size the nozzle will produce at any pressure",
   "The largest droplets the nozzle produces measure roughly 400 microns across",
   "Nearly all of the droplets it produces measure close to 400 microns across"
  ],
  "answer": 0,
  "explanation": "Volume median diameter splits the spray volume in half: half the total volume is in droplets larger than the VMD value and half in droplets smaller than it. VMD says nothing about how much of the volume is in droplets under 200 microns, which is the drift-prone fraction.",
  "page": "35",
  "manual": "aerial"
 },
 {
  "id": "a3-010",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "Why can adjuvants in the tank mix cause a droplet to split into smaller droplets after it forms?",
  "choices": [
   "Adjuvant molecules take time to migrate to the droplet surface, so its surface tension keeps changing",
   "Adjuvants raise the mixture's shear viscosity, so the spray sheet tears apart farther from the nozzle",
   "Adjuvants add weight to each droplet, so wind shear across the swath pulls the droplets apart",
   "Adjuvants stop the droplet from evaporating, so it stays large enough to be split by the airstream"
  ],
  "answer": 0,
  "explanation": "Surface tension is the force that holds a droplet together, and it is dynamic. Adjuvants and other additives change the normal surface tension, but their molecules need time to move to the droplet surface, so surface tension can change after the droplet has formed and a large droplet may split into smaller, drift-prone ones.",
  "page": "36",
  "manual": "aerial"
 },
 {
  "id": "a3-011",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "What does raising the pressure in the spray system do to extensional viscosity and droplet size?",
  "choices": [
   "It lowers extensional viscosity, which produces smaller droplets",
   "It raises extensional viscosity, which produces larger droplets",
   "It lowers extensional viscosity but leaves droplet size unchanged",
   "It raises extensional viscosity and makes the droplet spectrum more uniform"
  ],
  "answer": 0,
  "explanation": "Extensional viscosity is the stringiness of the liquid as it stretches before pinching off into a droplet at the orifice. System pressure regulates the ejection speed of the liquid, and higher pressure lowers extensional viscosity, so the spray breaks into smaller droplets.",
  "page": "36",
  "manual": "aerial"
 },
 {
  "id": "a3-012",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "Under the ASABE spray classification color code, which color marks the medium droplet-spectrum category?",
  "choices": [
   "Blue",
   "Yellow",
   "Green",
   "Orange"
  ],
  "answer": 1,
  "explanation": "Medium is coded yellow. The eight categories of ASABE standard S-572.1 run purple for extra fine, red for very fine, orange for fine, yellow for medium, blue for coarse, green for very coarse, white for extra coarse and black for ultra coarse.",
  "page": "37",
  "manual": "aerial"
 },
 {
  "id": "a3-013",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "In describing a spray mixture, what does shear viscosity measure?",
  "choices": [
   "The liquid's resistance to flow",
   "The force holding a droplet together",
   "How far the liquid stretches before it breaks into droplets",
   "How fast the carrier evaporates out of a droplet"
  ],
  "answer": 0,
  "explanation": "Shear viscosity is a liquid's resistance to flow; thicker liquids flow more slowly than less viscous ones. The force holding a droplet together is surface tension, and the stretching of the liquid before it breaks off is extensional viscosity.",
  "page": "37",
  "manual": "aerial"
 },
 {
  "id": "a3-014",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "What limitation do reports note about some spray drift control adjuvants?",
  "choices": [
   "They lose effectiveness after being circulated through the sprayer pump",
   "They must be added to the tank before the pesticide or they will not disperse",
   "They only work in mixtures that also contain a wetting agent or a spreader",
   "They increase droplet size in oil carriers but never in water carriers"
  ],
  "answer": 0,
  "explanation": "Some drift control agents lose their effectiveness once they have been circulated through the sprayer pump, and studies show some materials sold as drift control adjuvants do not actually perform that way. They are their own class of adjuvant and should not be confused with surfactants, wetting agents, spreaders and stickers, which tend to lower dynamic surface tension and give smaller droplets.",
  "page": "37",
  "manual": "aerial"
 },
 {
  "id": "a3-015",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "Why does evaporation of spray droplets increase the drift hazard?",
  "choices": [
   "Losing carrier shrinks each droplet, and smaller droplets drift more readily",
   "Losing carrier concentrates the pesticide and makes the residue more volatile",
   "Evaporating droplets cool the surrounding air and create an inversion layer",
   "Evaporation strips the adjuvant out of the droplet before it reaches the crop"
  ],
  "answer": 0,
  "explanation": "Once a droplet is exposed to the atmosphere it begins losing water or other carrier, so it becomes smaller than it was at the nozzle, and the smaller it gets the more prone to drift it becomes. Evaporation is more rapid as air temperature increases.",
  "page": "37",
  "manual": "aerial"
 },
 {
  "id": "a3-016",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "Which change would slow the evaporation of spray droplets after they leave the nozzle?",
  "choices": [
   "Using an oil carrier instead of water",
   "Applying when the relative humidity is lower",
   "Increasing the release height above the target",
   "Applying during the warmest part of the day"
  ],
  "answer": 0,
  "explanation": "Water evaporates faster than oil carriers, so an oil carrier holds droplet size longer. Evaporation speeds up as humidity drops, as air temperature and air movement rise, and the farther the droplet has to fall from the discharge point to the target.",
  "page": "38",
  "manual": "aerial"
 },
 {
  "id": "a3-017",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "When droplet evaporation is a concern, what is usually the best time of day for an aerial application, and what condition must you still check for?",
  "choices": [
   "Early morning, watching for temperature inversions",
   "Early morning, watching for thermals rising off bare ground",
   "Early afternoon, watching for falling relative humidity",
   "Late afternoon, watching for wind shear at the nozzle face"
  ],
  "answer": 0,
  "explanation": "The coolest part of the day is best, and early morning is usually ideal because the air is generally more humid and wind speeds are often low. Temperature inversion conditions, however, may be greater during early mornings, so check for them. Avoid applying during the hot, dry periods of the day.",
  "page": "38",
  "manual": "aerial"
 },
 {
  "id": "a3-018",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "What application height above the target does the manual recommend so droplets have less distance to fall?",
  "choices": [
   "8 to 12 feet",
   "4 to 8 feet",
   "10 to 20 feet",
   "12 to 15 feet"
  ],
  "answer": 0,
  "explanation": "Keep the application height between 8 and 12 feet from the target to shorten the distance the droplets must fall and the time available for evaporation. Sprays made up of small droplets call for lower application heights still.",
  "page": "38",
  "manual": "aerial"
 },
 {
  "id": "a3-019",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "Which situation describes co-distillation of a pesticide?",
  "choices": [
   "The product leaves hot bare soil with water molecules as irrigation water evaporates rapidly",
   "The product breaks down into vapor-phase compounds when exposed to sunlight on the leaf surface",
   "The product volatilizes off treated foliage over the several days following the application",
   "The product moves down through the soil profile with water and reaches the groundwater"
  ],
  "answer": 0,
  "explanation": "Co-distillation happens where the pesticide contacts very hot surfaces, usually soil with no vegetation: even products that are not highly volatile leave the soil surface along with water molecules during the rapid evaporation right after irrigation. Fog can also pick pesticide up off the application site and carry it away.",
  "page": "38",
  "manual": "aerial"
 },
 {
  "id": "a3-020",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "When are thermals that lift small droplets and vapor away from the target most likely to develop?",
  "choices": [
   "In the afternoon as the ground heats up, especially after a cool night",
   "Overnight, when a warm layer of air caps the cooler air near the ground",
   "At dawn, when cool air off a nearby body of water moves inland",
   "Just before sunset, when the ground begins to give up its heat"
  ],
  "answer": 0,
  "explanation": "Thermals form as the ground heats up, usually in the afternoon and especially after cool night temperatures. Warm air is lighter than cool air, so air near the ground rises, and that upward movement entraps small droplets and increases the chance they drift away from the site.",
  "page": "38",
  "manual": "aerial"
 },
 {
  "id": "a3-021",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "How far above the ground may the warm air cap of a temperature inversion begin?",
  "choices": [
   "20 to 100 or more feet",
   "5 to 10 feet",
   "200 to 500 feet",
   "1,000 feet or higher"
  ],
  "answer": 0,
  "explanation": "An inversion exists when an upper layer of air is warmer than the air below it. That warm cap may start 20 to 100 or more feet above the ground and blocks the cooler air beneath it, preventing vertical air movement.",
  "page": "38",
  "manual": "aerial"
 },
 {
  "id": "a3-022",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "A column of smoke rising near the field flattens out and starts moving sideways. What does that tell you?",
  "choices": [
   "An inversion condition probably exists, so you should not apply",
   "Thermals are lifting air off the field, so droplets will rise",
   "Wind speed is above 9 mph at the planned release height",
   "Humidity is high enough to keep the droplets from evaporating"
  ],
  "answer": 0,
  "explanation": "A rising smoke column, or dust from field operations, that flattens and moves sideways or collects in one area above the ground indicates an inversion. Do not make applications during an inversion condition, because the inversion layer traps fine spray droplets. Over a wide area the National Weather Service can confirm whether an inversion is present.",
  "page": "38",
  "manual": "aerial"
 },
 {
  "id": "a3-023",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "During what part of the day do temperature inversions generally form and persist?",
  "choices": [
   "They begin before sunset and remain into the early morning",
   "They begin at midmorning and break up by early afternoon",
   "They begin after sunrise and last until the ground cools off",
   "They begin at midday and last until the wind picks up"
  ],
  "answer": 0,
  "explanation": "Inversions generally begin before sunset and remain into early morning, and they also occur near bodies of water. Because an inversion goes with calm air and very little mixing, a cloud of trapped droplets or vapor can move slowly downwind and then settle where it causes problems for people, untreated crops and other organisms.",
  "page": "39",
  "manual": "aerial"
 },
 {
  "id": "a3-024",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "Which two factors reduce the wind shear effects that turn large spray droplets into drift-prone small ones?",
  "choices": [
   "Airspeed and nozzle orientation",
   "Tank mix pH and carrier volume",
   "Wind direction and time of day",
   "Boom height and swath width"
  ],
  "answer": 0,
  "explanation": "Appropriate airspeed and proper nozzle orientation are the two factors that reduce wind shear across the nozzle. The pilot has to balance the minimum airspeed needed to cover the acreage in the time available against the maximum airspeed before wind shear starts shrinking the droplets.",
  "page": "39",
  "manual": "aerial"
 },
 {
  "id": "a3-025",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "How does a nozzle's spray angle relate to the droplet spectrum it produces?",
  "choices": [
   "Wider spray angles typically produce finer sprays",
   "Wider spray angles typically produce coarser sprays",
   "Wider spray angles give a more uniform droplet size",
   "Spray angle changes the pattern but not the droplet size"
  ],
  "answer": 0,
  "explanation": "Wider spray angles typically produce finer sprays, so one of the ways to minimize off-target drift is selecting nozzle types and orifice sizes that produce large droplets rather than reaching for a wide angle to get pattern width.",
  "page": "39",
  "manual": "aerial"
 },
 {
  "id": "a3-026",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "How should nozzles be aimed relative to the aircraft's level flight line to maintain the rated droplet size?",
  "choices": [
   "Straight back, though about 5 degrees down is acceptable",
   "Straight down, at 90 degrees to the level flight line",
   "Angled forward about 45 degrees into the airstream",
   "Angled back about 45 degrees below the flight line"
  ],
  "answer": 0,
  "explanation": "A nozzle pointed straight back along the aircraft's level flight line takes the least wind shear across its face, so it holds the rated droplet size; some research indicates a slight angle of about 5 degrees still directs the spray downward without affecting droplet size. Droplets get smaller as the nozzle is turned away from that straight-back position, and a nozzle at 90 degrees to the travel direction gives the smallest droplets of all.",
  "page": "39",
  "manual": "aerial"
 },
 {
  "id": "a3-027",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "How long may the spray boom be relative to the aircraft in order to limit drift from wing tip and rotor vortices?",
  "choices": [
   "No more than 75 percent of the wingspan or rotor diameter",
   "No more than 90 percent of the wingspan or rotor diameter",
   "No more than 65 percent of the wingspan or rotor diameter",
   "The full wingspan or rotor diameter, but never past it"
  ],
  "answer": 0,
  "explanation": "Confine boom length to no more than 75 percent of a fixed-wing aircraft's wingspan or of the rotor diameter on a rotary-wing aircraft. Nozzles carried farther out feed spray into the wing tip and rotor vortices, which pull it off target.",
  "page": "39",
  "manual": "aerial"
 },
 {
  "id": "a3-028",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "With straight stream or narrow-angle 20 to 40 degree flat fan nozzles pointed backward, what can raising the spray pressure do?",
  "choices": [
   "Produce a coarser spray, once exit velocity nears the aircraft's speed",
   "Produce a finer spray, because higher pressure always shears the droplets",
   "Leave droplet size unchanged while raising the flow rate through the nozzle",
   "Widen the spray pattern until neighboring swaths overlap excessively"
  ],
  "answer": 0,
  "explanation": "With straight stream or narrow-angle flat fan nozzles aimed backward, increasing spray pressure can actually give a coarser spray: as the liquid's exit velocity gets closer to the speed of the aircraft, the air shear effect on the spray is reduced.",
  "page": "40",
  "manual": "aerial"
 },
 {
  "id": "a3-029",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "How does the manual describe the use of untreated buffer zones during an aerial application?",
  "choices": [
   "Leave swath passes untreated inside the downwind edge and spray them when the wind reverses",
   "Leave swath passes untreated inside the upwind edge and spray them early the following morning",
   "Leave the outer edges of the field untreated for good, to shield the neighboring property",
   "Leave a swath untreated at each end of the field so the aircraft can climb without spraying"
  ],
  "answer": 0,
  "explanation": "Leave untreated buffer zones one, two or more swath passes wide inside the treated field along its downwind edges, so pesticide that drifts stays on the treated site. Treat those buffer passes later, once the wind direction has reversed and blows back into the field.",
  "page": "40",
  "manual": "aerial"
 },
 {
  "id": "a3-030",
  "section": 3,
  "sectionName": "Preventing Pesticide Drift",
  "question": "What does a smoke generator on an agricultural aircraft do for the pilot?",
  "choices": [
   "Makes air movement visible and reveals inversions below the application height",
   "Marks the previous swath reliably enough to take the place of GPS guidance",
   "Measures relative humidity and air temperature at the release height",
   "Warms the spray so that less of the carrier evaporates on the way down"
  ],
  "answer": 0,
  "explanation": "A smoke generator injects oil into the aircraft's exhaust, where it burns to make smoke, and the pilot switches it on from the cockpit. Watching the smoke shows air movement at the site, gives an estimate of off-site movement potential and relative wind speed and direction at the time of release, and identifies inversion conditions below the application height. Smoke can help locate a previous pass, but air currents make it unreliable for swath marking.",
  "page": "40",
  "manual": "aerial"
 },
 {
  "id": "a4-001",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What is the chief operational limitation of a fixed-wing aircraft used for pesticide application?",
  "choices": [
   "It needs a designated landing area, which may not be nearby",
   "It carries lighter loads than a rotary-wing aircraft",
   "It must be flown at reduced speed whenever a spray boom is mounted under the wings",
   "It cannot be fitted with equipment for applying dry granular formulations"
  ],
  "answer": 0,
  "explanation": "Fixed-wing application aircraft are fast, maneuverable, and carry heavier loads than helicopters, but they need a designated landing area that is not always close to the site being treated.",
  "page": "43",
  "manual": "aerial"
 },
 {
  "id": "a4-002",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Because a rotary-wing aircraft needs no runway for takeoff or landing, what does that allow the ground crew to do?",
  "choices": [
   "Load the aircraft at or near the application site",
   "Handle concentrated pesticide products without protective equipment",
   "Skip the pattern testing normally done before an application",
   "Fill the spray tank only while the aircraft engine is shut down"
  ],
  "answer": 0,
  "explanation": "Helicopters are more maneuverable but slower than fixed-wing aircraft and can work over a range of speeds in almost any area without a runway, so loading operations can be set up at or near the treatment site.",
  "page": "43",
  "manual": "aerial"
 },
 {
  "id": "a4-003",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Which group of materials is corrosion resistant and therefore suitable for pesticide dispersal system components?",
  "choices": [
   "Steel, iron, and cast aluminum",
   "Stainless steel, fiberglass, and polypropylene",
   "Aluminum, galvanized steel, and high-density polyethylene",
   "Iron, bronze, and anodized aluminum"
  ],
  "answer": 1,
  "explanation": "Stainless steel, fiberglass, polyethylene, and polypropylene do not corrode, while steel, iron, and aluminum do. Because many pesticide materials are corrosive, build the dispersal system only from the non-corroding materials, and remember the rest of the aircraft still needs cleaning and protection.",
  "page": "44",
  "manual": "aerial"
 },
 {
  "id": "a4-004",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Why is it hazardous to let acidic pesticide liquids stand in steel or iron parts of a dispersal system?",
  "choices": [
   "The reaction can produce highly explosive hydrogen gas",
   "The reaction neutralizes the acid and makes the pesticide ineffective",
   "Dissolved metal enters the spray and burns the treated foliage",
   "The acid leaves a scale that plugs the nozzle check valves shut"
  ],
  "answer": 0,
  "explanation": "Acidic liquids react with steel or iron to generate highly explosive hydrogen gas, which is one more reason to use only corrosion resistant components in the dispersal system.",
  "page": "44",
  "manual": "aerial"
 },
 {
  "id": "a4-005",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What is the job of the spray pump in an aircraft liquid dispersal system?",
  "choices": [
   "It maintains the pressure needed for uniform flow and atomization",
   "It meters the exact dose of pesticide leaving each nozzle orifice",
   "It filters sediment out of the spray mixture before it reaches the boom",
   "It sets the swath width by choosing which boom section is open"
  ],
  "answer": 0,
  "explanation": "The pump holds pressure in the system so flow volume stays uniform and the nozzles atomize properly. On many aircraft the same pump also drives the tank agitation that keeps the mixture in suspension.",
  "page": "44",
  "manual": "aerial"
 },
 {
  "id": "a4-006",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What pressure range do the centrifugal pumps commonly used on application aircraft usually operate in?",
  "choices": [
   "10 to 70 psi",
   "40 to 100 psi",
   "70 to 150 psi",
   "2 to 8 psi"
  ],
  "answer": 0,
  "explanation": "Aircraft centrifugal pumps move high volumes, up to 200 gallons per minute or more depending on pump size, at low pressure that usually falls between 10 and 70 psi. They typically turn between 1,000 and 5,000 rpm.",
  "page": "45",
  "manual": "aerial"
 },
 {
  "id": "a4-007",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What is the drawback of a fiberglass spray tank whose surface has been scratched or abraded?",
  "choices": [
   "It absorbs pesticide liquid that can contaminate later loads",
   "It loses strength and can split open during a hard landing",
   "It can no longer be repaired and the whole tank must be replaced",
   "It builds a static charge that can ignite solvent-based carriers"
  ],
  "answer": 0,
  "explanation": "Fiberglass is the most popular tank material because it is light, but a scratched or abraded surface soaks up pesticide liquid that may contaminate future tank loads. Scratches, small cracks, and punctures in fiberglass are themselves easy to repair, unlike cracks in polypropylene or polyethylene tanks.",
  "page": "45",
  "manual": "aerial"
 },
 {
  "id": "a4-008",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What do interior baffles in an aircraft spray tank accomplish?",
  "choices": [
   "They limit sloshing so load shift does not upset stability",
   "They keep wettable powders suspended without any pump flow",
   "They break up the foam that forms while the tank is filled",
   "They divide the tank so the left and right booms draw separately"
  ],
  "answer": 0,
  "explanation": "Baffles inside the tank hold down the sloshing of liquid in flight and dampen the effect that a shifting load has on the aircraft's stability. Keeping the mixture uniform is the agitation system's job, not the baffles'.",
  "page": "45",
  "manual": "aerial"
 },
 {
  "id": "a4-009",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Why must an aircraft spray tank have a vent that passes a large enough volume of air?",
  "choices": [
   "To keep a vacuum from slowing or stopping the flow of liquid",
   "To let the pump build up boom pressure faster on a turnaround",
   "To keep the spray mixture from separating during a long ferry",
   "To equalize pressure between the two halves of the spray boom"
  ],
  "answer": 0,
  "explanation": "Without enough venting, a vacuum forms as the tank empties and slows or stops normal flow through the nozzles or the bottom dump port. Good ventilation also keeps hazardous fumes, explosive gases, and dusts from building up in the tank.",
  "page": "45",
  "manual": "aerial"
 },
 {
  "id": "a4-010",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What is hydraulic agitation of the mixture in an aircraft spray tank?",
  "choices": [
   "Routing part of the pump output back into the tank",
   "Turning a propeller inside the tank with an outside power source",
   "Bubbling compressed air up through the spray mixture",
   "Drawing the mixture through a venturi built into the spray boom"
  ],
  "answer": 0,
  "explanation": "Hydraulic agitation recirculates all or part of the pump's output back into the tank, usually through the boom valve that diverts flow away from the boom. It requires a pump with enough capacity, and the returning material enters near the bottom of the tank so the mixture cannot settle.",
  "page": "46",
  "manual": "aerial"
 },
 {
  "id": "a4-011",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What is bridging in an aircraft hopper carrying a fine dry pesticide?",
  "choices": [
   "A packed top layer with voids beneath it that makes flow uneven",
   "A crust of absorbed moisture that seals the metering gate shut",
   "A static charge that makes granules cling to the walls of the hopper",
   "A partial blockage where two ducts join inside the spreader body"
  ],
  "answer": 0,
  "explanation": "Fine dry materials of 60 mesh and above can pack or cake on the top surface of the load in flight. That crust leaves voids underneath it, which makes the dry material feed out of the hopper unevenly. Mechanical agitation is used to prevent it.",
  "page": "46",
  "manual": "aerial"
 },
 {
  "id": "a4-012",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What does a higher mesh number tell you about a filter screen in the dispersal system?",
  "choices": [
   "The screen is finer, since mesh counts openings per inch",
   "The screen is coarser, since mesh gives the width of each opening",
   "The screen withstands more pressure before it collapses inward",
   "The screen is woven from a heavier gauge of stainless wire"
  ],
  "answer": 0,
  "explanation": "Filter screens run from 10 to 200 mesh. A 10-mesh screen has 10 openings per inch, so the larger the mesh number the finer the screen. Screens need daily cleaning during spray operations, plus a cleaning any time flow volume or pressure suggests clogging.",
  "page": "46",
  "manual": "aerial"
 },
 {
  "id": "a4-013",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Where does the line screen belong when the dispersal system is driven by a centrifugal pump?",
  "choices": [
   "On the output side, between the pump and the spray boom",
   "On the suction side, in the line between the tank and the pump",
   "Inside the tank, right at the mouth of the suction line",
   "At the removable end cap of each spray boom section"
  ],
  "answer": 0,
  "explanation": "With a centrifugal pump the line screen goes downstream of the pump, between the pump and the boom. Other pump types take the line screen on the suction side, where it stops sand and other foreign particles from damaging the pump and from making nozzle check valves leak.",
  "page": "46",
  "manual": "aerial"
 },
 {
  "id": "a4-014",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What diameter should main piping and fittings be on a system that has to apply high volumes of liquid?",
  "choices": [
   "Up to 3 inches",
   "Up to 1 inch",
   "About one half inch",
   "Between 4 and 6 inches"
  ],
  "answer": 0,
  "explanation": "High-volume liquid work calls for main piping and fittings as large as 3 inches. Smaller lines of roughly 1 to 1-1/2 inch serve low-volume applications and suit rotary-wing aircraft, whose slower speeds permit lower flow volumes. Whatever the size, the piping has to handle the maximum pump volume.",
  "page": "47",
  "manual": "aerial"
 },
 {
  "id": "a4-015",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What does the suck-back feature of a positive shut-off valve do when you stop the spray?",
  "choices": [
   "It puts a slight negative pressure on the liquid in the boom",
   "It closes each nozzle by holding boom pressure above 40 psi",
   "It empties the boom completely back into the pesticide tank",
   "It sends the pump's entire output through the agitator line"
  ],
  "answer": 0,
  "explanation": "The valve applies a low negative pressure to the boom liquid, and the system pressure gauge registers it. That negative pressure helps the nozzle check valves stop dripping, and it has to stay light enough that the boom does not empty, or refilling will delay the start of the next pass.",
  "page": "47",
  "manual": "aerial"
 },
 {
  "id": "a4-016",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Where should spray booms be mounted on a fixed-wing aircraft to place the nozzles in cleaner airflow?",
  "choices": [
   "Behind and below the trailing edge of the wings",
   "Ahead of and above the leading edge of the wings",
   "Under the fuselage, inboard of both wing roots",
   "Level with the wing chord line at about mid-span"
  ],
  "answer": 0,
  "explanation": "Hanging the boom behind and below the wing's trailing edge keeps nozzles out of disturbed air, and research shows this lower position is likely to give a better deposition pattern. Some setups add drop pipes from the boom for the same reason. Attach booms securely so they cannot bounce.",
  "page": "47",
  "manual": "aerial"
 },
 {
  "id": "a4-017",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "How long should an effective spray boom be compared with the wingspan or the main rotor diameter?",
  "choices": [
   "About 75 percent of it",
   "About 50 percent of it",
   "About 90 percent of it",
   "The full span or diameter"
  ],
  "answer": 0,
  "explanation": "Booms that run roughly 75 percent of the wingspan of a fixed-wing aircraft or of the main rotor diameter of a helicopter work best. A longer boom lets wing tip or rotor vortices capture much of the output of the tip nozzles, which distorts the spray pattern and feeds drift.",
  "page": "48",
  "manual": "aerial"
 },
 {
  "id": "a4-018",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Why are air bleed lines installed at the ends of a spray boom that has end caps?",
  "choices": [
   "Trapped pressurized air keeps spray flowing after the valve closes",
   "Trapped air prevents the outermost nozzles from ever filling",
   "They allow sediment to be flushed without removing the end caps",
   "They equalize pressure between the right and left boom sections"
  ],
  "answer": 0,
  "explanation": "End caps make flushing easy but keep nozzles from sitting at the very ends of the boom. Air trapped and pressurized between the cap and the outermost nozzle keeps spray coming for a short while after the spray valve closes. Bleed lines from each boom end feed a nozzle near that end, which receives fluid only from the bleed line.",
  "page": "48",
  "manual": "aerial"
 },
 {
  "id": "a4-019",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What does an accurate flow meter in the spraying system monitor?",
  "choices": [
   "The volume of liquid discharged through the nozzles",
   "The droplet size spectrum the nozzle tips are producing",
   "The amount of spray material still left in the tank",
   "The ground speed of the aircraft along the swath"
  ],
  "answer": 0,
  "explanation": "The flow meter tracks the discharge volume of liquid moving from the pump out through the nozzles, which is how it warns you of clogged nozzles, leaks, and pump malfunction.",
  "page": "48",
  "manual": "aerial"
 },
 {
  "id": "a4-020",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "How does a check valve in the spraying system decide whether to start or stop the liquid flow?",
  "choices": [
   "A spring-loaded part responds to a preset minimum pressure",
   "A thermostat opens the valve once the liquid warms up",
   "A float closes the valve as the level in the tank drops",
   "A solenoid opens the valve on a signal from the GPS light bar"
  ],
  "answer": 0,
  "explanation": "Check valves are spring loaded and use a diaphragm, a ball, or a needle and seat that starts or stops flow depending on whether system pressure is above a preset minimum. Inspect valves often, since sediment or debris can keep them from shutting fully or can restrict flow through them.",
  "page": "49",
  "manual": "aerial"
 },
 {
  "id": "a4-021",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Nozzles are the primary means of controlling which three characteristics of an aerial application?",
  "choices": [
   "Application volume, droplet size, and spray pattern",
   "Swath width, ground speed, and boom pressure",
   "Tank agitation, flow volume, and application height",
   "Droplet size, application height, and swath width"
  ],
  "answer": 0,
  "explanation": "The nozzles set the application volume, the droplet size, and the spray pattern, which together govern the deposit and any off-target movement. Nozzles must be run inside the pressure and flow volume ranges their manufacturer specifies, matched to the aircraft's speed.",
  "page": "49",
  "manual": "aerial"
 },
 {
  "id": "a4-022",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "An aerial application is made at 3 gallons per acre. Which volume category is that?",
  "choices": [
   "Low volume",
   "Conventional",
   "Ultra low volume",
   "High volume"
  ],
  "answer": 0,
  "explanation": "Aerial application volumes divide into conventional at 5 to 15 or more gallons per acre, low volume at 0.5 to 5 gallons per acre, and ultra low volume at less than 0.5 gallons per acre. Three gallons per acre sits in the low volume range.",
  "page": "49",
  "manual": "aerial"
 },
 {
  "id": "a4-023",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What do straight stream nozzles oriented straight back produce compared with other nozzle types?",
  "choices": [
   "The largest droplets and the lowest drift",
   "The finest droplets and the widest pattern",
   "The most uniform droplets at any airspeed",
   "A hollow cone pattern with a very coarse edge"
  ],
  "answer": 0,
  "explanation": "Aimed straight back, straight stream nozzles often give the biggest droplets and the least drift of any type, and they can make large droplets at higher airspeeds when stream flow volume is matched to the airspeed. At very high speeds, though, those large droplets can shatter into driftable fines.",
  "page": "50",
  "manual": "aerial"
 },
 {
  "id": "a4-024",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Which flat fan tip angle is typically recommended for the higher speeds of fixed-wing aircraft?",
  "choices": [
   "40 degrees",
   "80 degrees",
   "110 degrees",
   "25 degrees"
  ],
  "answer": 0,
  "explanation": "Fan tips are made in 25, 40, 65, 80, and 110 degree angles. Forty-degree flat fans suit the higher speeds of fixed-wing aircraft and 80-degree fans the slower speeds of helicopters. Wide angles make more drift-prone droplets, so tips producing no more than an 80-degree pattern are better for aerial work.",
  "page": "50",
  "manual": "aerial"
 },
 {
  "id": "a4-025",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "About what application volume is typical of ULV work such as mosquito abatement spraying?",
  "choices": [
   "One to a few ounces per acre",
   "About one-half gallon per acre",
   "Two to three gallons per acre",
   "About one pint per acre"
  ],
  "answer": 0,
  "explanation": "When vegetable oil carriers are used, or concentrates are applied in forestry or public health work such as mosquito abatement, ULV volumes may run around one to a few ounces per acre. Rotary atomizers handle these volumes well, as they do low volume applications.",
  "page": "50",
  "manual": "aerial"
 },
 {
  "id": "a4-026",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What two manual adjustments does the body of a variable orifice flood nozzle provide?",
  "choices": [
   "Orifice size and deflection angle",
   "Spray angle and check valve spring tension",
   "Orifice size and screen mesh",
   "Deflection angle and cylinder rotation speed"
  ],
  "answer": 0,
  "explanation": "The nozzle body is adjustable for orifice size and for deflection angle. Four orifices can be selected plus an off position, orifice size and pressure set the flow volume, and the spray strikes an adjustable deflector that you set for fine, medium, or coarse droplets.",
  "page": "51",
  "manual": "aerial"
 },
 {
  "id": "a4-027",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What is the working part of a rotary atomizer?",
  "choices": [
   "A screen mesh cylinder spinning around the nozzle orifice",
   "A disc and core that spin the liquid before it exits",
   "A flexible orifice that widens as system pressure increases",
   "A slotted deflector plate mounted behind the nozzle tip"
  ],
  "answer": 0,
  "explanation": "A rotary atomizer is a screen mesh cylinder that rotates around the nozzle orifice, driven by its own fan or by an electric or hydraulic motor. Droplets leaving the mesh are relatively uniform in size, and the relatively large metering orifices resist clogging with concentrated suspensions.",
  "page": "51",
  "manual": "aerial"
 },
 {
  "id": "a4-028",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What swath width can a single rotary atomizer typically generate?",
  "choices": [
   "10 to 15 feet",
   "3 to 5 feet",
   "20 to 30 feet",
   "40 to 50 feet"
  ],
  "answer": 0,
  "explanation": "One rotary atomizer usually covers a swath of 10 to 15 feet, so the number of atomizers needed depends on how wide a swath you intend to treat. Uniformity also depends on droplet size and on the spacing of the nozzles.",
  "page": "51",
  "manual": "aerial"
 },
 {
  "id": "a4-029",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "At about what spray pressure do nozzle anti-drip check valves normally shut the nozzle flow off?",
  "choices": [
   "About 7 psi",
   "About 20 psi",
   "About 30 psi",
   "About 40 psi"
  ],
  "answer": 0,
  "explanation": "Anti-drip check valves use spring-loaded diaphragms, needles, or steel balls that stop the nozzle flow once spray pressure falls below a preset value, usually around 7 psi. Where a shut-off valve with suck-back is not available, a stronger spring is used so the nozzles seal at about 15 psi.",
  "page": "52",
  "manual": "aerial"
 },
 {
  "id": "a4-030",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "On a rotary-wing aircraft with an electric motor driven pump, how should the spray be started and stopped?",
  "choices": [
   "With the boom valve, leaving the pump running",
   "By switching the pump motor on and off from the cockpit",
   "By opening and closing the tank's bottom dump port",
   "By raising and lowering the pressure at the flow controller"
  ],
  "answer": 0,
  "explanation": "Never cycle the electric pump motor to start and stop spraying. Working the boom valve while the pump keeps turning lets the suck-back feature do its job and keeps hydraulic agitation going in the spray tank.",
  "page": "52",
  "manual": "aerial"
 },
 {
  "id": "a4-031",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Who is permitted to install, test, and repair DGPS equipment and components on an application aircraft?",
  "choices": [
   "An FAA-certified aircraft maintenance technician",
   "Any certified applicator who holds the aerial category",
   "The pilot in command, if the work is logged before flight",
   "A factory representative of the equipment manufacturer"
  ],
  "answer": 0,
  "explanation": "DGPS gear is navigational equipment, so like other navigational devices it must be installed, tested, and repaired by an FAA-certified aircraft maintenance technician.",
  "page": "52",
  "manual": "aerial"
 },
 {
  "id": "a4-032",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Which components make up a basic DGPS installation for precision aerial swathing?",
  "choices": [
   "Mobile receiver, GPS antenna, light bar, and computer processor",
   "Mobile receiver, flow controller, pressure gauge, and light bar",
   "GPS antenna, flow meter, mapping printer, and light bar",
   "Mobile receiver, GPS antenna, radar altimeter, and flagging unit"
  ],
  "answer": 0,
  "explanation": "A basic system carries a DGPS mobile receiver, a GPS antenna, a light bar, and a computer processor, and in some units the processor and light bar are one piece. Before buying, check that the equipment handles the DGPS service available where the aircraft operates and accepts the peripherals you want.",
  "page": "53",
  "manual": "aerial"
 },
 {
  "id": "a4-033",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "How much off-track distance does each LED on a GPS light bar usually represent?",
  "choices": [
   "2 feet",
   "10 feet",
   "1 inch",
   "1 swath width"
  ],
  "answer": 0,
  "explanation": "Each LED to the left or right of center normally stands for 2 feet of distance from the swath centerline, though the display can be set to as little as 6 inches per LED. The onboard receiver feeds the light bar about 5 updated signals per second.",
  "page": "53",
  "manual": "aerial"
 },
 {
  "id": "a4-034",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "The aircraft drifts to the left of the swath centerline and the lit sector of the light bar moves to the right. What is the correct response?",
  "choices": [
   "Steer toward the illuminated LEDs",
   "Steer away from the illuminated LEDs",
   "Hold the heading until the center LEDs relight",
   "Advance the GPS to the next swath and start over"
  ],
  "answer": 0,
  "explanation": "The light bar shifts its lit sector opposite the direction of the error, so you correct by flying toward the illuminated LEDs. The flight path is back on line when only the centermost LEDs glow.",
  "page": "53",
  "manual": "aerial"
 },
 {
  "id": "a4-035",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Besides liquid volume, pressure, flow volume, and total spray time, what else does a flow volume controller system measure and record?",
  "choices": [
   "Relative humidity",
   "Soil temperature",
   "Wind direction",
   "Droplet diameter"
  ],
  "answer": 0,
  "explanation": "Flow volume controller systems measure, compute, and record total liquid volume, liquid pressure, liquid flow volume, total spray time, and relative humidity. Feedback from the controller also builds an on-site record of how the spray boom performed.",
  "page": "54",
  "manual": "aerial"
 },
 {
  "id": "a4-036",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "During an application, what does the on-screen map produced by the aircraft's positioning system show the pilot?",
  "choices": [
   "Where the spray was turned on and off",
   "The droplet size leaving each boom section",
   "The wind speed measured at the treated field",
   "The remaining flight time on the current fuel load"
  ],
  "answer": 0,
  "explanation": "The in-flight map shows exactly where spray was switched on and off, which gives you the accuracy to split a field and fly part of it in a different direction to protect sensitive areas. These systems also define boundaries, mark hazards, and produce as-applied maps for later reference.",
  "page": "54",
  "manual": "aerial"
 },
 {
  "id": "a4-037",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "How is prop wash displacement conventionally corrected on a fixed-wing aircraft with a symmetrical nozzle arrangement?",
  "choices": [
   "Add nozzles on the right of the boom and remove them from the left",
   "Add nozzles on the left of the boom and remove them from the right",
   "Move the whole boom farther aft of the wing trailing edge",
   "Increase system pressure until the two sides deposit evenly"
  ],
  "answer": 0,
  "explanation": "Propeller rotation drives a spiral slipstream that carries spray particles from right to left under the aircraft, so deposition runs light under the right wing and heavy under the left. Adding nozzles to the right side of the boom and taking them off the left side offsets it, with the exact number and placement of nozzles worked out by trial and error.",
  "page": "54",
  "manual": "aerial"
 },
 {
  "id": "a4-038",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Which nozzles on the boom are generally the ones that need to be altered when correcting for prop wash?",
  "choices": [
   "Those within 3 to 6 feet of the fuselage",
   "Those within 3 to 6 feet of the wing tips",
   "Those in the outer quarter of each boom half",
   "Those mounted on drop pipes below the boom"
  ],
  "answer": 0,
  "explanation": "The nozzles that usually need changing sit within 3 to 6 feet of the fuselage. If overcompensation has produced a pronounced spray peak to the left of the fuselage, you can often fix it by shutting off one or more nozzles mounted within 3 to 6 feet of the right side of the fuselage.",
  "page": "55",
  "manual": "aerial"
 },
 {
  "id": "a4-039",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "A helicopter's spray pattern shows a low deposit in the middle of the swath and heavy deposits at both ends of the boom. How is that normally corrected?",
  "choices": [
   "Add nozzles under the aircraft between the skids",
   "Shorten the boom to half the rotor diameter",
   "Shut off the outermost nozzle on each side",
   "Raise the system pressure by about 20 psi"
  ],
  "answer": 0,
  "explanation": "This rotor distortion pattern is normally cured by putting additional nozzles under the aircraft, between the skids, to fill in the light center of the swath.",
  "page": "55",
  "manual": "aerial"
 },
 {
  "id": "a4-040",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What is the maximum ambient wind speed for conducting spray pattern test flights?",
  "choices": [
   "Less than 10 mph",
   "Less than 3 mph",
   "Less than 15 mph",
   "Less than 20 mph"
  ],
  "answer": 0,
  "explanation": "Run pattern tests only when ambient wind is below 10 mph, and fly the aircraft directly into the wind. Early morning is the best time, before the sun heats the ground and creates thermal turbulence, and the application height, power setting, spray pressure, and nozzle location should all duplicate field conditions.",
  "page": "55",
  "manual": "aerial"
 },
 {
  "id": "a4-041",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "About how much water should be put in the spray tank for a spray pattern test flight?",
  "choices": [
   "About 30 gallons",
   "About 5 gallons",
   "About 100 gallons",
   "A full tank load"
  ],
  "answer": 0,
  "explanation": "Load roughly 30 gallons of water for the test. Before takeoff, run the pump and briefly engage the boom to check for leaks, with the nozzle tips, filter screens, and check valves all clean. After takeoff, purge the boom and confirm that water is reaching the end nozzles.",
  "page": "56",
  "manual": "aerial"
 },
 {
  "id": "a4-042",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "During a pattern test run, how far should the boom be operated before and after crossing the line of water sensitive paper?",
  "choices": [
   "At least 100 yards on each side",
   "At least 25 yards on each side",
   "At least 500 yards on each side",
   "Only over the sampling line itself"
  ],
  "answer": 0,
  "explanation": "Keep the boom running for at least 100 yards both before and after passing over the collection line, and hold straight and level flight so control surfaces do not disturb the air and skew the pattern. Ground crew then gather the cards in the order they were laid out.",
  "page": "56",
  "manual": "aerial"
 },
 {
  "id": "a4-043",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "On a trapezoidal deposition pattern from a pattern test, how is the effective swath defined?",
  "choices": [
   "The distance between the midpoints of the two sloping ends",
   "The distance between the two outermost cards that caught spray",
   "The width of the flat, uniform portion in the center of the pattern",
   "The distance between the outermost nozzles on the spray boom"
  ],
  "answer": 0,
  "explanation": "A proper setup deposits fairly evenly for some distance on both sides of the flight line, then tapers off, forming a trapezoid. The effective swath runs between the midpoints of the sloping ends, each of which is where deposition is about half the average found in the uniform part of the pattern. In an actual job that midpoint is the border between adjacent swaths.",
  "page": "57",
  "manual": "aerial"
 },
 {
  "id": "a4-044",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Spray droplets below what diameter are considered drift prone?",
  "choices": [
   "200 microns",
   "500 microns",
   "50 microns",
   "1,000 microns"
  ],
  "answer": 0,
  "explanation": "Droplets smaller than 200 microns in diameter are the drift-prone ones. Aiming nozzles straight back and running the system at 40 to 60 psi, so the liquid's exit speed matches the aircraft's speed, produces larger droplets through less wind shear and holds down the driftable sizes.",
  "page": "57",
  "manual": "aerial"
 },
 {
  "id": "a4-045",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "By how much must spray pressure be raised to double the spray output of the system?",
  "choices": [
   "It must be quadrupled",
   "It must be doubled",
   "It must be raised by half",
   "It must be increased eight times"
  ],
  "answer": 0,
  "explanation": "Doubling the spray output takes four times the spray pressure, and that has a major impact on droplet size. Use pressure only for minor changes of about 10 percent or less, and make significant changes in boom output by changing nozzle tip size, orifice size, or the number of nozzles in use.",
  "page": "57",
  "manual": "aerial"
 },
 {
  "id": "a4-046",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Above what feed rate does a ram-air spreader give an unsatisfactory distribution pattern?",
  "choices": [
   "35 pounds per second",
   "10 pounds per second",
   "75 pounds per second",
   "35 pounds per minute"
  ],
  "answer": 0,
  "explanation": "Most ram-air devices distribute poorly if you try to apply more than 250 pounds of material per acre or push the feed rate past 35 pounds per second.",
  "page": "58",
  "manual": "aerial"
 },
 {
  "id": "a4-047",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "How does a hinged metering gate compare with a sliding hatch on a dry material spreader?",
  "choices": [
   "The hinged gate needs calibration adjustment more often",
   "The hinged gate is easier to set for very low application rates",
   "The hinged gate wears out faster in normal service",
   "The hinged gate cannot be opened partially, only fully"
  ],
  "answer": 0,
  "explanation": "A hinged gate is opened by rotating its trailing margin downward with a cable or rod, and material spills over the lowered edge. Hinged gates usually need calibration adjustment more often than sliding hatches, and some hinged units can also dispense liquids. Sliding hatches adjust more easily, especially at low rates, but wear faster.",
  "page": "58",
  "manual": "aerial"
 },
 {
  "id": "a4-048",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "How many curved ducts make up the air channel of a typical ram-air spreader?",
  "choices": [
   "5 to 13",
   "2 to 4",
   "15 to 25",
   "30 to 40"
  ],
  "answer": 0,
  "explanation": "A typical ram-air spreader has 5 to 13 laterally adjacent curved ducts. The partitions that form the duct walls are the spreader vanes, and each vane usually has adjustable front and rear sections that can be repositioned laterally within the spreader body.",
  "page": "58",
  "manual": "aerial"
 },
 {
  "id": "a4-049",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "Why must the top of every spreader vane, including its movable sections, touch the internal ceiling of the spreader?",
  "choices": [
   "A gap lets air and particles cross from duct to duct",
   "A gap lets the vane vibrate loose from its mounting",
   "A gap allows moisture to reach the metering gate",
   "A gap reduces the attack angle of the spreader body"
  ],
  "answer": 0,
  "explanation": "The vanes' main job is spreading the thin sheet of particles moving along the spreader ceiling, and they only do it if air and particles cannot pass from one duct into the next. Any gap between vane and ceiling lets both cross over and seriously upsets even distribution of the pesticide.",
  "page": "59",
  "manual": "aerial"
 },
 {
  "id": "a4-050",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "A ram-air spreader lays granules too thin on the right side of the swath and too heavy on the left. How do you correct this propwash effect?",
  "choices": [
   "Shift the inlet vanes to the left, shrinking the left discharge ports",
   "Shift the inlet vanes to the right, shrinking the right discharge ports",
   "Raise the rear of the spreader to increase the attack angle",
   "Open the metering gate wider so more material enters the ducts"
  ],
  "answer": 0,
  "explanation": "Propwash carries material released near the right of the fuselage over to the left, so the spreader has to discharge more from its right side. Moving the inlet vanes toward the left makes the left discharge ports smaller than those on the right and evens out the swath.",
  "page": "59",
  "manual": "aerial"
 },
 {
  "id": "a4-051",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What is the limit on the angle of incidence created when a ram-air spreader's inlet vane is shifted laterally?",
  "choices": [
   "It should never exceed 15 degrees",
   "It should never exceed 45 degrees",
   "It should never exceed 3 degrees",
   "It should never exceed 30 degrees"
  ],
  "answer": 0,
  "explanation": "Measured against the path of forward flight, lateral repositioning of an inlet vane should never take the angle of incidence past 15 degrees. Too great a duct wall angle raises static air pressure inside the duct, impairs the hopper-to-duct flow rate, and cuts spreader output.",
  "page": "59",
  "manual": "aerial"
 },
 {
  "id": "a4-052",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "How should the attack angle of a ram-air spreader's lower surface compare with the attack angle of the lower surface of the aircraft wing?",
  "choices": [
   "About 1 to 3 degrees less",
   "About 1 to 3 degrees greater",
   "About 10 degrees less",
   "Exactly the same"
  ],
  "answer": 0,
  "explanation": "Set the spreader so the attack angle of its lower skin runs roughly 1 to 3 degrees below that of the wing's lower surface. An attack angle that is too great or too small brings added turbulence and drag, more pesticide deposited on the tail gear, a non-uniform swath, and swath narrowing from slower particle exit speeds.",
  "page": "60",
  "manual": "aerial"
 },
 {
  "id": "a4-053",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "What happens to the effective swath width of a dry material spreader when you increase the hopper feed rate?",
  "choices": [
   "The swath gets narrower",
   "The swath gets wider",
   "The swath width does not change",
   "The swath widens only above 250 pounds per acre"
  ],
  "answer": 0,
  "explanation": "Up to the spreader's maximum handling capacity, changing the application rate automatically changes the effective swath. A heavier particle stream leaving the duct resists being broken apart, so the swath narrows. For rates above 250 pounds of product per acre, cut the per-pass rate, set up for a reduced swath, and fly more passes.",
  "page": "60",
  "manual": "aerial"
 },
 {
  "id": "a4-054",
  "section": 4,
  "sectionName": "Aerial Pesticide Dispersal Systems",
  "question": "How does the centrifugal spreader carried by a rotary-wing aircraft distribute dry material?",
  "choices": [
   "It meters material onto a spinning disc",
   "It drops material into a ducted airstream",
   "It blows material through a set of curved vanes",
   "It releases material through a hinged belly gate"
  ],
  "answer": 0,
  "explanation": "The centrifugal spreader is a self-contained unit with its own hopper, slung beneath the helicopter on a cable. It meters pesticide, seed, or fertilizer from the hopper onto a spinning disc driven by a hydraulic motor or gasoline engine, which you control through a hydraulic control cable or an electrically activated solenoid.",
  "page": "60",
  "manual": "aerial"
 },
 {
  "id": "a5-001",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "In aerial application, what does calibrating the dispersal system mean?",
  "choices": [
   "Setting up and adjusting the equipment so the pesticide is diluted and applied as regulations require",
   "Flying a marked course to confirm that the aircraft's airspeed indicator reads correctly",
   "Documenting the volume of every load of pesticide mixture in the operation's application records before takeoff",
   "Adjusting the aircraft's application height until the spray pattern looks uniform across the swath"
  ],
  "answer": 0,
  "explanation": "Calibration is the setup and adjustment of the dispersal equipment so that the active ingredient is diluted and applied according to regulations. The success of every aerial application depends on it, because it is what puts the prescribed volume on the target site.",
  "page": "63",
  "manual": "aerial"
 },
 {
  "id": "a5-002",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Pesticide labels or local regulations prescribe maximum application volumes. What is the consequence of exceeding them?",
  "choices": [
   "It violates both federal and state laws",
   "It is allowed if the applicator records the reason on the work order",
   "It is permitted whenever the pest population is above the economic threshold",
   "It breaks a labeling recommendation but carries no legal penalty"
  ],
  "answer": 0,
  "explanation": "The applicator is responsible for applying products uniformly and at the proper volume per unit of area. Because labels and local rules prescribe maximum volumes, going over those volumes is a violation of federal and state law, not a judgment call.",
  "page": "63",
  "manual": "aerial"
 },
 {
  "id": "a5-003",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "After an aircraft's dispersal system has been calibrated, why must the equipment still be checked and tested periodically?",
  "choices": [
   "Heavy workloads and abrasive formulations leave nozzles and other parts worn or maladjusted",
   "Federal regulations require that a calibration check be documented at the start of each work week",
   "Pesticide labels expire, so the volumes they prescribe change from one season to the next",
   "Tank capacity gradually increases as the seals and internal fittings settle in"
  ],
  "answer": 0,
  "explanation": "Calibration does not hold indefinitely. Heavy workloads and abrasive pesticide formulations cause nozzles and other equipment to become worn or maladjusted, so the system has to be rechecked and retested periodically to confirm the calibration is still accurate.",
  "page": "64",
  "manual": "aerial"
 },
 {
  "id": "a5-004",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "What is the main reason for calibrating an aircraft's dispersal system?",
  "choices": [
   "To determine how much pesticide to load so the recommended volume is applied at the planned speed and altitude",
   "To confirm that the airframe can safely carry a full load of spray mixture",
   "To establish which droplet size category the installed nozzles will produce at each pressure setting used in flight",
   "To document the aircraft's actual swath width for the operation's insurance carrier"
  ],
  "answer": 0,
  "explanation": "Calibration exists to answer one question: how much pesticide goes into the tank or hopper so that the volume recommended on the work order lands on the target site when the aircraft is flown at the determined speed and altitude.",
  "page": "64",
  "manual": "aerial"
 },
 {
  "id": "a5-005",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Over-application leaves pesticide residues above the legal tolerance level on a crop. What authority do regulators have in that situation?",
  "choices": [
   "They may confiscate and destroy the entire crop",
   "They may require the grower to delay harvest by 30 days",
   "They may order the treated field to be tilled under and replanted",
   "They may fine the grower but cannot restrict sale of the crop"
  ],
  "answer": 0,
  "explanation": "Applying more than the legal volume can push residues on crop plants past the legal tolerance level. When over-application produces illegal residues, regulators have the authority to confiscate and destroy the whole crop to protect consumers.",
  "page": "64",
  "manual": "aerial"
 },
 {
  "id": "a5-006",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "How is applying a pesticide at less than the labeled rate treated?",
  "choices": [
   "It is legal, but may give inadequate control and encourage resistance and resurgence",
   "It is illegal, because the label rate is a minimum as well as a maximum",
   "It is legal and preferred, since a lower rate reduces the risk of illegal residues",
   "It is illegal unless a state regulatory agency has approved a written reduced-rate program"
  ],
  "answer": 0,
  "explanation": "Using less than the labeled rate is legal, but it may not control the pest, which wastes the time and money spent on the application. Application volumes that are too low can also lead to pest resistance and resurgence.",
  "page": "64",
  "manual": "aerial"
 },
 {
  "id": "a5-007",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Calibrating a liquid aerial sprayer comes down to determining what?",
  "choices": [
   "How much area each tank of spray covers at a known airspeed and system pressure",
   "How much the spray tank weighs when it is filled to its maximum operating fill point",
   "How many nozzles the boom can carry without dropping below rated pressure",
   "How long the pump can run continuously before its output pressure falls off"
  ],
  "answer": 0,
  "explanation": "Liquid sprayer calibration determines how much area one tank of spray will cover when the aircraft flies at a known speed and the system runs at a known pressure. That figure is what lets the applicator load the right amount of pesticide.",
  "page": "65",
  "manual": "aerial"
 },
 {
  "id": "a5-008",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "A spray swath is too narrow and the deposit pattern is uneven. What is the correct way to fix it?",
  "choices": [
   "Replace nozzles rather than change application height",
   "Raise the application height until the swath widens and evens out",
   "Increase pump pressure until the pattern fills in at the swath edges",
   "Lower the application height so ground effect spreads the pattern"
  ],
  "answer": 0,
  "explanation": "Application height is held constant through each swath run to get uniform coverage, and it should not be used as a tool for changing swath width or pattern uniformity. Nozzles are replaced instead to correct swath width and pattern problems.",
  "page": "65",
  "manual": "aerial"
 },
 {
  "id": "a5-009",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Once a fixed- or rotary-wing aircraft is properly set up, which four factors must be measured to calibrate it?",
  "choices": [
   "Tank capacity, application airspeed, flow volume, and effective spray swath width",
   "Tank capacity, application height, droplet size category, and number of nozzles",
   "Pump pressure, nozzle orifice size, application height, and flow volume",
   "Application airspeed, wind speed, relative humidity, and effective swath width"
  ],
  "answer": 0,
  "explanation": "The four measurements that make up the calibration are tank capacity, application airspeed, flow volume, and effective spray swath width. Spray pressure is not a separate measurement because it is a component of flow volume: as pressure rises or falls, flow volume rises or falls with it.",
  "page": "65",
  "manual": "aerial"
 },
 {
  "id": "a5-010",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "What limit governs the spray pressure used in an aerial spraying system?",
  "choices": [
   "It must never exceed the nozzle manufacturer's recommendations",
   "It must never exceed 40 psi regardless of which nozzles are installed",
   "It must stay within 10 percent of the spray pump's rated maximum",
   "It must be set to whatever the pesticide label lists for droplet size"
  ],
  "answer": 0,
  "explanation": "Spray pressure drives flow volume, but it is capped by the hardware: pressure must never go above what the nozzle manufacturer recommends.",
  "page": "65",
  "manual": "aerial"
 },
 {
  "id": "a5-011",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "How do a worn pump and worn nozzles each change a spraying system's output?",
  "choices": [
   "Pump wear cuts output amount and pressure, while nozzle wear increases output volume",
   "Both pump wear and nozzle wear steadily reduce the volume the system delivers",
   "Pump wear raises the output volume, while nozzle wear lowers it and produces coarser droplets",
   "Nozzle wear cuts output volume, while pump wear leaves output volume unchanged"
  ],
  "answer": 0,
  "explanation": "The two kinds of wear pull in opposite directions: a worn pump delivers less fluid at lower pressure, while worn nozzle orifices pass a greater volume. Abrasive materials such as wettable powders cause this wear in pumps and nozzles, so equipment used with them needs frequent checking.",
  "page": "65",
  "manual": "aerial"
 },
 {
  "id": "a5-012",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Why should the spray tank size rating supplied by the manufacturer not be used for calibration?",
  "choices": [
   "It is approximate, ignores fittings inside the tank, and ignores the aircraft's ground attitude",
   "It is measured with the pump running, so it overstates the usable volume of the tank",
   "It is stated in liters, which introduces rounding error when it is converted to gallons",
   "It assumes the tank is filled to the top of the filler neck instead of to the sight gauge mark"
  ],
  "answer": 0,
  "explanation": "Manufacturer tank ratings may be approximate volumes, they may not account for fittings installed inside the tank, and they do not account for the attitude the aircraft sits at on the ground. The capacity has to be measured with clean water instead.",
  "page": "66",
  "manual": "aerial"
 },
 {
  "id": "a5-013",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "How often does an aircraft's spray tank capacity normally have to be measured?",
  "choices": [
   "Usually once, and again if the tank is modified or internal components change",
   "Once at the start of every spray season, before the first application of the year is made",
   "Before every load, by reading the calibrated tank sight gauge",
   "Each time a different pesticide formulation is loaded into it"
  ],
  "answer": 0,
  "explanation": "Measuring tank capacity is normally a one-time job. It has to be repeated only if the tank is modified or if components inside the tank are added or removed, since either change alters how much liquid the tank holds.",
  "page": "66",
  "manual": "aerial"
 },
 {
  "id": "a5-014",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Under what load should application airspeed be measured for calibration purposes?",
  "choices": [
   "With the spray tank about half full of water, at the altitude actually flown",
   "With the spray tank completely full, at the altitude actually flown",
   "With the spray tank empty, so the airspeed indicator reaches a true maximum",
   "With whatever level of mixture happens to be left after the previous run"
  ],
  "answer": 0,
  "explanation": "Airspeed is measured under actual working conditions, with the tank roughly half full of water so the weight represents a good average for the run, and while flying at the same altitude used for a real spray application.",
  "page": "66",
  "manual": "aerial"
 },
 {
  "id": "a5-015",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "How is the combined nozzle flow volume of a helicopter spray boom measured?",
  "choices": [
   "Collect from each nozzle for a known time, such as 30 seconds, and add the amounts",
   "Collect from one representative nozzle for a minute and multiply by the number of nozzles installed",
   "Read the boom pressure gauge and look the value up on the nozzle manufacturer's chart",
   "Spray a timed run in flight, then refill the tank through a flow meter and record the gallons"
  ],
  "answer": 0,
  "explanation": "Rotary-wing aircraft normally have electric or hydraulic spray pumps, so they need not be flying to measure output. Liquid is caught from every nozzle over a known interval, such as 30 seconds, in a container graduated in liquid ounces, and the catches are added together.",
  "page": "66",
  "manual": "aerial"
 },
 {
  "id": "a5-016",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Why can't spray be caught from the nozzles of most fixed-wing agricultural aircraft to measure output?",
  "choices": [
   "The propeller's air blast makes collection impossible, and fan-driven pumps need engine speed",
   "The boom's check valves stay closed whenever the aircraft is standing still on the ground",
   "Fixed-wing spray booms are mounted too high off the ground for a container to reach them",
   "The spraying system cannot hold enough pressure on the ground to push liquid out to the outer nozzles"
  ],
  "answer": 0,
  "explanation": "Most fixed-wing aircraft use fan-driven spray pumps, so the aircraft must be airborne or have the engine running at high speed, and the propeller blast makes catching liquid at the nozzles impossible. Output is found instead by timing runs and measuring the water used.",
  "page": "66",
  "manual": "aerial"
 },
 {
  "id": "a5-017",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Liquid caught from all the nozzles on a helicopter boom totals 600 ounces in 30 seconds. What is the flow volume in gallons per minute?",
  "choices": [
   "9.375",
   "4.688",
   "18.75",
   "12.5"
  ],
  "answer": 0,
  "explanation": "Scale the catch to a minute, then convert to gallons: 600 ounces times 60 seconds divided by the 30-second collection time gives 1,200 ounces per minute, and 1,200 divided by 128 ounces per gallon gives 9.375 gallons per minute.",
  "page": "67",
  "manual": "aerial"
 },
 {
  "id": "a5-018",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "A helicopter discharging 9.375 gallons per minute is flown at 50 miles per hour. How many gallons does it apply per mile?",
  "choices": [
   "11.25",
   "7.81",
   "15.63",
   "9.38"
  ],
  "answer": 0,
  "explanation": "First convert speed to miles per minute: 50 miles per hour divided by 60 minutes per hour is 0.833 miles per minute. Then divide gallons per minute by miles per minute: 9.375 divided by 0.833 gives 11.25 gallons per mile.",
  "page": "67",
  "manual": "aerial"
 },
 {
  "id": "a5-019",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "A fixed-wing aircraft made four 30-second spray runs, and refilling the tank to its original mark took 36 gallons of water. What is the sprayer's output in gallons per minute?",
  "choices": [
   "18",
   "9",
   "12",
   "24"
  ],
  "answer": 0,
  "explanation": "Four runs of 30 seconds is 2 minutes of spraying, and the refill volume equals the volume sprayed. Dividing 36 gallons by 2 minutes gives 18 gallons per minute.",
  "page": "68",
  "manual": "aerial"
 },
 {
  "id": "a5-020",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "A sprayer putting out 18 gallons per minute is flown at 120 miles per hour. How many gallons are applied per mile?",
  "choices": [
   "9",
   "4.5",
   "15",
   "36"
  ],
  "answer": 0,
  "explanation": "At 120 miles per hour the aircraft covers 120 divided by 60, or 2 miles per minute. Dividing 18 gallons per minute by 2 miles per minute gives 9 gallons per mile.",
  "page": "68",
  "manual": "aerial"
 },
 {
  "id": "a5-021",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "What does the effective swath width of an aerial application describe?",
  "choices": [
   "The width credited to a pass once the overlap with adjoining passes is accounted for",
   "The full width of the deposit left by a single pass, measured edge to edge",
   "The distance between the outermost droplets found on either side of the flight line",
   "The combined width of two adjacent passes flown in opposite directions"
  ],
  "answer": 0,
  "explanation": "The actual swath a pass lays down may be wider, but the effective swath width is the figure that includes the overlap made with each pass to even out the application. It is found by pattern testing.",
  "page": "68",
  "manual": "aerial"
 },
 {
  "id": "a5-022",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Which changes require a new pattern test and a recalculated effective swath width?",
  "choices": [
   "Any alteration of the spray boom, or a change in application height",
   "Loading a different pesticide product into the same tank and boom combination",
   "Any change in ambient air temperature of more than 10 degrees",
   "Any change in the total weight of the load being carried"
  ],
  "answer": 0,
  "explanation": "Altering the spray boom in any way, or flying at a different application height, changes the deposit pattern, so the pattern test must be repeated and the effective swath width recalculated. The height used during pattern testing must match the height flown on the real application.",
  "page": "68",
  "manual": "aerial"
 },
 {
  "id": "a5-023",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "What application height is usually the maximum suitable for spray droplets that have less tendency to drift?",
  "choices": [
   "8 to 10 feet",
   "3 to 5 feet",
   "12 to 15 feet",
   "20 to 25 feet"
  ],
  "answer": 0,
  "explanation": "An application height of 8 to 10 feet is normally the highest that suits droplets with little tendency to drift. Above that range, larger spray droplets are needed to hold drift down, because droplets released higher spend more time exposed to evaporation and drift-producing forces.",
  "page": "68",
  "manual": "aerial"
 },
 {
  "id": "a5-024",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Why can flying lower than the recommended application height cause additional drift?",
  "choices": [
   "Air turbulence hitting the ground, called ground effect, disperses the spray",
   "Droplets have too little time to evaporate before they reach the canopy",
   "Boom pressure rises in the denser air and produces smaller droplets",
   "The effective swath width narrows and forces the passes closer together"
  ],
  "answer": 0,
  "explanation": "Lower application heights reduce drift risk only up to a point. Flying too low creates drift problems of its own, because air turbulence striking the ground, known as ground effect, carries spray away from the target.",
  "page": "68",
  "manual": "aerial"
 },
 {
  "id": "a5-025",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "An aircraft is flying at 120 miles per hour. What is that speed expressed in feet per minute?",
  "choices": [
   "10,560",
   "7,040",
   "633,600",
   "2,112"
  ],
  "answer": 0,
  "explanation": "Multiply miles per hour by 5,280 feet per mile and divide by 60 minutes per hour: 120 times 5,280 is 633,600 feet per hour, and dividing by 60 gives 10,560 feet per minute.",
  "page": "69",
  "manual": "aerial"
 },
 {
  "id": "a5-026",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "An aircraft moving 10,560 feet per minute sprays a 50-foot effective swath. How many acres does it treat in one minute?",
  "choices": [
   "12.1",
   "8.4",
   "24.2",
   "6.1"
  ],
  "answer": 0,
  "explanation": "Multiply feet per minute by the effective swath width to get square feet per minute: 10,560 times 50 is 528,000 square feet per minute. Dividing by 43,560 square feet per acre gives 12.1 acres per minute.",
  "page": "69",
  "manual": "aerial"
 },
 {
  "id": "a5-027",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "A boom discharges 18 gallons per minute while the aircraft covers 12.1 acres per minute. What is the application volume per acre?",
  "choices": [
   "1.49 gallons",
   "0.67 gallons",
   "2.18 gallons",
   "3.60 gallons"
  ],
  "answer": 0,
  "explanation": "Gallons per acre is gallons per minute divided by acres per minute: 18 divided by 12.1 gives 1.49 gallons per acre. In this example that is the volume applied at 120 miles per hour with a 50-foot effective swath.",
  "page": "70",
  "manual": "aerial"
 },
 {
  "id": "a5-028",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "A 300-gallon spray tank feeds a system that discharges 18 gallons per minute. How long can the aircraft spray on one tankful?",
  "choices": [
   "16.7 minutes",
   "12.5 minutes",
   "21.4 minutes",
   "9.4 minutes"
  ],
  "answer": 0,
  "explanation": "Divide tank capacity by output: 300 gallons divided by 18 gallons per minute is 16.7 minutes per tank. Multiplying that time by the acres treated per minute gives the acres one tankful will cover.",
  "page": "70",
  "manual": "aerial"
 },
 {
  "id": "a5-029",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "A job order calls for 2 pints of pesticide per acre, and one 300-gallon tank covers 202 acres. How is that tank loaded?",
  "choices": [
   "50.5 gallons of pesticide and 249.5 gallons of water",
   "25.3 gallons of pesticide and 274.7 gallons of water",
   "101 gallons of pesticide and 199 gallons of water",
   "40.4 gallons of pesticide and 259.6 gallons of water"
  ],
  "answer": 0,
  "explanation": "Multiply pints per acre by acres per tank and divide by 8 pints per gallon: 2 times 202 divided by 8 gives 50.5 gallons of pesticide. The rest of the 300-gallon load, 249.5 gallons, is water.",
  "page": "70",
  "manual": "aerial"
 },
 {
  "id": "a5-030",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "A rectangular application site measures 800 feet long and 250 feet wide. How many acres is that?",
  "choices": [
   "4.59",
   "2.30",
   "5.28",
   "9.18"
  ],
  "answer": 0,
  "explanation": "Multiply length by width for square feet, then divide by the 43,560 square feet in an acre: 800 times 250 is 200,000 square feet, and 200,000 divided by 43,560 is 4.59 acres.",
  "page": "71",
  "manual": "aerial"
 },
 {
  "id": "a5-031",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "A triangular field has a base of 650 feet and a height of 300 feet. What is its area in acres?",
  "choices": [
   "2.24",
   "4.48",
   "1.12",
   "3.36"
  ],
  "answer": 0,
  "explanation": "The area of a triangle is base times height divided by 2, using the longest side as the base and the widest point as the height: 650 times 300 divided by 2 is 97,500 square feet, which divided by 43,560 square feet per acre is 2.24 acres.",
  "page": "72",
  "manual": "aerial"
 },
 {
  "id": "a5-032",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "A circular application site is 400 feet in diameter. Using 3.14 for pi, how many acres does it contain?",
  "choices": [
   "2.88",
   "1.44",
   "5.77",
   "11.53"
  ],
  "answer": 0,
  "explanation": "The radius is half the diameter, or 200 feet, and the area of a circle is pi times the radius squared: 3.14 times 200 times 200 is 125,600 square feet. Dividing by 43,560 square feet per acre gives 2.88 acres.",
  "page": "73",
  "manual": "aerial"
 },
 {
  "id": "a5-033",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "What is the simplest way to change the application volume from a rotary-wing aircraft, and what does slowing down do?",
  "choices": [
   "Change airspeed; a slower speed applies more material",
   "Change airspeed; a slower speed applies less material",
   "Change application height; speed changes do not affect volume",
   "Change tank concentration; speed only affects droplet size"
  ],
  "answer": 0,
  "explanation": "For a helicopter, adjusting travel speed is the easiest way to change the volume of spray applied: flying slower puts out more material, and flying faster puts out less. Changing speed also avoids having to alter the concentration of chemical in the tank.",
  "page": "75",
  "manual": "aerial"
 },
 {
  "id": "a5-034",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Which variable should typically NOT be adjusted to change application volume on a fixed-wing aircraft?",
  "choices": [
   "Application airspeed",
   "Nozzle orifice size",
   "Pump pressure",
   "Number of nozzles on the boom"
  ],
  "answer": 0,
  "explanation": "Application speed is normally left alone on a fixed-wing aircraft when volume needs to change; that approach belongs to rotary-wing work. Orifice size, pump pressure, and nozzle arrangement are the adjustments used instead, alone or in combination.",
  "page": "75",
  "manual": "aerial"
 },
 {
  "id": "a5-035",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "By what factor must system pressure be increased in order to double the output volume?",
  "choices": [
   "Four",
   "Two",
   "Eight",
   "One and a half"
  ],
  "answer": 0,
  "explanation": "Doubling output volume takes a fourfold increase in pressure, which is usually beyond what the spraying system can do. A pressure increase that large also degrades the droplet size spectrum, and the pump's working pressure range limits the adjustment.",
  "page": "75",
  "manual": "aerial"
 },
 {
  "id": "a5-036",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "What is the most effective way to change the output volume of an aircraft spraying system?",
  "choices": [
   "Install nozzle orifices of a different size",
   "Adjust the pressure regulator setting",
   "Change the aircraft's application height",
   "Add or remove nozzles along the boom"
  ],
  "answer": 0,
  "explanation": "Fitting different orifice sizes is the most effective change: larger orifices increase volume and smaller ones reduce it. Because an orifice change usually alters system pressure, the pressure regulator or pump speed has to be adjusted and the output volume measured again.",
  "page": "75",
  "manual": "aerial"
 },
 {
  "id": "a5-037",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "What influences how fast granules flow out of an aircraft's hopper and spreader?",
  "choices": [
   "Granule size and shape, plus temperature and humidity",
   "Only the setting of the spreader gate",
   "Airspeed alone, since the hopper is gravity fed",
   "The percentage of active ingredient carried on the granule"
  ],
  "answer": 0,
  "explanation": "Granules differ in size and shape from one pesticide to the next, and that affects their flow rate out of the hopper and spreader. Temperature and humidity can also influence how granules flow, so calibration cannot be carried over between products.",
  "page": "75",
  "manual": "aerial"
 },
 {
  "id": "a5-038",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Compared with liquid sprays, from what height can granules generally be applied, and why?",
  "choices": [
   "Higher, because granules drift less and higher releases deposit more uniformly",
   "Lower, because granules bounce off the canopy when dropped from height",
   "At exactly the same height, because label height limits apply equally to both",
   "Lower, because granules must be released below the ground effect layer"
  ],
  "answer": 0,
  "explanation": "Granules have lower drift potential than sprays, so they can generally be released from greater application heights than liquids allow, and the higher release usually produces a more uniform deposition pattern.",
  "page": "75",
  "manual": "aerial"
 },
 {
  "id": "a5-039",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Which three variables are measured when calibrating a granule applicator?",
  "choices": [
   "Application airspeed, output rate, and swath width",
   "Application airspeed, hopper capacity, and output rate",
   "Output rate, swath width, and granule bulk density",
   "Hopper capacity, gate setting, and application height"
  ],
  "answer": 0,
  "explanation": "Granule calibration measures application airspeed, output rate, and swath width. Airspeed is taken under actual working conditions with the aircraft loaded to normal operational weight and flown at the altitude that will be used for the application.",
  "page": "75",
  "manual": "aerial"
 },
 {
  "id": "a5-040",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "How should collection pans be laid out for a granule swath test?",
  "choices": [
   "At least 13 pans, 5 feet apart, in a line perpendicular to the flight line",
   "At least 8 pans, 10 feet apart, in a line parallel to the flight line",
   "At least 20 pans, 3 feet apart, in a line perpendicular to the flight line",
   "At least 13 pans, spaced across the swath at intervals of one pan width"
  ],
  "answer": 0,
  "explanation": "A series of at least 13 collection pans is set out in a straight line at 5-foot intervals, perpendicular to the flight line, and the swath test is flown along a centerline at a right angle to that line of pans.",
  "page": "76",
  "manual": "aerial"
 },
 {
  "id": "a5-041",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "What must the pans used to collect granules in a swath test be like?",
  "choices": [
   "About 4 inches deep, at least 1 square foot, identical, and foam-padded",
   "About 4 inches deep, at least 4 square feet, and round rather than square",
   "About 12 inches deep, at least 1 square foot, and lined with sticky paper",
   "Any depth and footprint, so long as their combined area totals 13 square feet"
  ],
  "answer": 0,
  "explanation": "Pan footprint shape does not matter, but each pan should be roughly 4 inches deep with an area of at least 1 square foot, all pans must be exactly the same size, and each bottom is padded with a thin layer of foam so granules do not bounce out.",
  "page": "76",
  "manual": "aerial"
 },
 {
  "id": "a5-042",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Wind is blowing a sustained 12 mph on the day of a granule swath test. How should the test be set up?",
  "choices": [
   "Put the pan line at a right angle to the prevailing wind and fly into the wind",
   "Postpone the swath test entirely until sustained wind speed drops below 8 mph",
   "Set the pan line parallel to the wind and fly the test across it",
   "Keep the usual layout but double the number of collection pans"
  ],
  "answer": 0,
  "explanation": "When ambient wind is more than a sustained 8 mph, the line of pans is oriented at a right angle to the prevailing wind and the test pass is flown directly into the wind, rather than aligning the pans only to the flight line.",
  "page": "76",
  "manual": "aerial"
 },
 {
  "id": "a5-043",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Granules were caught across a 60-foot swath, and a second pass centered 30 feet to the side gave an even distribution. What effective swath width does that indicate?",
  "choices": [
   "30 feet",
   "60 feet",
   "45 feet",
   "90 feet"
  ],
  "answer": 0,
  "explanation": "Centering the next pass 30 feet from the first overlaps the two 60-foot swaths by 50 percent, which evens out the granule distribution. The effective swath width in that case is 30 feet, the spacing between pass centerlines.",
  "page": "76",
  "manual": "aerial"
 },
 {
  "id": "a5-044",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "Thirteen collection pans of one square foot each caught granules weighing 2 ounces in total. What application rate does that work out to?",
  "choices": [
   "418.85 pounds per acre",
   "6,701.54 pounds per acre",
   "26.18 pounds per acre",
   "209.42 pounds per acre"
  ],
  "answer": 0,
  "explanation": "Multiply 43,560 square feet per acre by the 2 ounces caught and divide by the 13 square feet of pan area: that gives 6,701.54 ounces per acre. Dividing by 16 ounces per pound gives 418.85 pounds per acre.",
  "page": "76",
  "manual": "aerial"
 },
 {
  "id": "a5-045",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "In a trapezoidal granule pattern, the distance AD between the two end pans holding no granules is 60 feet and the distance BC of relatively constant catch is 30 feet. What is the effective swath width?",
  "choices": [
   "45 feet, so passes are flown 45 feet apart",
   "30 feet, so passes are flown 30 feet apart",
   "60 feet, so passes are flown 60 feet apart",
   "90 feet, so passes are flown 90 feet apart"
  ],
  "answer": 0,
  "explanation": "For the trapezoidal pattern typical of granular spreaders, add distance AD to distance BC and divide by 2: 60 feet plus 30 feet divided by 2 is a 45-foot effective swath width, and application passes should be spaced 45 feet apart.",
  "page": "77",
  "manual": "aerial"
 },
 {
  "id": "a5-046",
  "section": 5,
  "sectionName": "Calibrating Aerial Application Equipment",
  "question": "What material should be used to calibrate a granule applicator when it can be obtained?",
  "choices": [
   "Blank granules of the product's size, shape, and weight with no active ingredient",
   "Coarse dry sand screened to roughly the same particle size as the granular product",
   "The least expensive granular fertilizer with a similar bag weight",
   "The actual pesticide product, spread over any convenient open area"
  ],
  "answer": 0,
  "explanation": "Spreading pesticide granules on an area not designated for the application is dangerous and irresponsible, so blank granules matching the product's size, shape, and weight but carrying no active ingredient are requested from the manufacturer. If none are available, the only alternative is to follow the equipment manufacturer's recommendations for setting the spreader gate.",
  "page": "77",
  "manual": "aerial"
 },
 {
  "id": "a6-001",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Because agricultural aircraft are highly visible and noisy, what does the manual expect an aerial applicator to do about public concerns?",
  "choices": [
   "Confine every ferrying and application flight to weekday working hours, when most nearby residents are away from home",
   "Refer all questions about low flying and noise to the state lead agency instead of answering them",
   "Explain that aviation rules exempt agricultural aircraft from noise and low-altitude concerns",
   "Notify people in the area before an application and take steps to reduce noise where people live and work"
  ],
  "answer": 3,
  "explanation": "Low-flying aircraft worry some people, so part of doing the job well is communication: tell people in the area that an application is planned, and make an effort to mitigate noise over places where people live and work during both ferrying and application flights.",
  "page": "81",
  "manual": "aerial"
 },
 {
  "id": "a6-002",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "At what altitude should the aircraft be flown while ferrying between the loading area and the application site?",
  "choices": [
   "At least 500 feet above the surface",
   "At least 100 feet above the surface",
   "At least 1,500 feet above the surface",
   "At least 8 to 12 feet above the crop canopy"
  ],
  "answer": 0,
  "explanation": "Ferrying flights, whether the aircraft is empty or full, are made at least 500 feet above the surface and at least 500 feet away from people and personal property, avoiding buildings, residential areas, parks, playgrounds, penned animals, and other places where people or livestock may be.",
  "page": "82",
  "manual": "aerial"
 },
 {
  "id": "a6-003",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "An operation requires many ferry trips back into the same area. How should the flight route be handled?",
  "choices": [
   "Use one route out to the field and that same route back to base every time",
   "Vary the route by one-eighth to one-fourth mile on each trip",
   "Fly the identical route on every trip so that residents can predict where the aircraft will be",
   "Vary the route by one-half to one full mile on each trip"
  ],
  "answer": 1,
  "explanation": "Shifting the ferry route one-eighth to one-fourth mile each trip keeps the aircraft from making repeated passes over the same surroundings, which spreads out the noise and the sight of the aircraft instead of subjecting the same people to the same distraction over and over.",
  "page": "82",
  "manual": "aerial"
 },
 {
  "id": "a6-004",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Which jobs are best scheduled for the first flight of the day?",
  "choices": [
   "Jobs closest to the home base, so the crew can return quickly for the harder work",
   "Jobs in sensitive areas, because temperature inversions are least likely early in the day",
   "The more difficult jobs, because the pilot and ground crew are more rested",
   "The simplest jobs, so that the crew can work up to full performance gradually"
  ],
  "answer": 2,
  "explanation": "The first flight demands that pilot and ground crew be alert and mentally prepared for the full complexity of the operation immediately, with no chance to build up to it. Because everyone is rested then, the first flight is the best slot for the harder jobs.",
  "page": "82",
  "manual": "aerial"
 },
 {
  "id": "a6-005",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "How much attention does the last application flight of the day require?",
  "choices": [
   "Less attention, because the crew already knows the field by then",
   "Only a shortened checklist, since earlier flights confirmed the conditions",
   "Extra speed, so that the operation finishes before the crew runs out of hours",
   "The same attention, care, and time as every other flight"
  ],
  "answer": 3,
  "explanation": "The last flight of the day must not be rushed or compromised to finish quickly. It gets the same attention, care, and time as every other flight of that day.",
  "page": "82",
  "manual": "aerial"
 },
 {
  "id": "a6-006",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "The inspection pass flown on arrival at a site confirms that the communication link among pilot, ground crew, and base is working. What else must be in place regarding communication?",
  "choices": [
   "A working backup communication plan in case the equipment fails",
   "A written log of every radio transmission made during the application",
   "A second radio frequency held open for the property manager's exclusive use",
   "A relay through the nearest air traffic control facility for the length of the job"
  ],
  "answer": 0,
  "explanation": "The initial inspection pass verifies that the link between the pilot, the ground crew, and the base location functions correctly and that a workable backup communication plan exists in case that equipment fails.",
  "page": "82",
  "manual": "aerial"
 },
 {
  "id": "a6-007",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "You arrive at a site and find conditions in or beside the field that the pesticide label does not permit, and they cannot be resolved quickly. What should you do?",
  "choices": [
   "Hold over the site until the ground crew corrects the problem, then apply",
   "Abort the operation and return to the home base",
   "Treat only the part of the field that is clearly in compliance",
   "Cut the application rate in half and complete the job"
  ],
  "answer": 1,
  "explanation": "Conditions the label forbids, or that you judge unsafe, end the job unless they can be cleared up quickly: abort the operation and fly back to the home base rather than treating around the problem.",
  "page": "83",
  "manual": "aerial"
 },
 {
  "id": "a6-008",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "When circling a field at low altitude to look for hazards before an application, what clearance must be kept from obstructions?",
  "choices": [
   "At least 100 feet above all obstructions",
   "At least 500 feet above the tallest obstruction near the field",
   "At least 50 feet above all obstructions",
   "At least 20 feet above all obstructions"
  ],
  "answer": 2,
  "explanation": "If the area is clear and conditions favor an application, circle the field very low but still high enough to clear every obstruction by at least 50 feet while looking for poles, guy wires, power and utility lines, trees, buildings, windmills, antennas, signs, pipeline markers, and fences.",
  "page": "83",
  "manual": "aerial"
 },
 {
  "id": "a6-009",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "What may a break in the normal cultivation or planting pattern of a field warn the pilot about?",
  "choices": [
   "A change in soil type that calls for a different rate",
   "A malfunction of the grower's cultivation equipment",
   "A part of the field that was already treated this season",
   "A hidden hazard such as a power pole or wire"
  ],
  "answer": 3,
  "explanation": "Poles, high fences, and similar obstructions keep equipment from cultivating around them, so weeds and other growth mark their location. Those vegetative clues reveal hazards that would otherwise blend into the background.",
  "page": "83",
  "manual": "aerial"
 },
 {
  "id": "a6-010",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Why may a wire hang lower over a field on a hot summer day than it did earlier in the season?",
  "choices": [
   "Heat expands the wire, so it sags closer to the ground",
   "Warm air is less dense, letting the aircraft settle nearer the wire",
   "Utility companies slacken their lines in summer to allow for storm loading",
   "Heat rising off bare ground pushes the aircraft upward toward the wire"
  ],
  "answer": 0,
  "explanation": "Heat causes wires to expand and therefore hang lower during hot summer days. Crop height changes the same clearance from another direction: a gap you could fly under in spring may be closed later in the year once the crop is tall.",
  "page": "83",
  "manual": "aerial"
 },
 {
  "id": "a6-011",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "During an application the wind dies away completely. Which hazard does that raise?",
  "choices": [
   "The spray pattern narrows and leaves untreated strips between passes",
   "The chance of a temperature inversion increases",
   "Droplets fall faster and deposit outside the swath",
   "Ground effect beneath the wings becomes stronger"
  ],
  "answer": 1,
  "explanation": "Wind at a site may rise, fall, or shift during a job, and it may stop altogether. Calm air increases the chance of a temperature inversion condition, which is why a change in wind is one of the things to monitor throughout the application.",
  "page": "84",
  "manual": "aerial"
 },
 {
  "id": "a6-012",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "A label restricts use to times when the temperature stays below a stated level. What happens if the temperature at ground level climbs above that level?",
  "choices": [
   "The tank mixture separates and plugs the nozzles",
   "The active ingredient binds to soil particles and stops working",
   "Plants may be damaged by the spray material",
   "The pesticide breaks down before it reaches the pest"
  ],
  "answer": 2,
  "explanation": "Some pesticides may only be applied while temperatures stay under a stated limit; above it, plants may suffer phytotoxicity from the spray material. Certain labels also set humidity restrictions on application.",
  "page": "84",
  "manual": "aerial"
 },
 {
  "id": "a6-013",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Field workers drive into the area you are treating. What must the operation do?",
  "choices": [
   "Move to the far end of the field and keep spraying",
   "Keep spraying only while the workers are upwind of the swath",
   "Continue at a reduced rate until the workers finish their task",
   "Stop until everyone is safely out of the area"
  ],
  "answer": 3,
  "explanation": "Whether workers walk or drive into the treated area or pass through from an adjacent field unaware of the operation, the application is required to stop until everyone is safely clear. Ground crew members are valuable for spotting such people and getting them out quickly.",
  "page": "84",
  "manual": "aerial"
 },
 {
  "id": "a6-014",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "How does the pilot confirm that the ground crew put the correct pesticide and the proper amount of water in the spray tank?",
  "choices": [
   "By rechecking the pesticide label and counting the empty containers",
   "By taking a tank sample back to the base for laboratory analysis",
   "By comparing the loaded weight of the aircraft with the work order figure",
   "By having the ground crew leader initial the application record before takeoff"
  ],
  "answer": 0,
  "explanation": "The pilot checklist puts this verification on the pilot: read the pesticide label again and count the empty containers to confirm the right material went in with the right amount of water.",
  "page": "85",
  "manual": "aerial"
 },
 {
  "id": "a6-015",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "The pilot checklist says to stop an application when the wind is too calm. Below what wind speed is it usually considered too calm?",
  "choices": [
   "10 mph",
   "2 mph",
   "5 mph",
   "8 mph"
  ],
  "answer": 1,
  "explanation": "Rising winds or other adverse weather that creates a drift hazard stops the application, and so does dead air: wind usually under 2 mph is too calm to apply.",
  "page": "85",
  "manual": "aerial"
 },
 {
  "id": "a6-016",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "When may dispersal equipment be switched on or the flow volume be checked?",
  "choices": [
   "On the ground before takeoff, with the tank filled",
   "During the first turnaround, once the aircraft is level and clear",
   "Only while over the area being treated",
   "Only during the ferry flight out to the field"
  ],
  "answer": 2,
  "explanation": "Dispersal equipment is never turned on, and flow volume is never checked, except while the aircraft is over the area being treated. Anywhere else that material lands off target.",
  "page": "85",
  "manual": "aerial"
 },
 {
  "id": "a6-017",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "What does the pilot checklist use a smoke generator for at an application site?",
  "choices": [
   "Marking the ends of the swath runs for the pilot",
   "Warning workers in nearby fields that spraying is starting",
   "Measuring the height of wires and other obstructions",
   "Estimating how far and in which direction material may move off the site"
  ],
  "answer": 3,
  "explanation": "A smoke generator or similar device shows the pilot how far and in what direction some of the chemical is likely to travel away from the application site, which is information you need before committing to the job.",
  "page": "85",
  "manual": "aerial"
 },
 {
  "id": "a6-018",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "You notice an equipment malfunction after finishing an application. What does the pilot checklist call for?",
  "choices": [
   "Securely fasten a note in the cockpit so other pilots and the maintenance crew see it",
   "Ground the aircraft until an inspector from the state lead agency examines the equipment",
   "Enter the problem in the application record for that field",
   "Mention it to the ground crew leader at the end of the working day"
  ],
  "answer": 0,
  "explanation": "Any equipment malfunction or problem noticed after an application gets a note fastened securely in the cockpit, which alerts other pilots who may fly the aircraft and the maintenance crew who must fix it.",
  "page": "85",
  "manual": "aerial"
 },
 {
  "id": "a6-019",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Why does the ground crew checklist require tanks and hoppers to be secured tightly?",
  "choices": [
   "So the material stays cool and does not break down during the flight",
   "So pesticide cannot blow back over the pilot or the cockpit",
   "So a shifting load cannot upset the aircraft's balance during a turn",
   "So the tank holds enough pressure for the nozzles to atomize the spray"
  ],
  "answer": 1,
  "explanation": "Loose tanks and hoppers let pesticide escape in flight and blow back over the pilot and the cockpit, so the ground crew secures them tightly as part of loading.",
  "page": "86",
  "manual": "aerial"
 },
 {
  "id": "a6-020",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "When should the ground crew close, secure, and cover the hopper?",
  "choices": [
   "When the pilot signals from the cockpit that takeoff is next",
   "At the end of the work day, when the aircraft is washed down",
   "As soon as loading is completed",
   "After the aircraft has taxied to the end of the strip"
  ],
  "answer": 2,
  "explanation": "The hopper is closed, secured, and covered as soon as loading finishes. The crew also cleans up any pesticide spilled around the tank fill opening rather than leaving it on the aircraft.",
  "page": "86",
  "manual": "aerial"
 },
 {
  "id": "a6-021",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Which flying practice produces the most uniform spray pattern?",
  "choices": [
   "Passes that follow the crop rows whatever their shape",
   "Overlapping circular passes worked inward from the field edge",
   "Alternating long and short passes to cover the field ends",
   "Straight, parallel passes"
  ],
  "answer": 3,
  "explanation": "Straight, parallel passes give the most uniform pattern, and a reliable guidance method such as DGPS marks each swath so coverage stays even without excessive overlap or gaps.",
  "page": "86",
  "manual": "aerial"
 },
 {
  "id": "a6-022",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "On which side of a treatment site should the treatment begin?",
  "choices": [
   "The downwind side",
   "The upwind side",
   "The side with the longest field boundary",
   "The side nearest the loading area, whatever the wind is doing"
  ],
  "answer": 0,
  "explanation": "Starting on the downwind side and working upwind keeps the aircraft out of spray still suspended in the air from swaths already flown.",
  "page": "87",
  "manual": "aerial"
 },
 {
  "id": "a6-023",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Why are application passes normally flown parallel to the longest dimension of the treated area?",
  "choices": [
   "It lets the pilot use a back and forth pattern instead of a racetrack",
   "It reduces the number of turnarounds",
   "It holds the swath width constant across the whole field",
   "It places every pass at right angles to the prevailing wind"
  ],
  "answer": 1,
  "explanation": "Longer passes along the field's longest dimension mean fewer turnarounds. That said, wind and sensitive areas can outweigh field layout: with a road and houses along one border, shorter passes at right angles to the logical direction are worth the extra turns.",
  "page": "87",
  "manual": "aerial"
 },
 {
  "id": "a6-024",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "What is the result of letting airspeed vary during application passes when no electronic flow volume controller is fitted?",
  "choices": [
   "The tank empties before the field is finished",
   "Droplets grow larger and fall short of the target",
   "Coverage becomes uneven",
   "The swath width narrows on every pass"
  ],
  "answer": 2,
  "explanation": "Airspeed must stay constant and consistent with the calibration of the aircraft. Speed changes alter the amount delivered per acre and produce uneven coverage unless an electronic flow volume controller compensates for them.",
  "page": "87",
  "manual": "aerial"
 },
 {
  "id": "a6-025",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "How should passes be flown to avoid the effects of head- and tailwinds on application volume?",
  "choices": [
   "Into the wind on every pass",
   "Downwind on every pass",
   "Alternating into the wind and downwind on successive passes",
   "Crosswind, or 45 degrees to the crosswind"
  ],
  "answer": 3,
  "explanation": "Flying crosswind, or 45 degrees to the crosswind, keeps head- and tailwinds from changing the volume applied. Passes perpendicular or at 45 degrees to the wind also help overlap and coverage uniformity.",
  "page": "87",
  "manual": "aerial"
 },
 {
  "id": "a6-026",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "How far above the crop or tree canopy are liquid pesticides most effective with the least drift trouble?",
  "choices": [
   "8 to 12 feet",
   "2 to 5 feet",
   "15 to 20 feet",
   "45 to 70 feet"
  ],
  "answer": 0,
  "explanation": "Liquid applications work best, with drift least troublesome, when made 8 to 12 feet above the crop or tree canopy. Flying lower cuts drift further but risks uneven streaking because the pattern has no time to fill in.",
  "page": "87",
  "manual": "aerial"
 },
 {
  "id": "a6-027",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Ground effect that lifts spray off the target begins when the aircraft is how close to the ground?",
  "choices": [
   "Less than twice the length of the fuselage",
   "Less than three-fourths of the wing or rotor span",
   "Less than one-half of the wing or rotor span",
   "Less than one and one-half times the wing or rotor span"
  ],
  "answer": 1,
  "explanation": "Flying lower than three-fourths of the wing or rotor span above the ground creates ground effect: air displaced by the aircraft moves upward off the surface, catching and lifting spray and carrying it off target. Trees and other dense foliage reduce the risk.",
  "page": "87",
  "manual": "aerial"
 },
 {
  "id": "a6-028",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Spray is shut off one or two swath widths short of the field ends because of obstructions there. How is the field finished out after all the parallel swaths are done?",
  "choices": [
   "By repeating the first and last swaths at half the normal rate",
   "By treating the ends while dropping in and pulling out of the field",
   "By flying one or two swaths crosswise to the application direction",
   "By flying a single pass around the whole perimeter of the field"
  ],
  "answer": 2,
  "explanation": "With obstructions at the ends of the runs, the spray goes on or off one or two swath widths from the boundary, and once the parallel swaths are complete you fly one or two swaths crosswise to the application direction to cover those untreated ends.",
  "page": "88",
  "manual": "aerial"
 },
 {
  "id": "a6-029",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Why must material never be dispersed while dropping into or pulling out of a field?",
  "choices": [
   "It empties the spray tank faster than the calibrated rate allows for the acreage on the work order",
   "It builds pressure in the boom that can rupture a hose fitting",
   "It leaves the field ends untreated and forces an extra pass",
   "It distorts the deposition pattern, so pesticide drifts or piles up in a small area"
  ],
  "answer": 3,
  "explanation": "Dispersing while climbing out or dropping in distorts the deposition pattern, making the pesticide more likely to drift or to concentrate in a small area instead of depositing evenly across the swath.",
  "page": "88",
  "manual": "aerial"
 },
 {
  "id": "a6-030",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "What does the manual call for alongside buildings, residences, livestock areas, and bodies of water?",
  "choices": [
   "An untreated buffer strip",
   "A single pass at half the labeled rate",
   "A pass flown at reduced airspeed",
   "A crosswise finishing swath along the boundary"
  ],
  "answer": 0,
  "explanation": "For safety, leave an untreated buffer strip next to buildings, residences, livestock areas, bodies of water, and other sensitive areas. Where obstructions run along the sides of a field, fly parallel and only as close to them as is safe.",
  "page": "88",
  "manual": "aerial"
 },
 {
  "id": "a6-031",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "In one method of working around a tree or pole in the middle of a field, why is a 180-degree turn made after flying over the obstruction and before dropping back in to spray?",
  "choices": [
   "It keeps the boom shut off until the field boundary has been crossed",
   "It gives better speed control and keeps the aircraft from overshooting the far side",
   "It positions the aircraft downwind so that spray suspended from the previous pass has time to settle",
   "It lets the pilot check the height of the obstruction on the second pass"
  ],
  "answer": 1,
  "explanation": "Treating a mid-field obstruction like a field end means stopping one or two swath widths short, pulling up over it, then turning 180 degrees to come back from the other direction. That approach gives better control of the aircraft's speed and avoids overshooting the far side, and the area beside the obstacle is finished with one or two swath widths perpendicular to the previous swaths.",
  "page": "88",
  "manual": "aerial"
 },
 {
  "id": "a6-032",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Hills confine an application area and do not permit contour flying. How should the passes be flown?",
  "choices": [
   "Back and forth, alternating up and down the slope",
   "Across the slope while holding a constant altitude above sea level",
   "All in one direction, down slope",
   "All in one direction, up slope"
  ],
  "answer": 2,
  "explanation": "Where hills or mountains box in the area and contour flying is impossible, every pass is flown in the same direction, down slope. Upslope spraying is dangerous. In terrain merely too rugged for uniform altitude and speed, follow the contours of the slopes instead.",
  "page": "89",
  "manual": "aerial"
 },
 {
  "id": "a6-033",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "What advantage does the racetrack pattern usually have over other application patterns?",
  "choices": [
   "It allows the pilot to spray in both directions along the same swath line without a turn",
   "It removes the need to shut the spray off at the field ends",
   "It works better than other patterns in steep, rugged terrain",
   "It is the most energy-efficient and gives spray time to settle"
  ],
  "answer": 3,
  "explanation": "The racetrack pattern is usually the most energy-efficient: it maximizes application time, shortens the time spent turning, minimizes pilot fatigue, and leaves time for spray to settle so the aircraft is less likely to fly through it.",
  "page": "89",
  "manual": "aerial"
 },
 {
  "id": "a6-034",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Why do turnarounds in a fixed-wing aircraft call for particular care?",
  "choices": [
   "A pull up followed by a turn creates a low-speed, high-drag condition that can lead to a stall",
   "The boom keeps dripping through the turn and lays a treated line outside the field boundary",
   "Wind direction changes more sharply above the height of the swath run",
   "The load shifts forward in the hopper and pushes the nose down"
  ],
  "answer": 0,
  "explanation": "Pulling up and then turning puts the aircraft in a low-speed, high-drag condition that can stall it, and poorly flown turnarounds cause a considerable share of aerial application accidents as well as uneven applications, because they leave no time to line up for the next swath.",
  "page": "89",
  "manual": "aerial"
 },
 {
  "id": "a6-035",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "What airspeed does the manual recommend for granule applications from some fixed-wing aircraft?",
  "choices": [
   "130 to 150 mph or faster",
   "100 to 120 mph or faster",
   "60 to 80 mph or faster",
   "80 to 100 mph or faster"
  ],
  "answer": 1,
  "explanation": "Granules from some fixed-wing aircraft call for 100 to 120 mph or faster, with slower speeds for rotary-wing aircraft. These speeds keep airflow through the spreader good enough for proper distribution and maximum swath width.",
  "page": "90",
  "manual": "aerial"
 },
 {
  "id": "a6-036",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "For most granule materials and aircraft, what height above the crop gives the maximum swath width?",
  "choices": [
   "20 to 35 feet",
   "80 to 100 feet",
   "45 to 70 feet",
   "8 to 12 feet"
  ],
  "answer": 2,
  "explanation": "Maximum granule swath width falls in the 45 to 70 foot range for most materials and aircraft, though the exact height varies with the density, size, and grading of the particles.",
  "page": "90",
  "manual": "aerial"
 },
 {
  "id": "a6-037",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Why does flying higher than the effective granule application height fail to widen the swath?",
  "choices": [
   "The spreader turns more slowly in the thinner air at that height",
   "Granules break apart at height and the fine pieces drift away",
   "The heavier particles are carried along in the wake of the aircraft",
   "Particles fall straight down once their lateral energy is gone"
  ],
  "answer": 3,
  "explanation": "Effective height is set by how far the spreader throws the heavier particles sideways. Once that lateral energy dissipates, particles fall vertically, so extra height buys no swath width and worsens swath displacement. Flying below the effective height is the opposite error: particles reach the ground while still moving sideways.",
  "page": "90",
  "manual": "aerial"
 },
 {
  "id": "a6-038",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "Turnarounds should be kept away from which areas whenever possible?",
  "choices": [
   "Residences, penned livestock, and bodies of water",
   "Fields planted to a taller crop than the one being treated",
   "Roads carrying traffic during daylight hours",
   "Parts of the field that have already been treated"
  ],
  "answer": 0,
  "explanation": "Avoid turning around over residences and other buildings, penned poultry or livestock, livestock watering places, ponds, reservoirs, and other water bodies. Keeping turns away from them limits the nuisance of the noise and sight of the aircraft as well as the risk to what is below.",
  "page": "90",
  "manual": "aerial"
 },
 {
  "id": "a6-039",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "In the rule of thumb for density altitude, what is the standard temperature at sea level and how is it adjusted for elevation?",
  "choices": [
   "70 degrees F, less 2 degrees per thousand feet of elevation",
   "59 degrees F, less 3.5 degrees per thousand feet of elevation",
   "59 degrees F, less 5 degrees per thousand feet of elevation",
   "45 degrees F, less 3.5 degrees per thousand feet of elevation"
  ],
  "answer": 1,
  "explanation": "Standard temperature at sea level is 59 degrees F, and the standard temperature for a site above sea level is found by subtracting 3.5 degrees for every thousand feet of elevation. A site at 2,342 feet, for example, has a standard temperature of about 50.8 degrees F.",
  "page": "91",
  "manual": "aerial"
 },
 {
  "id": "a6-040",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "By the density altitude rule of thumb, how much is added to the field elevation for each 10 degrees F the temperature is above the standard temperature for that elevation?",
  "choices": [
   "1,000 feet",
   "1,200 feet",
   "600 feet",
   "300 feet"
  ],
  "answer": 2,
  "explanation": "Add 600 feet to the field elevation for every 10 degrees F above the site's standard temperature, and subtract 600 feet for every 10 degrees F below it. The result tells you to handle the aircraft as you would on a standard day at that higher elevation.",
  "page": "91",
  "manual": "aerial"
 },
 {
  "id": "a6-041",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "An aircraft is loaded with spray material and the density altitude increases. What happens to its performance?",
  "choices": [
   "Rate of climb improves while takeoff distance grows",
   "True airspeed on approach drops and the landing roll shortens",
   "The service ceiling rises even though engine horsepower falls off",
   "Takeoff distance and landing roll both get longer"
  ],
  "answer": 3,
  "explanation": "For a loaded aircraft, higher density altitude means a longer takeoff distance, a reduced rate of climb, higher true airspeed on approach and landing, a longer landing roll, and a limited service ceiling en route.",
  "page": "92",
  "manual": "aerial"
 },
 {
  "id": "a6-042",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "High temperatures can make midday flying hazardous, so applications may be shifted to early morning. What drawback comes with that choice?",
  "choices": [
   "Early morning is a typical time for temperature inversions",
   "Engine power is at its lowest when the air is coolest",
   "Dew on the canopy keeps granules from reaching the soil",
   "Wind speeds are at their strongest in the hour after sunrise"
  ],
  "answer": 0,
  "explanation": "During hot spells it can be safer to fly in the early morning while temperatures, and therefore density altitude, are lower. The tradeoff is that early morning is when temperature inversions typically form in many areas.",
  "page": "92",
  "manual": "aerial"
 },
 {
  "id": "a6-043",
  "section": 6,
  "sectionName": "Making an Aerial Pesticide Application",
  "question": "What does S.A.F.E. stand for in the aerial application program Operation S.A.F.E.?",
  "choices": [
   "Standards for Aviation and Field Efficiency",
   "Self-Regulating Application and Flight Efficiency",
   "Safe Aerial Flight and Environment",
   "Spray Accuracy and Flight Evaluation"
  ],
  "answer": 1,
  "explanation": "Operation S.A.F.E., developed by members of the National Agricultural Aviation Association in response to public concern about spray drift, stands for Self-Regulating Application and Flight Efficiency. Its backbone is the professional application analysis clinic, or fly-in, where a trained analyst checks an aircraft's swath pattern.",
  "page": "93",
  "manual": "aerial"
 },
 {
  "id": "a7-001",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "When the FAA evaluates whether an applicant can comply with Part 137, which three categories does it look at?",
  "choices": [
   "The pilot, the pesticide products used, and the customers served",
   "The aircraft, the airstrip facilities, and the ground crew",
   "The pilot, the aircraft, and the operation",
   "The operator, the state lead agency, and the local airport authority"
  ],
  "answer": 2,
  "explanation": "The FAA judges the pilot, the aircraft, and the operation. An applicant then has to pass all five phases of the process: pre-application, formal application, document compliance, demonstration and inspection, and certification.",
  "page": "101",
  "manual": "aerial"
 },
 {
  "id": "a7-002",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "Someone who has already run an agricultural aircraft operation and knows the certification requirements and paperwork may be able to skip which phase?",
  "choices": [
   "Formal application",
   "Pre-application",
   "Document compliance",
   "Demonstration and inspection"
  ],
  "answer": 1,
  "explanation": "Pre-application is an informal meeting that gives an overview of certification and points out useful resources. An applicant already familiar with all of the requirements and the documentation needed, such as a former agricultural aircraft operator, may not need that meeting; the remaining phases still apply.",
  "page": "101",
  "manual": "aerial"
 },
 {
  "id": "a7-003",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "A letter of intent is prepared with an operator certificate application. What must it state about the certificate being sought?",
  "choices": [
   "The number of acres expected to be treated in the first season",
   "Whether the certificate sought is commercial or private",
   "The counties in which the certificate will be exercised",
   "The pesticide categories the state applicator license will carry"
  ],
  "answer": 1,
  "explanation": "The letter of intent names the specific type of agricultural aircraft operator certificate applied for, commercial or private. It also gives the legal company name and any doing-business-as names, the address of the home base of operations, and the primary airport address, mailing address, and telephone numbers.",
  "page": "101",
  "manual": "aerial"
 },
 {
  "id": "a7-004",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "What goes to the FAA Flight Standards District Office at the formal application stage?",
  "choices": [
   "One signed copy of FAA Form 8710-3 and a copy of the pilot certificate",
   "Two copies of FAA Advisory Circular 137-1A and the letter of intent",
   "Three copies of FAA Form 8710-3 and the letter of intent if one applies",
   "Three copies of FAA Form 137-19 and the state applicator credential"
  ],
  "answer": 2,
  "explanation": "Formal application means filling out and submitting three copies of FAA Form 8710-3, the Agricultural Aircraft Operator Certificate Application, together with the letter of intent when one is required and any other requested documents. The form comes from the local FSDO or the FAA web site.",
  "page": "102",
  "manual": "aerial"
 },
 {
  "id": "a7-005",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "How quickly is an operator certificate application reviewed, and how is the applicant told the outcome?",
  "choices": [
   "Within 30 business days, and the applicant is told in writing",
   "Within 10 business days, and the applicant is told in writing",
   "Within 30 business days, with a phone call only if something is missing",
   "Within 90 calendar days, and the applicant hears back only if it is rejected"
  ],
  "answer": 0,
  "explanation": "The certification team assigned to the applicant reviews the application and its supporting documents within 30 business days of receiving them, then notifies the applicant in writing whether it is accepted or rejected.",
  "page": "102",
  "manual": "aerial"
 },
 {
  "id": "a7-006",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "An operator certificate application is returned because it was filled out incorrectly. What happens next?",
  "choices": [
   "The certification process keeps moving forward while the missing items are supplied",
   "The FSDO forwards it to the state lead agency, which completes it for the applicant",
   "Every item listed in the team's letter must be corrected before certification goes on",
   "The applicant waits 30 business days and then files a completely new application"
  ],
  "answer": 2,
  "explanation": "An application that is inaccurate, improperly completed, or missing required documentation is sent back with a letter listing the unsatisfactory items, and the certification process does not continue until those items are corrected.",
  "page": "102",
  "manual": "aerial"
 },
 {
  "id": "a7-007",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "What aircraft must be presented for inspection during the demonstration and inspection phase?",
  "choices": [
   "Every aircraft named in the application, each with its maintenance records aboard",
   "At least one certificated, airworthy aircraft equipped for agricultural work",
   "At least two aircraft, so that a spare is available during the season",
   "None; this phase covers only the base of operations and its records"
  ],
  "answer": 1,
  "explanation": "At least one certificated and airworthy aircraft equipped for aerial agricultural work, and that will actually be used in the pest control operation, has to be available for inspection. An Airworthiness Inspector verifies that it is properly certificated, that its inspection status is current, and that it is safe to operate.",
  "page": "102",
  "manual": "aerial"
 },
 {
  "id": "a7-008",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "Aircraft condition and airworthiness, facilities, and the applicant's knowledge and skills are three of the five areas inspectors examine. What are the other two?",
  "choices": [
   "The record keeping system and how personnel learn their duties",
   "Insurance coverage and the logbooks of every pilot employed",
   "The pesticide storage inventory and the signed customer contracts",
   "Ground crew credentials and the fuel supplier's delivery records"
  ],
  "answer": 0,
  "explanation": "The five areas are the commercial applicator record keeping system in use, the methods used to inform personnel of their duties and responsibilities, aircraft condition and airworthiness, facilities where they apply, and the applicant's own knowledge and skills.",
  "page": "102",
  "manual": "aerial"
 },
 {
  "id": "a7-009",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "How long must the operation records kept for an aerial application business be retained?",
  "choices": [
   "At least 6 months",
   "At least 12 months",
   "At least 24 months",
   "At least 5 years"
  ],
  "answer": 1,
  "explanation": "The law sets a floor of 12 months for these operation records, and they may have to be kept longer. Record keeping requirements vary from state to state, so check the rules where the business operates.",
  "page": "102",
  "manual": "aerial"
 },
 {
  "id": "a7-010",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "What must an aerial application operation's records show for each pilot used in agricultural aircraft operations?",
  "choices": [
   "Name, address, total flight hours, and the date of the pilot's most recent flight review",
   "Name, address, certificate number, and the date the knowledge and skills test was met",
   "Name, certificate number, and the pesticide categories on the pilot's state license",
   "Name, medical certificate class, and the number of acres the pilot treated that year"
  ],
  "answer": 1,
  "explanation": "For every pilot the records carry name, address, and certificate number plus the date the pilot met the knowledge and skills requirements of 14 CFR 137.19(e). The same records also name each customer served, the date of the service, and the name and quantity of material dispensed on each operation.",
  "page": "102",
  "manual": "aerial"
 },
 {
  "id": "a7-011",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "An operator must document that everyone employed in the operation has been informed of their duties and responsibilities. Which existing records satisfy part of that?",
  "choices": [
   "The recurring security awareness briefing records recommended for aerial businesses",
   "The pesticide handler training documentation required by the Worker Protection Standard",
   "The state lead agency's roster of certified applicators working for the operation",
   "The hazard communication file the company keeps for its maintenance shop"
  ],
  "answer": 1,
  "explanation": "Inspectors want documentation showing how each employee was told what their duties and responsibilities in the operation are. The EPA Worker Protection Standard's requirement to document pesticide handler training meets some of that obligation.",
  "page": "103",
  "manual": "aerial"
 },
 {
  "id": "a7-012",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "Questions come up about the load jettisoning capability of a fixed-wing aircraft used in congested-area operations. What must the jettisoning test data show?",
  "choices": [
   "It can jettison its entire maximum authorized load within 45 seconds of the command",
   "It can jettison at least half of its maximum authorized load within 45 seconds",
   "It can jettison at least half of its maximum authorized load within 30 seconds",
   "It can jettison at least a quarter of its maximum authorized load within 60 seconds"
  ],
  "answer": 1,
  "explanation": "The test data must show a device able to jettison at least one-half of the aircraft's maximum authorized load of agricultural material within 45 seconds. Jettisoning requirements do not apply to rotary-wing aircraft.",
  "page": "103",
  "manual": "aerial"
 },
 {
  "id": "a7-013",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "Which rules govern the type of facilities an agricultural aircraft operator must have?",
  "choices": [
   "FAA regulations, which specify minimum hangar, loading pad, and washrack standards",
   "State and local regulations, with EPA regulations covering some requirements",
   "The FSDO certification team's judgment, decided case by case at the base inspection",
   "The aircraft manufacturer's operating handbook for the model being flown"
  ],
  "answer": 1,
  "explanation": "FAA regulations do not specify what kind of facilities an agricultural operator must have. State and local regulations do, and EPA regulations address them to some extent. The FAA facilities inspection only verifies that practices and procedures at the base of operations conform to FAA regulations.",
  "page": "103",
  "manual": "aerial"
 },
 {
  "id": "a7-014",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "Who is the testing candidate for the knowledge and skills test given during initial certification?",
  "choices": [
   "Every pilot the operation employs, before the certificate is issued",
   "The applicant, or the chief supervisor the applicant designates",
   "The applicant only, and only for a commercial operating certificate",
   "The chief supervisor only, and only when the applicant is a corporation"
  ],
  "answer": 1,
  "explanation": "Section 137.19(e) makes the applicant or a designated chief supervisor the candidate for the knowledge and skills test the Operations Inspector conducts, and this applies whether the certificate sought is private or commercial. A pilot previously qualified under part 137 may not have to take the test if proper documentation exists.",
  "page": "103",
  "manual": "aerial"
 },
 {
  "id": "a7-015",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "The knowledge test covers the aircraft's stall speeds under which set of conditions?",
  "choices": [
   "At normal operating weight, in a 30-degree banked turn, power on, and flaps down",
   "At maximum certificated gross weight, straight ahead, power off, and flaps up",
   "At maximum certificated gross weight, in a level turn, power on, and flaps up",
   "At empty weight, straight ahead, power off, and flaps fully extended"
  ],
  "answer": 1,
  "explanation": "Required performance knowledge includes stall speeds at maximum certificated gross weight, straight ahead, power off, and flaps up, plus best rate and best angle of climb speeds, maneuvering speeds, and how density altitude affects performance.",
  "page": "103",
  "manual": "aerial"
 },
 {
  "id": "a7-016",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "Takeoff knowledge includes the distance needed, at maximum certificated gross weight with zero wind, to clear an obstacle of what height?",
  "choices": [
   "50 feet",
   "25 feet",
   "75 feet",
   "100 feet"
  ],
  "answer": 0,
  "explanation": "The candidate has to know the takeoff distance the aircraft needs to clear a 50-foot obstacle at maximum certificated gross weight with zero wind, along with the aircraft's other performance capabilities and operating limitations.",
  "page": "104",
  "manual": "aerial"
 },
 {
  "id": "a7-017",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "How are the aircraft's tanks or hoppers loaded for the skills test?",
  "choices": [
   "Empty, so that the aircraft handles predictably through the maneuvers",
   "With a suitable inert material such as water, lime, or sand",
   "With the pesticide the operation applies most often, at label rate",
   "With fuel alone, brought up to maximum certificated gross weight"
  ],
  "answer": 1,
  "explanation": "The skills test is flown with the tanks or hoppers loaded using a suitable inert material such as water, lime, or sand. The examiner grades piloting skill and operational judgment on items ranging from ground crew coordination and loading through swath runs, pull ups and turnarounds, landing, and securing the aircraft.",
  "page": "104",
  "manual": "aerial"
 },
 {
  "id": "a7-018",
  "section": 7,
  "sectionName": "Appendix 2: FAA Requirements for Agricultural Aircraft Operators",
  "sectionLabel": "app. 2",
  "question": "Which maneuver on the skills test is evaluated only in rotary-wing aircraft?",
  "choices": [
   "Short-field and soft-field takeoffs",
   "Rapid deceleration, or quick stops",
   "Clean-up swath and trim passes",
   "Pull ups and turnarounds"
  ],
  "answer": 1,
  "explanation": "Rapid deceleration or quick stops is the rotary-wing item, just as short-field and soft-field takeoffs are the fixed-wing item. Swath runs, trim passes, pull ups, turnarounds, and jettisoning the remainder of a load during an in-flight emergency are graded for both kinds of aircraft.",
  "page": "104",
  "manual": "aerial"
 },
 {
  "id": "a8-001",
  "section": 8,
  "sectionName": "Appendix 3: Heat Stress",
  "sectionLabel": "app. 3",
  "question": "Before starting a pesticide-handling task, which set of conditions should be weighed for the risk of heat stress?",
  "choices": [
   "Heat factors, workload, PPE, drinking water intake, and scheduling",
   "Temperature, wind speed, boom pressure, workload, and time of the last meal",
   "Humidity, sunlight, respirator fit, body weight, and hours since the last break",
   "Heat factors, altitude, glove material, caffeine intake, and physical fitness"
  ],
  "answer": 0,
  "explanation": "Several things work together to cause heat stress: the heat factors of temperature, humidity, air movement, and sunlight; the workload, meaning how much effort the task takes; the personal protective equipment worn; how much water is being drunk; and how the work is scheduled.",
  "page": "105",
  "manual": "aerial"
 },
 {
  "id": "a8-002",
  "section": 8,
  "sectionName": "Appendix 3: Heat Stress",
  "sectionLabel": "app. 3",
  "question": "What effect does air movement from wind or a fan have on the risk of heat stress?",
  "choices": [
   "It raises the risk by carrying more warm air against the skin",
   "It may cool the worker and lower the risk",
   "It has no effect once the humidity is high",
   "It helps only when the air temperature is below 90 degrees F"
  ],
  "answer": 1,
  "explanation": "High temperature, high humidity, and sunlight all raise the likelihood of heat stress, but air movement, whether from wind or from fans, may provide cooling.",
  "page": "105",
  "manual": "aerial"
 },
 {
  "id": "a8-003",
  "section": 8,
  "sectionName": "Appendix 3: Heat Stress",
  "sectionLabel": "app. 3",
  "question": "Two crew members do similar pesticide work in the same weather, one on foot and one from a vehicle. Which is more likely to develop heat stress?",
  "choices": [
   "The one driving, because the cab traps heat and blocks air movement",
   "The one on foot, because hard work makes the body produce heat",
   "The one driving, because sitting slows blood flow to the skin",
   "Neither; heat stress depends only on temperature, humidity, and sunlight"
  ],
  "answer": 1,
  "explanation": "Hard work makes the body generate heat, so someone working on foot is more likely to develop heat stress than someone driving a vehicle. Lifting or carrying heavy containers or equipment raises the likelihood of overheating the same way.",
  "page": "105",
  "manual": "aerial"
 },
 {
  "id": "a8-004",
  "section": 8,
  "sectionName": "Appendix 3: Heat Stress",
  "sectionLabel": "app. 3",
  "question": "Severe heat stress, or heat stroke, is fatal to what share of its victims, even young and healthy ones?",
  "choices": [
   "More than 10 percent",
   "Less than 1 percent",
   "About 2 percent",
   "About 30 percent"
  ],
  "answer": 0,
  "explanation": "More than 10 percent of severe heat stress victims die, and being a young, healthy adult is no protection. Those who survive may remain sensitive to heat for months and may be unable to return to the same kind of work.",
  "page": "105",
  "manual": "aerial"
 },
 {
  "id": "a8-005",
  "section": 8,
  "sectionName": "Appendix 3: Heat Stress",
  "sectionLabel": "app. 3",
  "question": "What causes the painful muscle spasms in the legs, arms, or stomach known as heat cramps?",
  "choices": [
   "Lactic acid building up in muscles worked hard in the heat",
   "Loss of body salts through heavy sweating",
   "Pesticide absorbed through skin softened by sweat",
   "Blood diverted away from the muscles to cool the skin"
  ],
  "answer": 1,
  "explanation": "Heat cramps come from losing body salts through heavy sweating. Drinking cool water relieves them, and stretching or kneading the muscle may give temporary relief.",
  "page": "105",
  "manual": "aerial"
 },
 {
  "id": "a8-006",
  "section": 8,
  "sectionName": "Appendix 3: Heat Stress",
  "sectionLabel": "app. 3",
  "question": "A handler has stomach cramps that could be from salt loss or could be pesticide-related. What is the right response?",
  "choices": [
   "Give salt tablets and watch the worker for an hour",
   "Get medical help right away",
   "Knead the abdomen and rest in the shade until it eases",
   "See whether cool water relieves them before calling anyone"
  ],
  "answer": 1,
  "explanation": "Stomach cramps that may be pesticide-related rather than caused by salt loss call for immediate medical help. Heat stress illness and pesticide poisoning produce many of the same signs, so get help instead of spending time deciding which one it is.",
  "page": "105",
  "manual": "aerial"
 },
 {
  "id": "a8-007",
  "section": 8,
  "sectionName": "Appendix 3: Heat Stress",
  "sectionLabel": "app. 3",
  "question": "When sponging or splashing cool water on a heat stress victim, which areas get the most attention?",
  "choices": [
   "The chest, back, and abdomen",
   "The face, neck, hands, and forearms",
   "The scalp and the soles of the feet",
   "The thighs and the small of the back"
  ],
  "answer": 1,
  "explanation": "Cool the victim as rapidly as possible by sponging or splashing the skin with cool water, especially around the face, neck, hands, and forearms, or by immersing the person in cool water when that is possible.",
  "page": "106",
  "manual": "aerial"
 },
 {
  "id": "a8-008",
  "section": 8,
  "sectionName": "Appendix 3: Heat Stress",
  "sectionLabel": "app. 3",
  "question": "What is done with a heat stress victim's personal protective equipment during first aid?",
  "choices": [
   "Leave it on until medical help arrives, to avoid pesticide exposure",
   "Carefully take off all PPE and other clothing making the person hot",
   "Take off the respirator and gloves but leave the coveralls in place",
   "Loosen it at the neck and wrists but keep the whole outfit on"
  ],
  "answer": 1,
  "explanation": "Carefully remove all PPE and any other clothing that is keeping the victim hot, because the same clothing that blocks pesticide contact also blocks the body from cooling itself.",
  "page": "106",
  "manual": "aerial"
 },
 {
  "id": "a8-009",
  "section": 8,
  "sectionName": "Appendix 3: Heat Stress",
  "sectionLabel": "app. 3",
  "question": "A conscious heat stress victim is waiting for medical help to arrive. What should be done in the meantime?",
  "choices": [
   "Have the person drink as much cool water as possible and stay quiet",
   "Offer small sips of a salty sports drink and walk the person in the shade",
   "Give warm sweetened liquids and keep the person talking",
   "Withhold all fluids until medical personnel can assess the person"
  ],
  "answer": 0,
  "explanation": "A conscious victim should drink as much cool water as possible and be kept quiet until help arrives. Severe heat stress is a medical emergency: without immediate cooling, brain damage and death may follow.",
  "page": "106",
  "manual": "aerial"
 },
 {
  "id": "a9-001",
  "section": 9,
  "sectionName": "Appendix 4: Steps to Follow in Cleaning Up a Pesticide Spill",
  "sectionLabel": "app. 4",
  "question": "Where does an applicator find out which personal protective equipment to wear while cleaning up a pesticide spill?",
  "choices": [
   "On the label of the spilled pesticide",
   "In the state spill response rule for that chemical class",
   "From whatever the spill kit at the mixing site contains",
   "In the firefighting section of the Material Safety Data Sheet"
  ],
  "answer": 0,
  "explanation": "The label of the spilled product states the PPE needed for cleaning up a spill. The area is then cleared of unprotected people, and anyone who received or may have received an exposure gets first aid and medical care.",
  "page": "107",
  "manual": "aerial"
 },
 {
  "id": "a9-002",
  "section": 9,
  "sectionName": "Appendix 4: Steps to Follow in Cleaning Up a Pesticide Spill",
  "sectionLabel": "app. 4",
  "question": "A pesticide spill is a large one. What does that change about the response?",
  "choices": [
   "Flush it with water until the material is diluted below label rates",
   "Contact local authorities for help managing it",
   "Cover it with soil and return with absorbent the next day",
   "Wait for the manufacturer's representative before touching it"
  ],
  "answer": 1,
  "explanation": "Large spills call for local authorities to be brought in to help manage the spill, prevent injuries, and protect the environment.",
  "page": "107",
  "manual": "aerial"
 },
 {
  "id": "a9-003",
  "section": 9,
  "sectionName": "Appendix 4: Steps to Follow in Cleaning Up a Pesticide Spill",
  "sectionLabel": "app. 4",
  "question": "Which spill cleanup step addresses the danger of fire?",
  "choices": [
   "Spreading fire-retardant foam over the spilled material",
   "Extinguishing sources of ignition and providing ventilation",
   "Wetting the spill so that vapors cannot reach an ignition source",
   "Moving nearby pesticide containers upwind of the spill"
  ],
  "answer": 1,
  "explanation": "Fires are prevented at a spill by putting out sources of ignition and providing adequate ventilation. That comes before controlling and containing the release.",
  "page": "107",
  "manual": "aerial"
 },
 {
  "id": "a9-004",
  "section": 9,
  "sectionName": "Appendix 4: Steps to Follow in Cleaning Up a Pesticide Spill",
  "sectionLabel": "app. 4",
  "question": "The flow from a leaking pesticide container has been stopped. What does containing the release involve?",
  "choices": [
   "Hosing the area down and steering the runoff into a drainage ditch",
   "Confining it with sand or other absorbent, then patching or emptying the container",
   "Covering the spill with plastic sheeting and leaving it for a disposal contractor",
   "Neutralizing the pesticide with household bleach before absorbing it"
  ],
  "answer": 1,
  "explanation": "Containment keeps the pesticide confined with sand or another absorbent, and the leaking container is then patched or its contents transferred to a sound container.",
  "page": "107",
  "manual": "aerial"
 },
 {
  "id": "a9-005",
  "section": 9,
  "sectionName": "Appendix 4: Steps to Follow in Cleaning Up a Pesticide Spill",
  "sectionLabel": "app. 4",
  "question": "Spilled pesticide and contaminated soil have been sealed into a holding container. What must be marked on it?",
  "choices": [
   "The pesticide name, the EPA registration number, and the date of the spill",
   "The pesticide name, the signal word, and the responsible party's name",
   "The signal word, the volume recovered, and the property owner's name",
   "The pesticide name, the site treated, and the applicator's license number"
  ],
  "answer": 1,
  "explanation": "Spilled pesticide, absorbent, and contaminated objects go into a sealable, suitable holding container, and the container is clearly labeled with the pesticide name, the signal word, and the name of the responsible party.",
  "page": "107",
  "manual": "aerial"
 },
 {
  "id": "a9-006",
  "section": 9,
  "sectionName": "Appendix 4: Steps to Follow in Cleaning Up a Pesticide Spill",
  "sectionLabel": "app. 4",
  "question": "Who should be consulted about managing the contaminated area and disposing of recovered product, soil, and absorbents?",
  "choices": [
   "The county extension agent, using the operation's own application records",
   "The state regulatory agency, along with the product label and its MSDS",
   "The dealer who sold the pesticide, and the local fire marshal",
   "The EPA regional office, which must approve the disposal beforehand"
  ],
  "answer": 1,
  "explanation": "Managing the contaminated area starts with the product label and the Material Safety Data Sheet for that product. The state regulatory agency then says how the release is to be managed and how recovered product, contaminated soil, and absorbents are to be disposed of.",
  "page": "107",
  "manual": "aerial"
 },
 {
  "id": "a10-001",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "What information does a GPS receiver installed in an application aircraft provide to the pilot?",
  "choices": [
   "The aircraft's speed, direction of travel, altitude, and location",
   "Wind speed, wind direction, air temperature, and relative humidity",
   "Swath width, nozzle pressure, boom height, and flow rate",
   "Ground speed, fuel remaining, engine load, and cylinder temperature"
  ],
  "answer": 0,
  "explanation": "The receiver picks up satellite signals that tell the pilot the aircraft's speed, its direction of travel, and its altitude and location, which is what makes GPS one of the most accurate navigation methods for aerial pesticide application.",
  "page": "108",
  "manual": "aerial"
 },
 {
  "id": "a10-002",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "Recent studies put the share of U.S. agricultural pilots using GPS equipment at what level?",
  "choices": [
   "At least 92 percent",
   "About 45 percent",
   "About 65 percent",
   "Just under 80 percent"
  ],
  "answer": 0,
  "explanation": "Studies indicate that at least 92 percent of agricultural pilots in the United States use GPS equipment; in most cases it is an essential tool for precision aerial application.",
  "page": "108",
  "manual": "aerial"
 },
 {
  "id": "a10-003",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "How many GPS satellites must a receiver detect at once to fix its exact location, and what does the extra one do?",
  "choices": [
   "Three; the third checks the time signals from the other two",
   "Four; the fourth verifies the time signals from the other three",
   "Four; the fourth supplies the altitude the other three cannot give",
   "Five; the fifth corrects for ionospheric delay in the other signals"
  ],
  "answer": 1,
  "explanation": "The receiver has to detect identification signals from four different satellites at the same time. Signal travel times from three of them are the basis for calculating three-dimensional position, and the fourth satellite verifies the time signals of those three.",
  "page": "108",
  "manual": "aerial"
 },
 {
  "id": "a10-004",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "How many satellites make up the GPS space segment, and how often does each circle the Earth?",
  "choices": [
   "24 satellites, each completing one orbit every 12 hours",
   "24 satellites, each completing one orbit every 24 hours",
   "18 satellites, each completing one orbit every 12 hours",
   "30 satellites, each completing one orbit every 6 hours"
  ],
  "answer": 0,
  "explanation": "The space segment is a constellation of 24 Earth-orbiting satellites, a job the Department of Defense started in February 1989 and finished in June 1993. Each satellite completes one orbit every 12 hours.",
  "page": "108",
  "manual": "aerial"
 },
 {
  "id": "a10-005",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "How many GPS satellites can a user reach at any one time?",
  "choices": [
   "Between five and eight",
   "Exactly four",
   "Between two and three",
   "Between twelve and fifteen"
  ],
  "answer": 0,
  "explanation": "The satellites fly in six orbital paths spaced 60 degrees apart, each inclined about 55 degrees to the Earth's equatorial plane. That arrangement puts between five and eight satellites within reach of a user at any given moment.",
  "page": "108",
  "manual": "aerial"
 },
 {
  "id": "a10-006",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "What does the master control station at Colorado Springs do for the GPS system?",
  "choices": [
   "It broadcasts the coarse acquisition signal that civilian receivers use",
   "It sends orbital location and clock corrections to all the satellites",
   "It relays position corrections directly to each user's GPS receiver",
   "It schedules the launches that replace satellites as they wear out"
  ],
  "answer": 1,
  "explanation": "The control segment is five Earth-based tracking stations that monitor the satellites and determine precise orbit data. Colorado Springs is the master station, and it uplinks orbital location and clock corrections so each satellite can pass current location and time data to users' receivers.",
  "page": "108",
  "manual": "aerial"
 },
 {
  "id": "a10-007",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "What horizontal accuracy does the coarse acquisition (C/A) signal typically deliver?",
  "choices": [
   "About plus or minus 100 feet",
   "About plus or minus 33 feet",
   "About plus or minus 10 feet",
   "About plus or minus 3 feet"
  ],
  "answer": 0,
  "explanation": "Each satellite broadcasts on two microwave channels: a strong one reserved for the military and the weaker coarse acquisition signal open to nonmilitary users. C/A alone gives roughly plus or minus 100 feet of horizontal accuracy, which is not precise enough for aerial pesticide application.",
  "page": "109",
  "manual": "aerial"
 },
 {
  "id": "a10-008",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "With a strong differential correction signal, DGPS narrows the horizontal error to what range?",
  "choices": [
   "Less than three feet to rarely more than ten feet",
   "Less than ten feet to rarely more than thirty feet",
   "Less than one foot to rarely more than three feet",
   "Less than twenty feet to rarely more than fifty feet"
  ],
  "answer": 0,
  "explanation": "Differential GPS with a strong correction signal brings the horizontal error down to between less than three feet and rarely more than ten feet, which is why aerial applicators use DGPS rather than plain GPS.",
  "page": "109",
  "manual": "aerial"
 },
 {
  "id": "a10-009",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "How does a differential GPS installation differ from ordinary GPS?",
  "choices": [
   "It uses two receivers, one fixed at a surveyed reference site",
   "It uses two receivers, both carried on the aircraft for redundancy",
   "It uses one receiver tuned to the military channel as well as C/A",
   "It uses one receiver plus a radar altimeter for vertical reference"
  ],
  "answer": 0,
  "explanation": "Regular GPS needs only one receiver, while DGPS needs two. One stays fixed at an accurately surveyed location as the reference point, and the aircraft carries the second, mobile receiver whose position the reference data refines.",
  "page": "109",
  "manual": "aerial"
 },
 {
  "id": "a10-010",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "The stationary DGPS reference receiver cannot tell which satellites the aircraft is using. How does the system work around that?",
  "choices": [
   "The aircraft radios its list of satellites to the reference station",
   "It corrects every satellite it can detect and sends all the data",
   "The reference station corrects only the four strongest satellites",
   "The master control station assigns both receivers the same satellites"
  ],
  "answer": 1,
  "explanation": "The fixed receiver detects all accessible satellites, computes a timing signal correction factor for each one, and transmits the whole set to the aircraft's mobile receiver, which sorts out the data for the satellites it is actually using.",
  "page": "109",
  "manual": "aerial"
 },
 {
  "id": "a10-011",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "By which two methods do DGPS providers deliver correction signals to mobile receivers?",
  "choices": [
   "FM radio tower beacons and communication satellite relay",
   "Cellular telephone networks and shortwave radio broadcasts",
   "Satellite-to-satellite crosslinks and VHF airband radio",
   "Fiber-optic ground links and low-frequency loran transmitters"
  ],
  "answer": 0,
  "explanation": "Corrections travel over a wide-range communication network in two predominant ways: FM radio tower beacons, as with the Coast Guard and Nationwide DGPS services, and communication satellite relay, as with WAAS and commercial DGPS services.",
  "page": "109",
  "manual": "aerial"
 },
 {
  "id": "a10-012",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "Which errors does the Wide Area Augmentation System correct?",
  "choices": [
   "Errors from ionospheric disturbances, timing, and satellite orbits",
   "Errors from magnetic compass deviation and airspeed indicator lag in flight",
   "Errors caused by aircraft attitude changes during steep turns",
   "Errors from terrain masking of the satellites near the horizon"
  ],
  "answer": 0,
  "explanation": "WAAS corrects GPS signal errors caused by ionospheric disturbances, timing, and satellite orbit errors, and it supplies integrity information on the status of each satellite. The FAA and the Department of Transportation developed it for precision flight approaches because GPS alone did not meet FAA requirements for accuracy, integrity, and availability.",
  "page": "109",
  "manual": "aerial"
 },
 {
  "id": "a10-013",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "What ground infrastructure does WAAS rely on?",
  "choices": [
   "About 25 reference stations, plus a master station on each coast",
   "About 65 reference stations, plus a single master station in Colorado",
   "About 80 radio beacon sites, plus two control centers",
   "About 25 reference stations, each transmitting its own corrections"
  ],
  "answer": 0,
  "explanation": "Roughly 25 ground reference stations spread across the United States are linked into the WAAS network. Two master stations, one on the East Coast and one on the West Coast, collect their data and create the correction message.",
  "page": "109",
  "manual": "aerial"
 },
 {
  "id": "a10-014",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "To roughly what accuracy does WAAS improve basic GPS?",
  "choices": [
   "About 28 feet, vertically and horizontally",
   "About 3 feet, vertically and horizontally",
   "About 100 feet horizontally and 28 feet vertically",
   "About 10 feet horizontally and 50 feet vertically"
  ],
  "answer": 0,
  "explanation": "The WAAS correction message goes up to a geostationary communication satellite, which rebroadcasts it on the same GPS frequency to receivers inside the coverage area. That brings basic GPS accuracy to about 28 feet vertically and horizontally and adds integrity information about the system.",
  "page": "110",
  "manual": "aerial"
 },
 {
  "id": "a10-015",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "Why do some users in the United States have trouble receiving WAAS signals?",
  "choices": [
   "Trees or mountains can block their view south toward the equator",
   "The satellites pass overhead too fast for a fixed antenna to track them",
   "The signal shares a frequency band that farm radios interfere with",
   "Coverage stops at the Mississippi River until more satellites are added"
  ],
  "answer": 0,
  "explanation": "WAAS corrections come from geostationary satellites positioned over the equator, so trees or mountains blocking the view of the southern horizon can make the signals hard to receive. Reception is ideal over open land and for marine applications.",
  "page": "110",
  "manual": "aerial"
 },
 {
  "id": "a10-016",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "An aircraft with suitable DGPS receiving equipment is less than 100 miles from a Maritime DGPS reference station. What positioning accuracy can the pilot typically expect?",
  "choices": [
   "About 2.5 feet",
   "About 10 feet",
   "About 33 feet",
   "About 100 feet"
  ],
  "answer": 0,
  "explanation": "The Coast Guard's Maritime DGPS Service positions to within about 33 feet in general, but an aircraft with suitable receiving equipment operating less than 100 miles from a reference station can typically expect about 2.5 feet.",
  "page": "110",
  "manual": "aerial"
 },
 {
  "id": "a10-017",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "Beyond 100 miles from a Maritime DGPS reference station, what happens to positioning accuracy?",
  "choices": [
   "It decays by about 3 feet for every 90 miles of added distance",
   "It decays by about 3 feet for every 10 miles of added distance",
   "It decays by about 10 feet for every 90 miles of added distance",
   "It holds steady until the signal is lost altogether"
  ],
  "answer": 0,
  "explanation": "Past 100 miles the accuracy falls off at roughly 3 feet per 90 miles. Because of that distance-related decay, take satellite corrections from the closest Maritime DGPS reference station for the best positioning data.",
  "page": "110",
  "manual": "aerial"
 },
 {
  "id": "a10-018",
  "section": 10,
  "sectionName": "Appendix 5: Global Positioning Systems",
  "sectionLabel": "app. 5",
  "question": "Each Nationwide DGPS radio beacon site uses a 300-foot tower antenna. How far does its signal reach, and how accurate is it there?",
  "choices": [
   "250 miles, with positional accuracy of about 3 feet or less",
   "250 miles, with positional accuracy of about 30 feet or less",
   "90 miles, with positional accuracy of about 3 feet or less",
   "500 miles, with positional accuracy of about 10 feet or less"
  ],
  "answer": 0,
  "explanation": "The 300-foot tower antenna at each site pushes the signal out 250 miles with enough strength to give about 3 feet of positional accuracy or better. When finished, roughly 80 sites will give every area of the continental United States correction data from two land-based beacons, free of charge.",
  "page": "110",
  "manual": "aerial"
 }
];
