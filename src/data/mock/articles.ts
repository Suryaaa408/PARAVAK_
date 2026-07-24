import { Article } from '@/types';
import { categories } from './categories';
import { tags } from './tags';
import { authors } from './authors';

function tag(slug: string) {
  return tags.find((t) => t.slug === slug)!;
}
function cat(slug: string) {
  return categories.find((c) => c.slug === slug)!;
}
function author(slug: string) {
  return authors.find((a) => a.slug === slug)!;
}

export const articles: Article[] = [
  {
    slug: 'the-problem-of-consciousness-in-advaita-vedanta',
    title: 'The Problem of Consciousness in Advaita Vedānta',
    excerpt:
      'An inquiry into how Śaṅkara\'s metaphysics of pure awareness intersects with — and departs from — contemporary phenomenological accounts of consciousness.',
    body: `The question of consciousness has occupied Western philosophy with renewed urgency since the latter half of the twentieth century. The so-called "hard problem," articulated most sharply by David Chalmers, asks why and how physical processes in the brain give rise to subjective experience. Yet this framing — the assumption that consciousness is something to be *explained* by reducing it to something else — would have struck Śaṅkara as profoundly misguided.

For the Advaitin, consciousness (cit) is not a property of the mind, nor an emergent feature of neural complexity. It is the ground of all appearance, the unchanging witness (sākṣin) before which the play of name and form unfolds. To ask "how does matter produce consciousness?" is, in this framework, to begin from an inversion: it is consciousness that lends apparent reality to matter, not the reverse.

This essay examines three key points of contact between Advaita Vedānta and contemporary philosophy of mind. First, the Advaitin concept of sākṣin and its structural parallels with Husserlian transcendental subjectivity. Second, the critique of representationalism implicit in Śaṅkara's account of perceptual error (adhyāsa). Third, the radical claim that consciousness is self-luminous (svaprakāśa) — a claim that, if taken seriously, undermines the very project of naturalistic explanation.

What emerges is not a simple comparison but a genuine confrontation: two traditions asking the same question and arriving at answers whose divergence reveals the deepest assumptions each carries about the nature of the real.

The concept of svaprakāśatva — self-luminosity — deserves particular attention. When Śaṅkara asserts that consciousness illuminates itself without requiring another light, he is making a claim that resists assimilation into any framework that treats consciousness as an object of inquiry. The inquirer, in Advaita, *is* the inquiry's resolution. This circularity is not a defect but the very structure of the real.

In the Western tradition, the closest analogue may be found in Heidegger's notion of Dasein — the being for whom being is always already an issue. But even here, the parallel is imperfect: Heidegger's Dasein is thrown into a world, finite and temporal, whereas Śaṅkara's ātman is precisely that which is never thrown, never situated, never conditioned.

The implications for contemporary consciousness studies are significant. If the Advaitin is right that consciousness cannot be objectified — cannot be made into a datum for third-person explanation — then the methodological assumptions of cognitive science require not merely supplementation but radical revision.`,
    category: cat('philosophy'),
    tags: [tag('vedanta'), tag('advaita'), tag('phenomenology'), tag('epistemology')],
    author: author('arjun-bhattacharya'),
    publishedAt: '2026-06-15T10:00:00Z',
    date: '15 June 2026',
    estimatedReadTime: 18,
    heroImage: '/images/articles/consciousness-vedanta.jpg',
    type: 'essay',
  },
  {
    slug: 'bhakti-and-the-politics-of-devotion',
    title: 'Bhakti and the Politics of Devotion',
    excerpt:
      'How vernacular devotional movements from the twelfth century onward challenged, negotiated with, and sometimes reinforced structures of social authority.',
    body: `The bhakti movements that swept across the Indian subcontinent between the twelfth and eighteenth centuries are often narrated as stories of spiritual democratisation — the irruption of personal, unmediated devotion against the ritualism and hierarchy of Brahmanical orthodoxy. There is truth in this narrative, but it is incomplete, and its incompleteness distorts our understanding of what bhakti was and what it accomplished.

This essay argues for a more nuanced reading. The relationship between bhakti and social power was never simply oppositional. Devotional poets like Kabīr, Mīrābāī, and Tukārām did indeed challenge caste boundaries and ritual gatekeeping in their verses. But the communities that formed around their teachings often reproduced hierarchies of their own — guru lineages, sectarian boundaries, gendered norms of propriety.

Moreover, the patronage structures that enabled bhakti's flourishing were frequently entangled with political power. The Vijayanagara court's support for Vaiṣṇava institutions, the Maratha state's relationship with the Vārkari tradition, the Mughal court's complex engagement with Sufi and sant poetry — these are not incidental contexts but constitutive conditions.

To read bhakti as pure interiority, detached from the matrices of power within which it operated, is to aestheticise it in ways that serve modern ideological needs more than historical understanding. What is needed is an approach that takes seriously both the transformative sincerity of devotional experience and the political entanglements that shaped its expression.

The figure of Mīrābāī is instructive. Her poetry expresses an almost unbearable intensity of longing for Kṛṣṇa, a willingness to transgress every social boundary for the sake of divine love. Yet the historical Mīrā — insofar as we can reconstruct her — was a Rajput princess whose renunciation was itself a political act, one that was received, transmitted, and transformed by communities with their own interests and agendas.`,
    category: cat('religion'),
    tags: [tag('bhakti'), tag('dharma'), tag('ritual')],
    author: author('meera-krishnamurthy'),
    publishedAt: '2026-06-01T10:00:00Z',
    date: '1 June 2026',
    estimatedReadTime: 15,
    heroImage: '/images/articles/bhakti-politics.jpg',
    type: 'essay',
  },
  {
    slug: 'bhartrhari-and-the-unity-of-word-and-meaning',
    title: 'Bhartṛhari and the Unity of Word and Meaning',
    excerpt:
      'A close reading of the Vākyapadīya\'s radical thesis that language and reality are not merely correlated but ultimately identical.',
    body: `Among the great philosophers of language in any tradition, Bhartṛhari occupies a singular position. Writing in the fifth century CE, his Vākyapadīya advances a thesis so radical that it has resisted easy assimilation into either Indian or Western philosophical categories: the claim that śabda (word/language) and artha (meaning/reality) are, at the deepest level, non-different.

This is not the modest claim that language *represents* reality well, or even the Wittgensteinian insight that the limits of language are the limits of one's world. Bhartṛhari's position is ontological: language is not a tool by which we grasp reality from outside; it is the very medium through which reality constitutes itself as knowable.

The concept at the centre of this vision is śabda-brahman — the ultimate reality conceived as primordial speech. Before any particular utterance, before the differentiation of speaker and hearer, word and object, there is an undivided linguistic potency from which all articulated knowledge emerges and into which it resolves.

For the contemporary philosopher of language, Bhartṛhari poses a challenge that cannot be easily dismissed. If meaning is not a relation between an expression and something external to it — if meaning is, as Bhartṛhari suggests, the very being of the expression — then the entire apparatus of reference, truth-conditions, and model-theoretic semantics requires fundamental rethinking.

This essay traces the argument of the Vākyapadīya's first kāṇḍa (Brahmakāṇḍa) with close attention to its internal logic, and then brings it into conversation with recent work in enactivist philosophy of language — a tradition that, from a very different starting point, has arrived at surprisingly convergent conclusions about the inseparability of linguistic practice and lived meaning.`,
    category: cat('language'),
    tags: [tag('sanskrit'), tag('epistemology'), tag('comparative-philosophy')],
    author: author('raghav-sharma'),
    publishedAt: '2026-05-20T10:00:00Z',
    date: '20 May 2026',
    estimatedReadTime: 22,
    heroImage: '/images/articles/bhartrhari.jpg',
    type: 'essay',
  },
  {
    slug: 'dhvani-and-the-art-of-suggestion',
    title: 'Dhvani and the Art of Suggestion',
    excerpt:
      'Ānandavardhana\'s poetics of dhvani offers a theory of meaning that transcends literal expression — and challenges modern literary theory to reckon with what lies beyond the said.',
    body: `In the ninth century, the Kashmiri aesthetician Ānandavardhana composed the Dhvanyāloka, a treatise that would transform the landscape of Indian literary theory. At its heart is a deceptively simple claim: the highest function of poetry is not what it says but what it suggests.

The concept of dhvani — literally "resonance" or "echo" — names a dimension of meaning that exceeds both the primary (abhidhā) and secondary (lakṣaṇā) signifying powers of language. When a great poet writes, the words carry a meaning that is not contained in any of them individually or even in their syntactic combination. This suggested meaning (vyaṅgyārtha) is, for Ānandavardhana, the soul of poetry (kāvyasyātmā dhvaniḥ).

The implications extend far beyond literary criticism. If language possesses a capacity for meaning that outruns its explicit content — if the most important things a poem communicates are precisely those it does not say — then our theories of meaning, whether Indian or Western, must be revised to accommodate this surplus.

This essay explores dhvani theory in three registers: as a contribution to the philosophy of language, as a theory of aesthetic experience (rasa), and as a model for interpretation that has striking affinities with — but also important differences from — Gadamerian hermeneutics and Derridean deconstruction.

What Ānandavardhana grasped, and what much of contemporary literary theory struggles to articulate, is that the power of great writing lies not in information but in resonance — in the capacity of carefully chosen words to awaken in the reader an experience that the words themselves do not and cannot contain.`,
    category: cat('culture'),
    tags: [tag('aesthetics'), tag('sanskrit'), tag('classical-literature'), tag('hermeneutics')],
    author: author('ananya-iyer'),
    publishedAt: '2026-05-10T10:00:00Z',
    date: '10 May 2026',
    estimatedReadTime: 16,
    heroImage: '/images/articles/dhvani.jpg',
    type: 'essay',
  },
  {
    slug: 'rethinking-dharma-in-the-age-of-rights',
    title: 'Rethinking Dharma in the Age of Rights',
    excerpt:
      'Can the classical concept of dharma survive translation into the modern language of individual rights — or does the attempt destroy precisely what makes it distinctive?',
    body: `The modern discourse of human rights rests on a philosophical anthropology that would have been unintelligible to the classical Indian tradition: the notion of the autonomous individual as the fundamental unit of moral and political life, bearer of inalienable entitlements that precede and constrain all social arrangements.

Dharma, by contrast, is a concept rooted in a radically different ontology. It names not what is owed to the individual but what is owed by and through each situated being to the order of the whole. One's dharma is determined not by an abstract human nature shared by all but by one's particular location in a web of relationships — familial, social, cosmic — each carrying its own obligations and proprieties.

The question this essay addresses is whether these two frameworks can be brought into productive dialogue, or whether the attempt at translation inevitably distorts one or both. Several contemporary thinkers have argued for a "dharmic" foundation for rights — the claim that properly understood, dharma already contains within it the resources for recognising the dignity and worth of every person. Others have argued, more provocatively, that the rights framework is itself a symptom of cultural particularism masquerading as universalism, and that non-Western traditions offer genuine alternatives rather than local variations on a single theme.

This essay resists both moves. It argues instead for an honest confrontation with the points of genuine incommensurability between dharma and rights, not to declare one superior but to illuminate what each renders visible and what each conceals.`,
    category: cat('philosophy'),
    tags: [tag('dharma'), tag('ethics'), tag('modernity'), tag('comparative-philosophy')],
    author: author('vikram-joshi'),
    publishedAt: '2026-04-25T10:00:00Z',
    date: '25 April 2026',
    estimatedReadTime: 14,
    heroImage: '/images/articles/dharma-rights.jpg',
    type: 'essay',
  },
  {
    slug: 'the-body-as-temple',
    title: 'The Body as Temple: Embodied Practice in South Indian Ritual',
    excerpt:
      'An ethnographic meditation on how ritual practitioners in Kerala and Tamil Nadu experience the body not as an obstacle to the sacred but as its primary site.',
    body: `Western approaches to religion have long been shaped by what might be called a "textual bias" — the assumption that the core of any religious tradition is to be found in its doctrines, scriptures, and theological formulations. Ritual, on this view, is either the expression of prior belief or a merely mechanical repetition whose meaning has been forgotten.

Fieldwork among temple ritualists in Kerala and Tamil Nadu reveals a very different understanding. For the tantric priest (tantri) performing the daily pūjā, the body is not a container for a mind that holds beliefs; it is itself the instrument of sacred action. The precise placement of hands in mudrā, the controlled regulation of breath in prāṇāyāma, the internalisation of mantra through repetition until it vibrates not in the throat but in the chest and belly — these are not symbolic representations of spiritual truths. They are the truths themselves, enacted.

This essay draws on three years of ethnographic engagement with ritual communities to argue for what I call "embodied theology" — a mode of theological knowledge that is irreducibly somatic, that cannot be fully captured in propositional form, and that challenges the mind-body dualism embedded in most academic approaches to the study of religion.

The tantric tradition offers a sophisticated philosophical vocabulary for this somatic knowledge: the subtle body (sūkṣma śarīra) with its channels (nāḍī), centres (cakra), and the upward movement of kuṇḍalinī. But the ritualists I worked with rarely invoked this vocabulary in explaining their practice. Instead, they spoke of "knowing in the hands," of a rightness that was felt before it was understood.`,
    category: cat('religion'),
    tags: [tag('ritual'), tag('tantra'), tag('theology')],
    author: author('priya-nair'),
    publishedAt: '2026-04-10T10:00:00Z',
    date: '10 April 2026',
    estimatedReadTime: 19,
    heroImage: '/images/articles/body-temple.jpg',
    type: 'essay',
  },
  {
    slug: 'silence-as-method',
    title: 'Silence as Method: On the Limits of Philosophical Discourse',
    excerpt:
      'When the most rigorous philosophical inquiry arrives at silence, is this a failure of thought or its deepest achievement?',
    body: `There is a persistent motif in the Indian philosophical tradition that has no real parallel in the West: the valorisation of silence not as an absence of speech but as a mode of knowledge superior to anything language can articulate. Dakṣiṇāmūrti, the form of Śiva as the silent teacher, communicates the highest truth to his disciples without uttering a word. The Buddha's "flower sermon" — if it is not entirely apocryphal — makes the same point: the most important transmission happens in the gap between words.

This essay takes this motif seriously as a philosophical position rather than a merely devotional or mystical gesture. It asks: under what conditions is silence a legitimate philosophical method? And what does it mean for the practice of philosophy if the truths it seeks are, in the final analysis, unsayable?

The argument proceeds through three traditions. First, the Māṇḍūkya Upaniṣad's analysis of the four states of consciousness, culminating in turīya — the "fourth" that is not a state at all but the silence underlying all three. Second, Nāgārjuna's systematic deconstruction of all philosophical positions (dṛṣṭi), which clears the ground not for a new position but for a silence that is itself liberating. Third, Wittgenstein's famous injunction — "whereof one cannot speak, thereof one must be silent" — and the question of whether his silence and the Indian silence are the same silence.

What emerges is a philosophical topology of silence: not one undifferentiated muteness but a variety of structured silences, each with its own character and its own relationship to the discourse it interrupts.`,
    category: cat('philosophy'),
    tags: [tag('vedanta'), tag('epistemology'), tag('comparative-philosophy')],
    author: author('arjun-bhattacharya'),
    publishedAt: '2026-03-28T10:00:00Z',
    date: '28 March 2026',
    estimatedReadTime: 17,
    heroImage: '/images/articles/silence-method.jpg',
    type: 'essay',
  },
  // --- Reflections (shorter, timelier) ---
  {
    slug: 'on-the-impossibility-of-translation',
    title: 'On the Impossibility of Translation',
    excerpt:
      'A brief meditation on what is lost when Sanskrit philosophical terms are rendered into English — and whether that loss can be made productive.',
    body: `Every translator of Sanskrit philosophy faces a moment of decision that is also a moment of betrayal. The word "ātman" arrives at your desk and demands an English equivalent. "Self"? Too psychological. "Soul"? Too Christian. "Spirit"? Too Hegelian. Each candidate carries the freight of a different tradition, and none of them is willing to set that freight down.

The temptation is to leave the term untranslated — to write "ātman" and let the reader do the work. But this, too, is a kind of failure: it presumes a reader who already knows what the word means, which is to say, a reader who does not need the translation in the first place.

What we need, perhaps, is not better translations but a different relationship to the untranslatable. The French philosopher Barbara Cassin has argued that the untranslatable is not what cannot be translated but what does not stop (not) being translated — what demands translation precisely because no translation is adequate. This restlessness, rather than any final equivalence, is the productive core of cross-cultural philosophical work.`,
    category: cat('language'),
    tags: [tag('sanskrit'), tag('translation'), tag('hermeneutics')],
    author: author('raghav-sharma'),
    publishedAt: '2026-07-01T10:00:00Z',
    date: '1 July 2026',
    estimatedReadTime: 5,
    heroImage: '/images/articles/translation.jpg',
    type: 'reflection',
  },
  {
    slug: 'reading-kalidasa-today',
    title: 'Reading Kālidāsa Today',
    excerpt:
      'What does it mean to encounter the Meghadūta not as a "classical text" but as a living poem — one that still has the power to move?',
    body: `I returned to the Meghadūta last monsoon, not as a scholar parsing sandhi but as a reader caught in the rain. The poem opened differently. Kālidāsa's yakṣa, exiled and lovesick, asks a passing cloud to carry his message to his beloved in Alakā — a conceit so outlandish that it should collapse under the weight of its own impossibility. And yet it doesn't. The poem works not despite the impossibility but because of it. The distance that separates the yakṣa from his beloved is the distance that generates the poem; remove it, and you remove the longing that is the poem's animating force.

There is a lesson here for how we read classical texts more generally. The academic apparatus — critical editions, commentarial traditions, philological apparatus — is necessary and valuable. But it can also become a barrier, a way of keeping the text at arm's length, safely contained within its historical context. The Meghadūta was not written for philologists. It was written for people who know what it means to miss someone so badly that you would trust a cloud with your words.`,
    category: cat('culture'),
    tags: [tag('classical-literature'), tag('aesthetics'), tag('sanskrit')],
    author: author('ananya-iyer'),
    publishedAt: '2026-06-28T10:00:00Z',
    date: '28 June 2026',
    estimatedReadTime: 6,
    heroImage: '/images/articles/kalidasa.jpg',
    type: 'reflection',
  },
  {
    slug: 'when-the-temple-speaks',
    title: 'When the Temple Speaks',
    excerpt:
      'On the acoustic architecture of South Indian temples and what it reveals about a theology of sound.',
    body: `Stand in the garbhagṛha of the Padmanabhaswamy temple in Thiruvananthapuram during the evening ārati, and you will understand something that no text can teach you. The sound of the bell, the chanting of the priest, the resonance of the stone chamber — these are not accompaniments to worship. They are the worship.

The architects of South Indian temples understood acoustics with a sophistication that we are only beginning to appreciate. The proportions of the sanctum, the curvature of the walls, the placement of the doorway — all these contribute to a sonic environment in which certain frequencies are amplified and others dampened, creating what can only be described as a designed acoustic experience of the sacred.

This is not incidental. The Āgamic texts that govern temple construction speak explicitly of the temple as a yantra — a device for concentrating and directing divine energy. Sound is one of the primary media through which this concentration occurs. The mantra spoken in a properly proportioned garbhagṛha does not merely represent the deity; it becomes, in the theological understanding of the tradition, the deity's sonic body.`,
    category: cat('religion'),
    tags: [tag('ritual'), tag('aesthetics'), tag('theology')],
    author: author('priya-nair'),
    publishedAt: '2026-06-20T10:00:00Z',
    date: '20 June 2026',
    estimatedReadTime: 7,
    heroImage: '/images/articles/temple-speaks.jpg',
    type: 'reflection',
  },
  {
    slug: 'ecology-and-the-sacred',
    title: 'Ecology and the Sacred: Toward a Dharmic Environmentalism',
    excerpt:
      'The environmental crisis demands not just policy but a transformation of our relationship to the natural world — a transformation that dharmic thought has resources to enable.',
    body: `The dominant Western response to environmental crisis has been technocratic: better regulations, cleaner energy, more efficient resource management. These are necessary but insufficient. What they fail to address is the deeper crisis — the ontological crisis — that made ecological destruction possible in the first place: the disenchantment of nature, the reduction of the living world to a stock of resources available for human use.

Indian traditions offer a fundamentally different starting point. The Īśā Upaniṣad opens with a declaration that would, if taken seriously, make ecological devastation inconceivable: "īśāvāsyam idam sarvaṃ" — all this is pervaded by the Lord. Nature, on this view, is not a collection of objects but a theophany, a continuous manifestation of divine presence.

The challenge is to take this insight out of the realm of pious sentiment and into the realm of practice and policy. What would a dharmic environmentalism actually look like? Not, I suggest, a romantic return to pre-modern simplicity, but a rigorous rethinking of the relationship between human action (karma), natural order (ṛta), and the obligations that arise when one recognises the sacred character of the world.`,
    category: cat('philosophy'),
    tags: [tag('dharma'), tag('ethics'), tag('modernity')],
    author: author('vikram-joshi'),
    publishedAt: '2026-06-10T10:00:00Z',
    date: '10 June 2026',
    estimatedReadTime: 8,
    heroImage: '/images/articles/ecology-sacred.jpg',
    type: 'reflection',
  },
  {
    slug: 'raga-and-the-architecture-of-time',
    title: 'Rāga and the Architecture of Time',
    excerpt:
      'In Indian classical music, rāga is not merely a scale but a temporal dwelling — a way of inhabiting time that reveals its inner structure.',
    body: `Western music theory understands scales as collections of pitches arranged in ascending and descending order. A rāga is sometimes explained in these terms — as a "melodic framework" or a "modal structure." But anyone who has listened to a great musician unfold a rāga in ālāp knows that this explanation, while not false, misses the essential point.

A rāga is not a thing but a process. It unfolds in time, and the nature of its unfolding — the gradual introduction of notes, the characteristic phrases (pakāḍ), the moments of tension and resolution, the prescribed times of day for performance — all these suggest that rāga is better understood not as a structure imposed upon time but as a way of revealing time's own inner architecture.

The concept of samaya — the right time, the proper occasion — is central to rāga theory. Rāga Bhairav belongs to the early morning; Rāga Yaman to the evening. This is not arbitrary convention but a claim about the relationship between sonic patterns and temporal qualities. The morning has a character — a particular quality of light, air, and consciousness — and Bhairav is the sonic expression of that character.

As a practitioner of Dhrupad — arguably the oldest surviving form of Hindustani classical music — I have come to experience rāga not as something I play but as something I enter. The ālāp is not composition but exploration: a slow, meditative journey through a sonic landscape that pre-exists the musician and will outlast him.`,
    category: cat('culture'),
    tags: [tag('aesthetics'), tag('yoga')],
    author: author('siddharth-menon'),
    publishedAt: '2026-05-30T10:00:00Z',
    date: '30 May 2026',
    estimatedReadTime: 9,
    heroImage: '/images/articles/raga-time.jpg',
    type: 'reflection',
  },
  {
    slug: 'yogacara-and-the-science-of-mind',
    title: 'Yogācāra and the Science of Mind',
    excerpt:
      'Buddhist idealism meets cognitive science: can the Yogācāra analysis of consciousness inform — or unsettle — modern theories of perception?',
    body: `The Yogācāra school of Mahāyāna Buddhism, founded by Asaṅga and Vasubandhu in the fourth century CE, proposes a radical thesis: there is no external world independent of consciousness. What we take to be "objects" are in fact constructions of the mind (vijñaptimātra — "representation only"). This is not solipsism — Yogācāra does not deny the reality of other minds — but it is a form of idealism that, properly understood, poses serious challenges to the representationalist assumptions of contemporary cognitive science.

The Yogācāra analysis of consciousness is remarkably detailed. It posits eight types of consciousness (vijñāna), of which the most philosophically significant is the ālayavijñāna — the "storehouse consciousness" that contains the seeds (bīja) of all mental activity. This concept has suggestive parallels with — but important differences from — the cognitive scientific notion of implicit memory and the psychoanalytic concept of the unconscious.

What makes Yogācāra particularly interesting for contemporary philosophy of mind is its treatment of the relationship between perception and its objects. For the Yogācārin, the subject-object structure of ordinary experience is not a given but a construction — the result of a pre-reflective "grasping" (grāhaka-grāhya-vikalpa) that divides the undivided flow of experience into an experiencer and an experienced. Meditation practice aims to undo this division, revealing a mode of awareness that is prior to the subject-object split.

If this analysis is correct, then the "binding problem" of cognitive science — the question of how the brain combines disparate sensory inputs into a unified perceptual experience — may be misconceived. The unity is not something that needs to be constructed; it is the original condition, and what needs to be explained is the *apparent* division.`,
    category: cat('philosophy'),
    tags: [tag('epistemology'), tag('comparative-philosophy'), tag('yoga')],
    author: author('kavita-desai'),
    publishedAt: '2026-05-15T10:00:00Z',
    date: '15 May 2026',
    estimatedReadTime: 12,
    heroImage: '/images/articles/yogacara.jpg',
    type: 'essay',
  },
];

