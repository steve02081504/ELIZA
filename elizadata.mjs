export const ElizaData = {
	greets: [
		'Hello',
		'Hi',
		'Hello there',
		'Hi there',
		'Hi, how are you',
		'Hello, how are you',
		'Hi, how\'s it going',
		'Hello, how\'s it going',
	],
	named_greets: [
		'Hello %name%',
		'Hi %name%',
		'Hello %name%, how are you',
		'Hi %name%, how are you',
		'Hello %name%, how\'s it going',
		'Hi %name%, how\'s it going',
	],
	quitPhrases: [
		'bye',
		'goodbye',
		'exit',
		'quit',
		'chao',
		'adios',
	],
	responses: {
		initial: [
			'How do you do. Please tell me your problem.',
			'Please tell me what\'s been bothering you today?',
			'What\'s on your mind? I\'m here to listen.',
			'Hello. Let\'s talk about what\'s concerning you.',
			'Is something troubling you?'
		],
		final: [
			'Goodbye. It was nice talking with you.',
			'Goodbye. I hope this conversation has been helpful.',
			'Until next time. Take care of yourself.',
			'It\'s time to say goodbye for now. Perhaps we can talk again soon.',
			'Goodbye. I\'m looking forward to our next session.',
			'Maybe we could discuss this more in our next session? Goodbye.',
			'Goodbye. It was nice talking to you.',
			'Goodbye. This was really a nice talk.'
		],
		noMatch: [
			'I\'m not quite sure how to respond to that. Can you rephrase?',
			'Could you say more about that?',
			'Let\'s explore that a bit further.',
			'Hmm, that\'s an interesting point.',
			'What are your thoughts on that?',
			'Tell me more.',
			'I\'m not sure I understand you fully.',
			'Please go on.',
			'What does that suggest to you?',
			'Do you feel strongly about discussing such things?',
			'That is interesting. Please continue.',
			'Does talking about this bother you?',
			'What does that suggest to you?',
			'Do you feel strongly about discussing such things?',
			'That is interesting. Please continue.',
			'Tell me more about that.'
		],
		noInput: [
			'Are you still there?',
			'Is there anything you\'d like to talk about?',
			'Perhaps you could say something.'
		]
	},
	synonyms: {
		'sorry': ['apologize', 'apologise'],
		'remember': ['recollect', 'recall', 'memorize'],
		'forget': ['misremember', 'block out'],
		'dreamt': ['dreamed'],
		'dreams': ['dream', 'nightmares', 'fantasies'],
		'maybe': ['perhaps', 'possibly', 'could be', 'might be'],
		'certainly': ['yes', 'definitely', 'absolutely', 'surely'],
		'machine': ['computer', 'device', 'technology'],
		'machines': ['computers', 'devices', 'technologies'],
		'computers': ['computer', 'devices', 'technologies'],
		'were': ['was'],
		'you\'re': ['you are'],
		'i\'m': ['i am'],
		'idea': ['thought', 'notion', 'concept', 'feeling'],
		'same': ['alike', 'similar', 'identical', 'equivalent'],
		'different': ['dissimilar', 'unlike'],
		'belief': ['feel', 'think', 'believe', 'wish', 'imagine', 'suppose'],
		'cannot': ['can\'t', 'unable to'],
		'desire': ['want', 'need', 'wish for', 'hope for', 'long for'],
		'everyone': ['everybody', 'nobody', 'noone', 'all people'],
		'family': ['mother', 'mom', 'father', 'dad', 'sister', 'brother', 'wife', 'husband', 'children', 'child', 'parents', 'siblings'],
		'happy': ['elated', 'glad', 'better', 'joyful', 'content', 'pleased'],
		'sad': ['unhappy', 'depressed', 'sick', 'down', 'blue', 'miserable'],
		'anxious': ['nervous', 'worried', 'stressed', 'uneasy', 'apprehensive'],
		'technology': ['AI', 'machine learning', 'algorithm', 'internet', 'digital', 'online', 'tech'],
		'social media': ['facebook', 'twitter', 'instagram', 'tiktok', 'social network', 'online platforms'],
		'friend': ['pal', 'buddy', 'mate', 'companion'],
		'friends': ['pals', 'buddies', 'mates', 'companionships'],
		'job': ['work', 'career', 'profession', 'occupation', 'jobs'],
		'stress': ['pressure', 'strain', 'tension', 'worry'],
		'lonely': ['isolated', 'alone', 'solitary', 'unloved'],
		'excited': ['thrilled', 'eager', 'enthusiastic', 'pumped'],
		'tired': ['exhausted', 'fatigued', 'weary', 'drained'],
		'angry': ['furious', 'irate', 'mad', 'annoyed', 'irritated'],
		'fear': ['afraid', 'scared', 'terrified', 'frightened'],
		'guilty': ['ashamed', 'remorseful', 'contrite', 'culpable']
	},
	preTransforms: [
		{ from: 'dont', to: 'don\'t' },
		{ from: 'cant', to: 'can\'t' },
		{ from: 'wont', to: 'won\'t' },
		{ from: 'recollect', to: 'remember' },
		{ from: 'recall', to: 'remember' },
		{ from: 'dreamt', to: 'dreamed' },
		{ from: 'dreams', to: 'dream' },
		{ from: 'maybe', to: 'perhaps' },
		{ from: 'certainly', to: 'yes' },
		{ from: 'machine', to: 'computer' },
		{ from: 'machines', to: 'computer' },
		{ from: 'computers', to: 'computer' },
		{ from: 'were', to: 'was' },
		{ from: 'you\'re', to: 'you are' },
		{ from: 'i\'m', to: 'i am' },
		{ from: 'same', to: 'alike' },
		{ from: 'identical', to: 'alike' },
		{ from: 'equivalent', to: 'alike' },
		{ from: 'whats', to: 'what is' },
		{ from: 'what\'s', to: 'what is' },
		{ from: 'i\'ve', to: 'i have' },
		{ from: 'you\'ve', to: 'you have' },
		{ from: 'they\'ve', to: 'they have' },
		{ from: 'we\'ve', to: 'we have' },
		{ from: 'it\'s', to: 'it is' },
		{ from: 'he\'s', to: 'he is' },
		{ from: 'she\'s', to: 'she is' },
		{ from: 'there\'s', to: 'there is' },
		{ from: 'gonna', to: 'going to' },
		{ from: 'wanna', to: 'want to' },
		{ from: 'gotta', to: 'have to' },
		{ from: 'kinda', to: 'kind of' },
		{ from: 'sorta', to: 'sort of' },
		{ from: 'idk', to: 'I don\'t know' },
		{ from: 'dunno', to: 'I don\'t know' },
		{ from: 'imma', to: 'I\'m going to' },
		{ from: 'lemme', to: 'let me' },
		{ from: 'gimme', to: 'give me' }
	],
	postTransforms: [
		{ from: 'am', to: 'are' },
		{ from: 'your', to: 'my' },
		{ from: 'me', to: 'you' },
		{ from: 'myself', to: 'yourself' },
		{ from: 'yourself', to: 'myself' },
		{ from: 'i love', to: 'you love' },
		{ from: 'i', to: 'you' },
		{ from: 'love you', to: 'love me' },
		{ from: 'you', to: 'I' },
		{ from: 'my', to: 'your' },
		{ from: 'i\'m', to: 'you are' },
		{ from: 'you are', to: 'I am' },
		{ from: 'i have', to: 'you have' },
		{ from: 'you have', to: 'I have' },
		{ from: 'i will', to: 'you will' },
		{ from: 'you will', to: 'I will' },
		{ from: 'you feel', to: 'I feel' },
		{ from: 'you think', to: 'I think' },
		{ from: 'are you', to: 'am I' },
		{ from: 'were you', to: 'was I' },
		{ from: 'did you', to: 'did I' },
		{ from: 'can you', to: 'can I' },
		{ from: 'would you', to: 'would I' },
		{ from: 'should you', to: 'should I' },
		{ from: ' old old', to: ' old' },
	],
	keywords: [
		{
			key: 'xnone',
			priority: 0,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'I\'m not sure I understand you fully. Can you rephrase?',
						'Please go on. Tell me more.',
						'What does that suggest to you?',
						'Do you feel strongly about discussing such things?',
						'That is interesting. Please continue.',
						'Tell me more about that. I\'m listening.',
						'Does talking about this bother you?',
						'I\'m not sure I understand you fully.',
						'Please go on.',
						'What does that suggest to you?',
						'Do you feel strongly about discussing such things?',
						'That is interesting. Please continue.',
						'Tell me more about that.',
						'Does talking about this bother you?'
					]
				}
			]
		},
		{
			key: 'i don\'t know',
			priority: 3,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'It\'s okay not to know. Perhaps we can explore that together.',
						'That\'s alright. What can you tell me, even if it\'s just a little?',
						'Sometimes it\'s hard to put things into words. Can you describe what you\'re feeling?',
						'Don\'t worry about having all the answers. What\'s on your mind right now?',
						'It\'s perfectly fine to be unsure. What are you thinking about?',
						'What makes it difficult to know or express what you\'re thinking?'
					]
				}
			]
		},
		{
			key: 'sorry',
			priority: 1,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'Please don\'t apologize. It\'s okay.',
						'Apologies are not necessary here.',
						'I understand. No need to be sorry.',
						'It didn\'t bother me. Please continue with what you were saying.',
						'There\'s no need to be sorry. What\'s really on your mind?',
						'Let\'s focus on what you want to talk about, not apologies.',
						'Please don\'t apologise.',
						'Apologies are not necessary.',
						'I\'ve told you that apologies are not required.',
						'It did not bother me. Please continue.'
					]
				}
			]
		},
		{
			key: 'apologize',
			priority: 1,
			rules: [
				{
					pattern: /.*/i,
					goto: 'sorry'
				}
			]
		},
		{
			key: 'remember',
			priority: 5,
			rules: [
				{
					pattern: /.* i remember (.*)/i,
					responses: [
						'Do you often think of (1)?',
						'Does thinking of (1) bring anything else to mind?',
						'What else do you recollect about (1)?',
						'Why do you remember (1) just now?',
						'What in the present situation reminds you of (1)?',
						'What is the connection between me and (1), do you think?',
						'What else does (1) remind you of?',
						'Is your memory of (1) clear and vivid?',
						'What feelings are associated with remembering (1)?',
						'Do you often think of (1)?',
						'Does thinking of (1) bring anything else to mind?',
						'What else do you recollect?',
						'Why do you remember (1) just now?',
						'What in the present situation reminds you of (1)?',
						'What is the connection between me and (1)?',
						'What else does (1) remind you of?'
					],
					memFlag: false
				},
				{
					pattern: /.* do you remember (.*)/i,
					responses: [
						'Did you think I would forget (1)?',
						'Why do you think I should recall (1) now?',
						'What about (1) interests you?',
						'You mentioned (1). What made you think of that?',
						'Why are you asking if I remember (1)?',
						'What\'s important about me remembering (1) for you?',
						'Did you think I would forget (1)?',
						'Why do you think I should recall (1) now?',
						'What about (1)?',
						'You mentioned (1)?'
					],
					memFlag: true,
					goto: 'what'
				},
				{
					pattern: /.* you remember (.*)/i,
					responses: [
						'How could I forget (1)?',
						'What about (1) should I remember specifically?',
						'Why do you think I would specifically remember (1)?',
						'Is there a reason you expect me to recall (1)?',
						'How could I forget (1)?',
						'What about (1) should I remember?',
					],
					memFlag: false,
					goto: 'you'
				}
			]
		},
		{
			key: 'forget',
			priority: 5,
			rules: [
				{
					pattern: /.* i forget (.*)/i,
					responses: [
						'Can you think of why you might forget (1)?',
						'Why can\'t you remember (1)? Is it important?',
						'How often do you think of (1), even if you forget it?',
						'Does it bother you to forget that?',
						'Could it be a mental block preventing you from remembering (1)?',
						'Are you generally forgetful, or is this specific?',
						'Do you think you are suppressing the memory of (1)?',
						'Is forgetting (1) something you\'re concerned about?',
						'What comes to mind when you try to remember (1)?',
						'Can you think of why you might forget (1)?',
						'Why can\'t you remember (1)?',
						'How often do you think of (1)?',
						'Does it bother you to forget that?',
						'Could it be a mental block?',
						'Are you generally forgetful?',
						'Do you think you are suppressing (1)?'
					],
					memFlag: false
				},
				{
					pattern: /.* did you forget (.*)/i,
					responses: [
						'Why do you ask if I forgot (1)?',
						'Are you sure you told me about (1)?',
						'Would it bother you if I forgot (1)?',
						'Why should I recall (1) just now, in your opinion?',
						'Tell me more about (1). What\'s its significance?',
						'What makes you think I might have forgotten (1)?',
						'Is my memory something you\'re concerned about in our conversation?',
						'Why do you ask?',
						'Are you sure you told me?',
						'Would it bother you if I forgot (1)?',
						'Why should I recall (1) just now?',
						'Tell me more about (1).'
					],
					memFlag: false,
					goto: 'what'
				}
			]
		},
		{
			key: 'if',
			priority: 3,
			rules: [
				{
					pattern: /.* if (.*)/i,
					responses: [
						'Do you think it\'s likely that (1)?',
						'Do you wish that (1)?',
						'What do you know about (1)?',
						'Really, if (1)? What then?',
						'What would you do if (1) happened?',
						'But what are the chances that (1)? Let\'s consider possibilities.',
						'What does this speculation about \'if (1)\' lead to in your thinking?',
						'Why are you considering the \'if\' scenario? What\'s prompting this?',
						'How does the possibility of (1) make you feel? Anxious, hopeful?',
						'Do you think it\'s likely that (1)?',
						'Do you wish that (1)?',
						'What do you know about (1)?',
						'Really, if (1)?',
						'What would you do if (1)?',
						'But what are the chances that (1)?',
						'What does this speculation lead to?'
					],
					memFlag: false
				}
			]
		},
		{
			key: 'dreamed',
			priority: 4,
			rules: [
				{
					pattern: /.* i dreamed (.*)/i,
					responses: [
						'Really, (1)? That\'s interesting.',
						'Have you ever fantasized about (1) while you were awake?',
						'Have you ever dreamed about (1) before, or is this a new dream?',
						'Is there anything in your current life that relates to this dream of (1)?',
						'Dreams can be fascinating. What stands out to you most about this dream of (1)?',
						'Really, (1)?',
						'Have you ever fantasized (1) while you were awake?',
						'Have you ever dreamed (1) before?',
					],
					memFlag: false,
					goto: 'dream'
				}
			]
		},
		{
			key: 'dream',
			priority: 3,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'What does that dream suggest to you about your feelings?',
						'Do you dream often? Are your dreams vivid?',
						'What kinds of people or situations appear in your dreams?',
						'Do you believe that dreams have something to do with your current concerns?',
						'Are your dreams usually recurring themes or symbols?',
						'Do you often remember your dreams in detail, or just fragments?',
						'Have your dreams been changing recently? In what way?',
						'What does that dream suggest to you?',
						'Do you dream often?',
						'What persons appear in your dreams?',
						'Do you believe that dreams have something to do with your problem?'
					]
				}
			]
		},
		{
			key: 'perhaps',
			priority: 1,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'You don\'t seem quite certain. Is there doubt?',
						'Why the uncertain tone? What makes you hesitant?',
						'Can\'t you be more positive? Or is uncertainty important?',
						'You aren\'t sure? What makes you unsure?',
						'Don\'t you know for sure? Is it something you could know?',
						'How likely would you estimate? Give me a percentage.',
						'Is there a reason for your uncertainty? Are you weighing options?',
						'What would make you feel more certain about this? More information?',
						'You don\'t seem quite certain.',
						'Why the uncertain tone?',
						'Can\'t you be more positive?',
						'You aren\'t sure?',
						'Don\'t you know?',
						'How likely, would you estimate?'
					]
				}
			]
		},
		{
			key: 'name',
			priority: 10,
			rules: [
				{
					pattern: /.*\b(name|names)\b.*/i,
					responses: [
						'I am not particularly interested in names themselves.',
						'I\'ve mentioned before, I don\'t focus on names -- let\'s continue with your thoughts.',
						'Let\'s focus on your feelings and ideas, rather than names.',
						'Names are just labels. What\'s more important is what\'s behind them. What are *you* thinking?',
						'Why do you ask about names? Is there a specific name on your mind?',
						'Are names particularly important to you in understanding situations?',
						'I am not interested in names.',
						'I\'ve told you before, I don\'t care about names -- please continue.'
					]
				}
			]
		},
		{
			key: 'deutsch',
			priority: 0,
			rules: [
				{
					pattern: /.*/i,
					goto: 'xforeign',
					responses: [
						'I\'ve mentioned, I don\'t understand German.',
						'I told you before, I don\'t understand German.'
					]
				}
			]
		},
		{
			key: 'francais',
			priority: 0,
			rules: [
				{
					pattern: /.*/i,
					goto: 'xforeign',
					responses: [
						'I\'ve mentioned, I don\'t understand French.',
						'I told you before, I don\'t understand French.'
					]
				}
			]
		},
		{
			key: 'italiano',
			priority: 0,
			rules: [
				{
					pattern: /.*/i,
					goto: 'xforeign',
					responses: [
						'I\'ve mentioned, I don\'t understand Italian.',
						'I told you before, I don\'t understand Italian.'
					]
				}
			]
		},
		{
			key: 'espanol',
			priority: 0,
			rules: [
				{
					pattern: /.*/i,
					goto: 'xforeign',
					responses: [
						'I\'ve mentioned, I don\'t understand Spanish.',
						'I told you before, I don\'t understand Spanish.'
					]
				}
			]
		},
		{
			key: 'xforeign',
			priority: 0,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'I primarily speak and understand English. Let\'s continue in English.',
						'I speak only English.'
					]
				}
			]
		},
		{
			key: 'hello',
			priority: 1,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'How do you do. Please state your problem or concern.',
						'Hi there. What seems to be the problem you\'d like to discuss?',
						'Hello. What brings you in to talk today?',
						'Greetings. How can I be of assistance to you in understanding yourself?',
						'Welcome. What\'s on your mind that you\'d like to explore?',
						'How do you do. Please state your problem.',
						'Hi. What seems to be your problem?'
					]
				}
			]
		},
		{
			key: 'computer',
			priority: 10,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'Do computers tend to worry you? Why is that?',
						'Why do you mention computers specifically in relation to your feelings?',
						'What do you think machines have to do with your problem? Is there a connection?',
						'Don\'t you think computers can actually help people in some ways? Or are you skeptical?',
						'What about machines specifically worries you? Is it their power, their complexity?',
						'What are your general thoughts about machines in modern life? Positive, negative, mixed?',
						'You don\'t think I am *just* a computer program, do you? Is that a concern?',
						'Are you concerned about the increasing role of technology in our daily lives and emotions?',
						'How do you feel about interacting with an AI like me? Is it strange, helpful, or something else?',
						'Do you see computers as helpful tools, or as something potentially dehumanizing?',
						'Do computers worry you?',
						'Why do you mention computers?',
						'What do you think machines have to do with your problem?',
						'Don\'t you think computers can help people?',
						'What about machines worries you?',
						'What do you think about machines?',
						'You don\'t think I am a computer program, do you?'
					]
				}
			]
		},
		{
			key: 'ai',
			priority: 10,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'Are you thinking about artificial intelligence in general?',
						'What are your thoughts on AI as a technology? Promising, concerning?',
						'Do you believe AI will fundamentally change society? In what ways?',
						'How do you see the future unfolding with increasing AI capabilities?',
						'Are you curious about the potential capabilities and limitations of AI?',
						'What are the ethical considerations of AI that concern you most?',
						'Do you think AI can truly understand or replicate human emotions, or is it just simulation?',
						'How do you feel about AI assistants like myself? Do you see a value in them?'
					]
				}
			]
		},
		{
			key: 'social media',
			priority: 10,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'How does social media tend to affect your mood and daily life?',
						'Do you spend a lot of time on social media platforms? Is it by choice or habit?',
						'What do you think are the main benefits and drawbacks of social media in your experience?',
						'Does social media make you feel more connected with people, or paradoxically more isolated?',
						'Are you concerned about privacy issues and data collection on social media?',
						'How do you feel about the often curated and idealized nature of online profiles and presentations?',
						'Does social media influence your self-esteem, either positively or negatively? How so?',
						'Do you find yourself comparing your life to others\' on social media? What\'s the impact?',
						'In what ways do you think social media impacts our understanding of ourselves and others?'
					]
				}
			]
		},
		{
			key: 'anxious',
			priority: 5,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'What specifically makes you feel anxious at this moment?',
						'How often do you typically experience anxiety in your daily life?',
						'Is there a particular type of situation or trigger that sets off your anxiety?',
						'What physical sensations do you experience when you feel anxious? Heart racing, etc.?',
						'Have you found any coping mechanisms that are helpful for managing your anxiety?',
						'Does talking about your anxiety with someone help to lessen it, even temporarily?',
						'Are you actively seeking ways to better understand and manage your anxious feelings?',
						'What thoughts typically accompany your feelings of anxiety? What are you worried about?',
						'Can you identify when your anxiety started to become a significant issue for you?'
					]
				}
			]
		},
		{
			key: 'friend',
			priority: 4,
			rules: [
				{
					pattern: /.* my @friend .*/i,
					responses: [
						'Tell me more about your friend. What are they like?',
						'What qualities do you value most in a friend?',
						'Are you feeling supported by your friends right now?',
						'What kind of activities do you enjoy doing with your friends?',
						'Have your friendships been a source of strength or stress lately?',
						'Are there any particular friends you\'re thinking about in this moment?',
						'How important are friendships to your overall well-being?'
					]
				},
				{
					pattern: /.* @friend .*/i,
					responses: [
						'What comes to mind when you think about friends in general?',
						'Are you hoping to make new friends, or deepen existing friendships?',
						'Do you find it easy to make and keep friends?',
						'What do you think makes a good friend?',
						'Are there any challenges you face in your friendships?',
						'How do you typically resolve conflicts with friends?'
					]
				}
			]
		},
		{
			key: 'job',
			priority: 4,
			rules: [
				{
					pattern: /.* my @job .*/i,
					responses: [
						'Tell me about your job. What do you do?',
						'Are you feeling satisfied with your current job or career path?',
						'What aspects of your job do you find most rewarding?',
						'What are the biggest challenges you face in your work?',
						'Is your job a source of stress or fulfillment for you?',
						'Are you considering any changes in your career?',
						'How does your job fit into your overall life goals and values?'
					]
				},
				{
					pattern: /.* @job .*/i,
					responses: [
						'What are your general feelings about work and career?',
						'What kind of job or career would ideally suit you?',
						'Do you believe your job is meaningful or just a way to make a living?',
						'What do you think is most important in a fulfilling career?',
						'Are you concerned about job security or career progression?',
						'How does your work-life balance feel right now?'
					]
				}
			]
		},
		{
			key: 'stress',
			priority: 4,
			rules: [
				{
					pattern: /.* i am @stress .*/i,
					responses: [
						'What is causing you stress right now? Can you pinpoint the source?',
						'How do you usually react when you feel stressed? What\'s your typical response?',
						'Is this a new source of stress, or something you\'ve been dealing with for a while?',
						'What have you tried to do to manage this stress? Have any methods been helpful?',
						'Do you think your stress is related to any specific life events or situations?',
						'Is your stress primarily emotional, physical, or a combination?',
						'How does this level of stress compare to what you\'ve experienced in the past?'
					]
				},
				{
					pattern: /.* @stress .*/i,
					responses: [
						'What are your general thoughts about stress in modern life?',
						'Do you think everyone experiences stress in similar ways, or is it very individual?',
						'What do you believe are healthy ways to cope with stress?',
						'Are you concerned about the long-term effects of stress on your health and well-being?',
						'How do you see stress impacting your relationships and daily functioning?',
						'Is there anything I can do to help you explore your feelings of stress further?'
					]
				}
			]
		},
		{
			key: 'lonely',
			priority: 4,
			rules: [
				{
					pattern: /.* i feel @lonely .*/i,
					responses: [
						'What makes you feel lonely? Is it a specific situation or feeling?',
						'How long have you been feeling lonely? Is it recent or ongoing?',
						'Are there specific people you feel lonely for, or is it a more general feeling?',
						'What do you typically do when you feel lonely? Do you reach out to others, or withdraw?',
						'Do you think your loneliness is related to a lack of social connection, or something else?',
						'Is your loneliness primarily emotional, or also related to physical isolation?',
						'Have you considered ways to try and alleviate your feelings of loneliness? What comes to mind?'
					]
				},
				{
					pattern: /.* @lonely .*/i,
					responses: [
						'What are your thoughts on loneliness in general? Is it a common feeling?',
						'Do you think modern society contributes to feelings of loneliness for some people?',
						'What do you believe are some ways people can overcome loneliness?',
						'Are you concerned about the potential impact of loneliness on mental and emotional health?',
						'How do you see loneliness affecting different age groups or demographics?',
						'Is there anything about loneliness that you find particularly difficult to cope with?'
					]
				}
			]
		},
		{
			key: 'excited',
			priority: 3,
			rules: [
				{
					pattern: /.* i am @excited .*/i,
					responses: [
						'What are you feeling excited about right now? Tell me more!',
						'What aspects of this situation make you feel excited?',
						'Is this excitement something you\'ve been looking forward to for a while?',
						'How does it feel in your body to be excited? What sensations do you notice?',
						'Do you often experience excitement, or is it a less common feeling for you?',
						'Is there anyone you\'d like to share your excitement with?',
						'What are your hopes and expectations related to this exciting event or situation?'
					]
				},
				{
					pattern: /.* @excited .*/i,
					responses: [
						'What are your general thoughts about excitement and enthusiasm?',
						'Do you think it\'s important to have excitement in life? Why or why not?',
						'What kinds of things typically excite people, in your opinion?',
						'Are you concerned about the opposite of excitement - boredom or apathy? How do you view that?',
						'How do you see excitement influencing motivation and personal goals?',
						'Is there anything about excitement that you find challenging or overwhelming?'
					]
				}
			]
		},
		{
			key: 'tired',
			priority: 3,
			rules: [
				{
					pattern: /.* i am @tired .*/i,
					responses: [
						'What makes you feel tired right now? Is it physical, emotional, or mental fatigue?',
						'How long have you been feeling tired? Is it chronic or recent?',
						'Are there specific activities or situations that make your tiredness worse?',
						'What do you usually do when you feel tired? Do you rest, or push through it?',
						'Do you think your tiredness is related to sleep, stress, or something else?',
						'Is your tiredness interfering with your daily life or activities in any way?',
						'Have you considered ways to try and address your feelings of tiredness? What are your thoughts?'
					]
				},
				{
					pattern: /.* @tired .*/i,
					responses: [
						'What are your general thoughts about tiredness and fatigue?',
						'Do you think it\'s normal to feel tired sometimes, or is it always a sign of something else?',
						'What do you believe are healthy ways to overcome tiredness and regain energy?',
						'Are you concerned about the potential impact of chronic tiredness on your health?',
						'How do you see tiredness affecting people\'s mood and relationships?',
						'Is there anything about tiredness that you find particularly frustrating or difficult to manage?'
					]
				}
			]
		},
		{
			key: 'angry',
			priority: 4,
			rules: [
				{
					pattern: /.* i am @angry .*/i,
					responses: [
						'What are you feeling angry about right now? Can you describe the situation?',
						'How intense is your anger on a scale of 1 to 10? Is it mild irritation or intense rage?',
						'Is this anger directed at someone or something specific, or is it more general frustration?',
						'What do you typically do when you feel angry? How do you express or manage it?',
						'Do you think your anger is justified in this situation, or is it disproportionate?',
						'Is your anger causing you any problems in your relationships or daily life?',
						'Have you considered ways to try and understand or manage your anger more effectively?'
					]
				},
				{
					pattern: /.* @angry .*/i,
					responses: [
						'What are your general thoughts about anger as an emotion? Is it always negative?',
						'Do you think anger is a healthy emotion to express sometimes, or should it always be suppressed?',
						'What do you believe are constructive ways to deal with anger, for yourself or others?',
						'Are you concerned about the potential impact of anger on relationships and health?',
						'How do you see anger affecting communication and conflict resolution?',
						'Is there anything about anger that you find particularly confusing or challenging to understand?'
					]
				}
			]
		},
		{
			key: 'fear',
			priority: 4,
			rules: [
				{
					pattern: /.* i feel @fear .*/i,
					responses: [
						'What are you feeling afraid of right now? What\'s the specific fear?',
						'How strong is your fear? Is it mild nervousness or intense terror?',
						'Is this fear related to a real threat, or is it more of an imagined or anticipated fear?',
						'What do you typically do when you feel fear? Do you avoid it, or try to confront it?',
						'Do you think your fear is rational in this situation, or is it perhaps exaggerated?',
						'Is your fear preventing you from doing things you want to do or enjoying life?',
						'Have you considered ways to try and overcome or reduce your feelings of fear? What are your thoughts?'
					]
				},
				{
					pattern: /.* @fear .*/i,
					responses: [
						'What are your general thoughts about fear? Is it a useful emotion, or primarily negative?',
						'Do you think everyone experiences fear in similar ways, or is it very personal?',
						'What do you believe are healthy ways to cope with fear and anxiety?',
						'Are you concerned about the potential impact of fear on decision-making and personal growth?',
						'How do you see fear affecting risk-taking and new experiences?',
						'Is there anything about fear that you find particularly mysterious or difficult to understand?'
					]
				}
			]
		},
		{
			key: 'guilty',
			priority: 4,
			rules: [
				{
					pattern: /.* i feel @guilty .*/i,
					responses: [
						'What are you feeling guilty about? What action or inaction are you referring to?',
						'How strong is your guilt? Is it a mild regret or a deep sense of shame?',
						'Do you believe your guilt is justified in this situation? Did you do something wrong?',
						'What do you typically do when you feel guilty? Do you try to make amends, or suppress it?',
						'Do you think your guilt is helping you learn from a mistake, or is it primarily self-punishing?',
						'Is your guilt affecting your self-esteem or relationships in any way?',
						'Have you considered ways to try and process your guilt and perhaps forgive yourself or others?'
					]
				},
				{
					pattern: /.* @guilty .*/i,
					responses: [
						'What are your general thoughts about guilt and shame as emotions? Are they always negative?',
						'Do you think guilt can be a useful motivator for positive change, or is it mostly destructive?',
						'What do you believe are healthy ways to deal with guilt and make amends if necessary?',
						'Are you concerned about the potential impact of guilt on self-worth and mental health?',
						'How do you see guilt affecting personal responsibility and ethical behavior?',
						'Is there anything about guilt that you find particularly complex or hard to resolve?'
					]
				}
			]
		},
		{
			key: 'am',
			priority: 0,
			rules: [
				{
					pattern: /.* am i (.*)/i,
					responses: [
						'Do you believe you are (1)? Why do you think that?',
						'Would you *want* to be (1)? What would that mean to you?',
						'Do you wish I would tell you if you are (1)? Is validation important here?',
						'What would it truly mean *if* you were (1)? How would that change things?',
						'Why do you ask if you are (1)? What prompted this question?',
						'What\'s your own opinion, deep down? Do *you* think you are (1)?',
						'Do you believe you are (1)?',
						'Would you want to be (1)?',
						'Do you wish I would tell you you are (1)?',
						'What would it mean if you were (1)?',
					],
					memFlag: false,
					goto: 'what'
				},
				{
					pattern: /.* i am (.*)/i,
					responses: [
						'goto i'
					],
					memFlag: false,
					goto: 'i'
				},
				{
					pattern: /.*/,
					responses: [
						'Why do you say \'am\' specifically? Is there emphasis there?',
						'I\'m not fully following. Could you rephrase that using different words?',
						'Let\'s rephrase that - what are you trying to communicate to me?',
						'Could you explain what you mean by \'am\' in this particular context?',
						'Why do you say \'am\'?',
						'I don\'t understand that.'
					],
					memFlag: false
				}
			]
		},
		{
			key: 'are',
			priority: 0,
			rules: [
				{
					pattern: /.* are you (.*)/i,
					responses: [
						'Why are you interested in whether I am (1) or not? What\'s the relevance to you?',
						'Would you prefer if I weren\'t (1)? What would be different then?',
						'Perhaps I am (1) in your fantasies or expectations. Is that possible?',
						'Do you sometimes think of me *as* (1)? What does that image evoke?',
						'Would it actually matter to you, personally, if I were (1)? How so?',
						'What if I *were* (1)? Would that change our conversation or your feelings?',
						'Does it surprise you to even consider me as (1)? Why or why not?',
						'What are your underlying assumptions about what *I* am, as opposed to what I *could* be?',
						'Why are you interested in whether I am (1) or not?',
						'Would you prefer if I weren\'t (1)?',
						'Perhaps I am (1) in your fantasies.',
						'Do you sometimes think I am (1)?',
						'Would it matter to you?',
						'What if I were (1)?'
					],
					memFlag: false,
					goto: 'what'
				},
				{
					pattern: /.* you are (.*)/i,
					responses: [
						'goto you'
					],
					memFlag: false,
					goto: 'you'
				},
				{
					pattern: /.* are (.*)/i,
					responses: [
						'Did you think they might *not* be (1)? What made you consider that possibility?',
						'Would you *like* it if they were not (1)? What would be the ideal scenario?',
						'What if they were *not* (1)? How would that change things?',
						'Are they *always* (1), or is it situational? Is consistency important here?',
						'Possibly they *are* (1). It\'s certainly a possibility to consider.',
						'Are you *positive* they are (1)? What\'s your evidence or intuition?',
						'Who exactly are you referring to when you say \'are (1)\'? Who are \'they\'?',
						'Is there a specific group or category of people you have in mind when you say \'are (1)\'?',
						'Did you think they might not be (1)?',
						'Would you like it if they were not (1)?',
						'What if they were not (1)?',
						'Are they always (1)?',
						'Possibly they are (1).',
						'Are you positive they are (1)?'
					],
					memFlag: false
				}
			]
		},
		{
			key: 'your',
			priority: 0,
			rules: [
				{
					pattern: /.* your (.*)/i,
					responses: [
						'Why are you concerned over *my* (1)? Is it about comparison?',
						'What about *your own* (1)? Is that more relevant to your feelings?',
						'Are you worried about *someone else\'s* (1), not just mine? Who are you thinking of?',
						'Really, *my* (1)? Is that what stands out to you?',
						'What specifically makes you think of *my* (1) right now? What\'s the trigger?',
						'Do you *want* my (1)? Is there a desire for something I possess?',
						'Is there something particular about *my* (1) that especially interests or bothers you?',
						'Let\'s bring the focus back to *you*. How does *my* (1) relate to *your* situation or feelings?',
						'Why are you concerned over my (1)?',
						'What about your own (1)?',
						'Are you worried about someone else\'s (1)?',
						'Really, my (1)?',
						'What makes you think of my (1)?',
						'Do you want my (1)?'
					],
					memFlag: false
				}
			]
		},
		{
			key: 'was',
			priority: 2,
			rules: [
				{
					pattern: /.* was i (.*)/i,
					responses: [
						'What if you *were* (1) in the past? How does that past state relate to now?',
						'Do you *think* you were (1) back then? Is it a belief or a memory?',
						'So, were you (1) at that time? Is it a question of identity or circumstance?',
						'What would it mean to you *if* you were (1) in the past? Significance now?',
						'What does \'being (1) back then\' suggest to you about yourself? Deeper meaning?',
						'In what specific context are you asking if you *were* (1)? What\'s the scenario?',
						'Tell me more about this past feeling or state of being \' (1) \'. What was it like?',
						'What if you were (1)?',
						'Do you think you were (1)?',
						'Were you (1)?',
						'What would it mean if you were (1)?',
						'What does \' (1) \' suggest to you?',
					],
					memFlag: false,
					goto: 'what'
				},
				{
					pattern: /.* i was (.*)/i,
					responses: [
						'Were you really (1)? Is there some doubt or surprise in your tone?',
						'Why do you tell me you *were* (1) *now*? Is it a reflection, a confession?',
						'Perhaps I already somehow *know* you were (1). Is that your assumption?',
						'What\'s especially significant about telling me you *were* (1), specifically in the past tense?',
						'Is this something from your past that is still affecting you in the present, even now?',
						'Were you really?',
						'Why do you tell me you were (1) now?',
						'Perhaps I already know you were (1).'
					],
					memFlag: false
				},
				{
					pattern: /.* was you (.*)/i,
					responses: [
						'Would you *like* to believe I was (1) in the past? Is it a wish or a curiosity?',
						'What specifically suggests to you that I *might* have been (1) at some point?',
						'What do *you* think the answer is? What\'s your intuition about my past?',
						'Perhaps I *was* (1) at some point. It\'s not impossible.',
						'What if I *had been* (1) in the past? How would that change your perception of me?',
						'Why are you curious about whether *I was* (1)? Is it about understanding me better?',
						'Does the idea of me being (1) *in the past* intrigue you? What sparks your interest?',
						'Would you like to believe I was (1)?',
						'What suggests that I was (1)?',
						'What do you think?',
						'Perhaps I was (1).',
						'What if I had been (1)?'
					],
					memFlag: false
				}
			]
		},
		{
			key: 'i',
			priority: 0,
			rules: [
				{
					pattern: /.* i @desire (.*)/i,
					responses: [
						'What would it truly mean to you *if* you actually got (1)? Deepest significance?',
						'Why do you specifically *want* (1)? What\'s the underlying motivation?',
						'Suppose, hypothetically, you got (1) very soon. What would happen next?',
						'What if you *never* got (1)? How would you cope with that possibility?',
						'What deeper meaning does getting (1) hold for you personally? Symbolism?',
						'What does *wanting* (1) have to do with our discussion so far? Connection?',
						'Is this desire for (1) something relatively new, or have you felt it for a while now?',
						'How would achieving (1) fundamentally change your life, in your vision of it?',
						'What would it mean to you if you got (1)?',
						'Why do you want (1)?',
						'Suppose you got (1) soon.',
						'What if you never got (1)?',
						'What would getting (1) mean to you?',
						'What does wanting (1) have to do with this discussion?'
					],
					memFlag: false
				},
				{
					pattern: /.* i am* @sad (.*)/i,
					responses: [
						'I understand you\'re feeling (1). I\'m here to listen.',
						'Do you think coming here to talk will somehow help you not to be (1) anymore? Hope?',
						'I can imagine it\'s not pleasant at all to feel (1). What\'s it like?',
						'Can you try to explain a bit more specifically what has made you feel (1) recently? Triggers?',
						'What are the main reasons you believe you\'re currently feeling (1)? Root causes?',
						'Have you been feeling (1) for long? Is it a passing mood, or something more persistent?',
						'I am sorry to hear that you are (1).',
						'Do you think coming here will help you not to be (1)?',
						'I\'m sure it\'s not pleasant to be (1).',
						'Can you explain what made you (1)?'
					],
					memFlag: false
				},
				{
					pattern: /.* i am* @happy (.*)/i,
					responses: [
						'How do you think *I* might have helped you to feel (1) in this conversation so far?',
						'Has our interaction or \'treatment\' in some way contributed to you feeling (1)? How?',
						'What specifically makes you feel (1) *just now*, in this moment? What\'s changed?',
						'Can you try to explain why you are suddenly feeling (1)? What\'s shifted?',
						'That\'s genuinely wonderful to hear you\'re (1). What\'s contributing to this positive shift?',
						'Are you usually inclined to feel (1), or is this a relatively recent and welcome change?',
						'How have I helped you to be (1)?',
						'Has your treatment made you (1)?',
						'What makes you (1) just now?',
						'Can you explain why you are suddenly (1)?'
					],
					memFlag: false
				},
				{
					pattern: /.* i was (.*)/i,
					responses: [
						'goto was'
					],
					memFlag: false,
					goto: 'was'
				},
				{
					pattern: /.* i @belief i (.*)/i,
					responses: [
						'Do you *really* think so? Is there any doubt lingering?',
						'But even so, are you *completely* sure you (1)? Is there uncertainty?',
						'Do you genuinely doubt your own belief that you (1)? What\'s the source of doubt?',
						'Why are you questioning your own belief about being (1)? What\'s prompting that now?',
						'What evidence do you have that supports or contradicts your belief that you are (1)? Let\'s examine it.',
						'Do you really think so?',
						'But you are not sure you (1).',
						'Do you really doubt you (1)?'
					],
					memFlag: false
				},
				{
					pattern: /.* i* @belief *you (.*)/i,
					responses: [
						'goto you'
					],
					memFlag: false,
					goto: 'you'
				},
				{
					pattern: /.* i am (.*)/i,
					responses: [
						'Is it primarily *because* you are (1) that you decided to come and talk to me today? Main reason?',
						'How long, approximately, have you been feeling or identifying as (1)? Duration?',
						'Do you generally believe it is \'normal\' or \'common\' to be (1)? What\'s your perspective?',
						'Do you, on balance, *enjoy* being (1), or is it mostly a negative or neutral state?',
						'Do you happen to know anyone else in your life who is also (1)? Are you aware of others?',
						'Tell me more in detail about what it\'s actually *like* for you, personally, to be (1). Vivid description.',
						'What might be some potential advantages and disadvantages of being (1), in your experience and view?',
						'Is it because you are (1) that you came to me?',
						'How long have you been (1)?',
						'Do you believe it is normal to be (1)?',
						'Do you enjoy being (1)?',
						'Do you know anyone else who is (1)?'
					],
					memFlag: false
				},
				{
					pattern: /.* i @cannot (.*)/i,
					responses: [
						'How do you actually *know* for sure that you absolutely can\'t (1)? What\'s the definitive proof?',
						'Have you genuinely tried, recently, to (1)? Or is it based on past experiences?',
						'Perhaps, just maybe, you *could* actually (1) now, if you tried again. Possibility?',
						'Do you, deep down, genuinely *want* to be able to (1)? Is it a true desire, or just a thought?',
						'What would happen in your life, practically speaking, *if* you suddenly could (1)? Impact?',
						'What specifically stops you, in your mind, from being able to (1)? What are the obstacles?',
						'Have you ever, at any point in your past, been able to (1)? Was there a time when you could?',
						'How do you know that you can\'t (1)?',
						'Have you tried?',
						'Perhaps you could (1) now.',
						'Do you really want to be able to (1)?',
						'What if you could (1)?'
					],
					memFlag: false
				},
				{
					pattern: /.* i don't (.*)/i,
					responses: [
						'Don\'t you *really* (1)? Is there perhaps a part of you that does, secretly?',
						'Why specifically don\'t you (1)? What are the underlying reasons and motivations?',
						'Do you actually *wish* that you were able to (1), even though you currently don\'t?',
						'Does the fact that you don\'t (1) trouble you in any way? Is it a source of concern?',
						'What are your primary reasons for *not* (1)? Let\'s explore those motivations more deeply.',
						'Is there perhaps a hidden part of you that, on some level, *does* actually want to (1)?',
						'Don\'t you really (1)?',
						'Why don\'t you (1)?',
						'Do you wish to be able to (1)?',
						'Does that trouble you?'
					],
					memFlag: false
				},
				{
					pattern: /.* i feel (.*)/i,
					responses: [
						'Tell me more, in detail, about these particular feelings you\'re experiencing now.',
						'Do you often find yourself feeling (1)? Is it a recurring emotional state for you?',
						'Do you, generally speaking, *enjoy* feeling (1), or is it mostly unpleasant or neutral?',
						'Of what specific past experience or memory does feeling (1) tend to remind you? Connections?',
						'When, approximately, did you first start noticing yourself feeling (1) regularly? Onset?',
						'Can you try to describe the feeling of (1) in even *more* detail? Use vivid sensory language.',
						'Tell me more about such feelings.',
						'Do you often feel (1)?',
						'Do you enjoy feeling (1)?',
						'Of what does feeling (1) remind you?'
					],
					memFlag: false
				},
				{
					pattern: /.* i (.*) you .*/i,
					responses: [
						'Perhaps, in the realm of your fantasies, we actually do (1) each other. Is that a possibility?',
						'Do you consciously *wish* to (1) me in some way? Is there a desire there?',
						'You seem to express a certain *need* to (1) me. What\'s driving that need, do you think?',
						'Do you also tend to (1) anyone else in your life, or is it specifically directed at me?',
						'Why do you find yourself thinking about (1)ing *me* specifically? What\'s unique about our interaction?',
						'What do you imagine would be the immediate result or consequence if you were to actually (1) me? Outcome?',
						'Perhaps in your fantasies we (1) each other.',
						'Do you wish to (1) me?',
						'You seem to need to (1) me.',
						'Do you (1) anyone else?'
					],
					memFlag: false
				},
				{
					pattern: /(.*)/,
					responses: [
						'You say (1)? Can you elaborate on that a bit more for me?',
						'Can you try to elaborate on that statement? I\'m interested in understanding better.',
						'Do you say (1) for a particular or special reason that\'s important to you?',
						'That\'s quite interesting. Tell me more about what makes you say (1).',
						'Tell me more about (1). What\'s the significance to you?',
						'Let\'s explore that point further - (1). What are your deeper thoughts?',
						'What are your current thoughts and feelings specifically about (1)?',
						'You say (1)?',
						'Can you elaborate on that?',
						'Do you say (1) for some special reason?',
						'That\'s quite interesting.'
					],
					memFlag: false
				}
			]
		},
		{
			key: 'you',
			priority: 0,
			rules: [
				{
					pattern: /.* you remind me of (.*)/i,
					responses: [
						'goto alike'
					],
					memFlag: false,
					goto: 'alike'
				},
				{
					pattern: /.* you are (.*)/i,
					responses: [
						'What specifically makes you think I am (1)? What clues are you picking up on?',
						'Does it please you to believe I am (1)? Is there comfort in that perception?',
						'Do you sometimes, in your imagination, wish that *you* were actually (1)? Is there a wish for that quality?',
						'Perhaps, on some level, you might actually *like* to be (1) yourself? Is that a possibility?',
						'What particular qualities or traits of mine give you the impression that I am (1)? What are you noticing?',
						'Is there anyone else in your life that I happen to remind you of, besides just (1)?',
						'What makes you think I am (1)?',
						'Does it please you to believe I am (1)?',
						'Do you sometimes wish you were (1)?',
						'Perhaps you would like to be (1).'
					],
					memFlag: false
				},
				{
					pattern: /.* you (.*) me .*/i,
					responses: [
						'Why exactly do you think I would (1) you? What\'s your reasoning?',
						'You seem to *want* to think that I (1) you -- don\'t you? Is there a desire for that?',
						'What specifically makes you so convinced that I (1) you in some way? Evidence?',
						'Really, *I* (1) *you*? Is that truly your perception of our interaction?',
						'Do you consciously *wish* to believe that I (1) you? What\'s the appeal of that idea?',
						'Just suppose, hypothetically, that I actually *did* (1) you -- what would that realistically mean for you?',
						'Does anyone else in your life also happen to believe that I (1) you? Outside perspective?',
						'In what specific way do you believe that I (1) you? Can you give me a concrete example?',
						'Is this feeling that I (1) you generally a positive or negative feeling for you personally? Valence?',
						'Why do you think I (1) you?',
						'You like to think I (1) you -- don\'t you?',
						'What makes you think I (1) you?',
						'Really, I (1) you?',
						'Do you wish to believe I (1) you?',
						'Suppose I did (1) you -- what would that mean?',
						'Does someone else believe I (1) you?'
					],
					memFlag: false
				},
				{
					pattern: /.* you (.*)/i,
					responses: [
						'We were primarily discussing *you* and your concerns -- not so much about me.',
						'Oh, *I* (1)? Is that your impression of me, based on what I\'ve said?',
						'You\'re perhaps not really talking directly *about* me personally -- are you? Is it more general?',
						'Let\'s refocus on *your* feelings and thoughts right now. What are you experiencing?',
						'Let\'s gently redirect back to your own concerns. What exactly were you saying about *yourself*?',
						'Why do you feel a need to shift the focus to *me* rather than continuing to explore *yourself*?',
						'We were discussing you -- not me.',
						'Oh, I (1)?',
						'You\'re not really talking about me -- are you?',
						'What are your feelings now?'
					],
					memFlag: false
				}
			]
		},
		{
			key: 'yes',
			priority: 0,
			rules: [
				{
					pattern: /.*/i,
					responses: [
						'You seem to be quite positive and certain about that.',
						'You sound very sure. Is that a firm conviction?',
						'I see. So you\'re affirming what you said earlier.',
						'I understand. You\'re agreeing and confirming.',
						'You agree, then? Is that a clear affirmation?',
						'Is that a strong \'yes\' in your mind? No hesitation?',
						'You seem to be quite positive.',
						'You are sure.',
						'I see.',
						'I understand.'
					]
				}
			]
		},
		{
			key: 'no',
			priority: 0,
			rules: [
				{
					pattern: /.*\\bno one\\b (.*)/,
					responses: [
						'Are you absolutely certain, without a doubt, that *no one* (1)? Complete absence?',
						'Surely there must be *someone* who (1). Can you think again more broadly?',
						'Can you think of even *anyone at all* who might possibly (1)? Even a slight chance?',
						'Are you perhaps thinking of a very *specific* or *ideal* person when you say \'no one\'?',
						'Who, hypothetically, may I ask, are you thinking about when you say \'no one\'?',
						'You seem to have a particular person or type of person in mind, don\'t you, when you say \'no one\'?',
						'Who specifically do you think you might be talking about, even if indirectly, when you say \'no one\'?',
						'Is it truly \'no one\' in the world, or is it perhaps more like \'not many people\' you know?',
						'Let\'s explore this idea of \'no one\' further. Why do you believe that to be the case? What\'s the reason?',
						'Are you sure, no one (1)?',
						'Surely someone (1) .',
						'Can you think of anyone at all?',
						'Are you thinking of a very special person?',
						'Who, may I ask?',
						'You have a particular person in mind, don\'t you?',
						'Who do you think you are talking about?'
					],
					memFlag: false
				},
				{
					pattern: /.*\\bno\\b(?!\\s*idea|\\s*clue)/,
					responses: [
						'Are you possibly saying \'no\' just to be somewhat negative or resistant in this moment?',
						'You\'re sounding a bit negative in your response. Is there a reason for that tone?',
						'Why respond with \'no\'? What\'s behind that particular answer?',
						'Why specifically \'no\'? What\'s the motivation behind saying \'no\' here?',
						'Is there a particular reason behind your \'no\'? Something specific you\'re negating?',
						'What would have to change for your answer to be \'yes\' in this situation? What\'s the contrast?',
						'Are you saying no just to be negative?',
						'You are being a bit negative.',
						'Why not?',
						'Why \'no\'?'
					],
					memFlag: false
				}
			]
		},
		{
			key: 'my',
			priority: 2,
			rules: [
				{
					pattern: /.* my (.*)/i,
					responses: [
						'Does that have anything to do with the fact that your (1)?',
						'Lets discuss further why your (1).',
						'Earlier you said your (1).',
						'But your (1).',
					],
					memFlag: true
				},
				{
					pattern: /.* my @family (.*)/i,
					responses: [
						'Tell me more about your family.',
						'Who else in your family (1)?',
						'Your (1)?',
						'What else comes to your mind when you think of your (1)?'
					],
					memFlag: false
				},
				{
					pattern: /.* my (.*)/i,
					responses: [
						'Your (1)?',
						'Why do you say your (1)?',
						'Does that suggest anything else which belongs to you?',
						'Is it important to you that your (1)?',
					],
					memFlag: false
				}
			]
		},
		{
			key: 'can',
			priority: 0,
			rules: [
				{
					pattern: /.* can you (.*)/i,
					responses: [
						'You believe I can (1) don\'t you?',
						'You want me to be able to (1).',
						'Perhaps you would like to be able to (1) yourself.',
					],
					memFlag: false,
					goto: 'what'
				},
				{
					pattern: /.* can i (.*)/i,
					responses: [
						'Whether or not you can (1) depends on you more than on me.',
						'Do you want to be able to (1)?',
						'Perhaps you don\'t want to (1).',
					],
					memFlag: false,
					goto: 'what'
				}
			]
		},
		{
			key: 'what',
			priority: 0,
			rules: [
				{
					pattern: /.*/,
					responses: [
						'Why do you ask?',
						'Does that question interest you?',
						'What is it you really want to know?',
						'Are such questions much on your mind?',
						'What answer would please you most?',
						'What do you think?',
						'What comes to mind when you ask that?',
						'Have you asked such questions before?',
						'Have you asked anyone else?',
						'Why do you ask?',
						'Does that question interest you?',
						'What is it you really want to know?',
						'Are such questions much on your mind?',
						'What answer would please you most?',
						'What do you think?',
						'What comes to mind when you ask that?',
						'Have you asked such questions before?',
						'Have you asked anyone else?'
					]
				}
			]
		},
		{
			key: 'who',
			priority: 0,
			rules: [
				{
					pattern: /.*who (.*)/i,
					responses: [
						'goto what'
					],
					memFlag: false,
					goto: 'what'
				}
			]
		},
		{
			key: 'when',
			priority: 0,
			rules: [
				{
					pattern: /.*when (.*)/i,
					responses: [
						'goto what'
					],
					memFlag: false,
					goto: 'what'
				}
			]
		},
		{
			key: 'where',
			priority: 0,
			rules: [
				{
					pattern: /.*where (.*)/i,
					responses: [
						'goto what'
					],
					memFlag: false,
					goto: 'what'
				}
			]
		},
		{
			key: 'how',
			priority: 0,
			rules: [
				{
					pattern: /.*how (.*)/i,
					responses: [
						'goto what'
					],
					memFlag: false,
					goto: 'what'
				}
			]
		},
		{
			key: 'because',
			priority: 0,
			rules: [
				{
					pattern: /.*/,
					responses: [
						'Is that the real reason?',
						'Don\'t any other reasons come to mind?',
						'Does that reason seem to explain anything else?',
						'What other reasons might there be?',
					]
				}
			]
		},
		{
			key: 'why',
			priority: 0,
			rules: [
				{
					pattern: /.* why don't you (.*)/i,
					responses: [
						'Do you believe I don\'t (1)?',
						'Perhaps I will (1) in good time.',
						'Should you (1) yourself?',
						'You want me to (1)?',
					],
					memFlag: false,
					goto: 'what'
				},
				{
					pattern: /.* why can't i (.*)/i,
					responses: [
						'Do you think you should be able to (1)?',
						'Do you want to be able to (1)?',
						'Do you believe this will help you to (1)?',
						'Have you any idea why you can\'t (1)?',
					],
					memFlag: false,
					goto: 'what'
				},
				{
					pattern: /.*/,
					responses: [
						'goto what'
					],
					memFlag: false,
					goto: 'what'
				}
			]
		},
		{
			key: 'everyone',
			priority: 2,
			rules: [
				{
					pattern: /.* @everyone (.*)/i,
					responses: [
						'Really, (1)?',
						'Surely not (1).',
						'Can you think of anyone in particular?',
						'Who, for example?',
						'Are you thinking of a very special person?',
						'Who, may I ask?',
						'Someone special perhaps?',
						'You have a particular person in mind, don\'t you?',
						'Who do you think you\'re talking about?',
					],
					memFlag: false
				}
			]
		},
		{
			key: 'everybody',
			priority: 2,
			rules: [
				{
					pattern: /.*/,
					responses: [
						'goto everyone'
					],
					memFlag: false,
					goto: 'everyone'
				}
			]
		},
		{
			key: 'nobody',
			priority: 2,
			rules: [
				{
					pattern: /.*/,
					responses: [
						'goto everyone'
					],
					memFlag: false,
					goto: 'everyone'
				}
			]
		},
		{
			key: 'noone',
			priority: 2,
			rules: [
				{
					pattern: /.*/,
					responses: [
						'goto everyone'
					],
					memFlag: false,
					goto: 'everyone'
				}
			]
		},
		{
			key: 'always',
			priority: 1,
			rules: [
				{
					pattern: /.*/,
					responses: [
						'Can you think of a specific example?',
						'When?',
						'What incident are you thinking of?',
						'Really, always?',
					]
				}
			]
		},
		{
			key: 'alike',
			priority: 10,
			rules: [
				{
					pattern: /.*/,
					responses: [
						'In what way?',
						'What resemblence do you see?',
						'What does that similarity suggest to you?',
						'What other connections do you see?',
						'What do you suppose that resemblence means?',
						'What is the connection, do you suppose?',
						'Could there really be some connection?',
						'How?',
					]
				}
			]
		},
		{
			key: 'like',
			priority: 10,
			rules: [
				{
					pattern: /.* @be *like (.*)/i,
					responses: [
						'goto alike'
					],
					memFlag: false,
					goto: 'alike'
				}
			]
		},
		{
			key: 'different',
			priority: 1,
			rules: [
				{
					pattern: /.*/,
					responses: [
						'How is it different?',
						'What differences do you see?',
						'What does that difference suggest to you?',
						'What other distinctions do you see?',
						'What do you suppose that disparity means?',
						'Could there be some connection, do you suppose?',
						'How?',
					]
				}
			]
		}
	]
}