export const videos: import('@/types').VideoItem[] = [
  {
    id: 'v1',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'In Conversation: The Future of Sanskrit Studies',
    description: 'A roundtable discussion on the challenges and possibilities facing Sanskrit scholarship in the twenty-first century.',
    thumbnail: '/images/videos/sanskrit-studies.jpg',
    publishedAt: '2026-06-01T10:00:00Z',
    duration: '48:23',
  },
  {
    id: 'v2',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Lecture: Bhartṛhari\'s Philosophy of Language',
    description: 'Prof. Rāghav Śarmā delivers the inaugural Parāvāk lecture on the Vākyapadīya.',
    thumbnail: '/images/videos/bhartrhari-lecture.jpg',
    publishedAt: '2026-05-15T10:00:00Z',
    duration: '1:12:45',
  },
  {
    id: 'v3',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Panel: Dharma, Rights, and Justice',
    description: 'A panel discussion exploring the relationship between classical Indian normative thought and modern human rights discourse.',
    thumbnail: '/images/videos/dharma-panel.jpg',
    publishedAt: '2026-04-20T10:00:00Z',
    duration: '55:10',
  },
  {
    id: 'v4',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Dhrupad Performance: Rāga Bhairav',
    description: 'Siddhārth Menon performs a morning rāga in the Dhrupad tradition, preceded by a brief reflection on rāga and time.',
    thumbnail: '/images/videos/dhrupad.jpg',
    publishedAt: '2026-03-15T10:00:00Z',
    duration: '32:07',
  },
];

export const audioEpisodes: import('@/types').AudioEpisode[] = [
  {
    id: 'a1',
    title: 'Episode 1: What is Samvāda?',
    description: 'An introductory conversation about the meaning of samvāda (dialogue) and why Parāvāk has chosen it as a founding principle.',
    duration: '34:12',
    publishedAt: '2026-06-15T10:00:00Z',
  },
  {
    id: 'a2',
    title: 'Episode 2: Reading the Upaniṣads Today',
    description: 'How should a modern reader approach the Upaniṣadic texts — as historical documents, as philosophy, or as scripture?',
    duration: '42:38',
    publishedAt: '2026-05-01T10:00:00Z',
  },
  {
    id: 'a3',
    title: 'Episode 3: The Question of Caste',
    description: 'A frank and rigorous conversation about caste, its textual bases, its social realities, and the intellectual honesty required to address both.',
    duration: '51:05',
    publishedAt: '2026-04-01T10:00:00Z',
  },
];
