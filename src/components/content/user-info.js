export const USER_INFO = {
	id: 1,
	firstName: 'Кристофер',
	lastName: 'Бан',
	surname: '',
	photo: 'https://i.pinimg.com/736x/4b/e8/8e/4be88eda8da2adb41f8985faa387821b.jpg',
	address: 'Сеул, официальный офис JYP',
	email: 'christopherbang@gmail.com',
	phone: '+375555555555',
	createdAt: '10.05.2025',
	pets: [
		{
			id: 1,
			photo: 'https://i.pinimg.com/736x/1c/81/9b/1c819b71cd71d464a720b1ec49f08ce5.jpg',
			name: 'Берри',
			type: 'Американская акита',
			weight: '5',
			age: '7',
			description: 'Милая собачка Берри',
		},
		{
			id: 2,
			photo: 'https://i.pinimg.com/736x/1c/81/9b/1c819b71cd71d464a720b1ec49f08ce5.jpg',
			name: 'Берри',
			type: 'Американская акита',
			weight: '5',
			age: '7',
			description: 'Милая собачка Берри',
		},
		{
			id: 3,
			photo: 'https://i.pinimg.com/736x/1c/81/9b/1c819b71cd71d464a720b1ec49f08ce5.jpg',
			name: 'Берри',
			type: 'Американская акита',
			weight: '5',
			age: '7',
			description: 'Милая собачка Берри',
		},
	],
	services: [
		{
			id: 1,
			title: 'Стрижка',
			description:
				'Профессиональный уход за шерстью питомца с учетом его породы и типа волос. Используем качественные инструменты и безопасные средства для стрижки. Гарантируем комфортное и бережное обращение с животным.',
			photo: 'https://i.pinimg.com/736x/ca/c7/55/cac7556c64ddafb3bec61f4585800c2b.jpg',
			serviceOwnerFirstName: 'Алексей',
			serviceOwnerLastName: 'Морозов',
			serviceOwnerPhoto: '/img/users/alexey.jpg',
			address: 'г. Москва, ул. Цветочная, 15',
			price: '1200 руб.',
			userEmail: 'alexey.morozov@example.com',
		},
		{
			id: 2,
			title: 'Груминг',
			description:
				'Комплексный уход за питомцем, включая стрижку, купание, чистку ушей и уход за когтями. Все процедуры проводятся в комфортных условиях, с использованием гипоаллергенных средств и специализированного оборудования.',
			photo: 'https://i.pinimg.com/736x/ca/c7/55/cac7556c64ddafb3bec61f4585800c2b.jpg',
			serviceOwnerFirstName: 'Елена',
			serviceOwnerLastName: 'Кузнецова',
			serviceOwnerPhoto: '/img/users/elena.jpg',
			address: 'г. Санкт-Петербург, пр. Невский, 45',
			price: '2500 руб.',
			userEmail: 'elena.kuznetsova@example.com',
		},
		{
			id: 3,
			title: 'Купание',
			description:
				'Щадящее купание с использованием специальных шампуней, подобранных под тип кожи и шерсти питомца. Включает массаж, сушку и укладку шерсти. Вода комфортной температуры, без стресса для животного.',
			photo: 'https://i.pinimg.com/736x/ca/c7/55/cac7556c64ddafb3bec61f4585800c2b.jpg',
			serviceOwnerFirstName: 'Михаил',
			serviceOwnerLastName: 'Сидоров',
			serviceOwnerPhoto: '/img/users/mikhail.jpg',
			address: 'г. Казань, ул. Пушкина, 10',
			price: '1800 руб.',
			userEmail: 'mikhail.sidorov@example.com',
		},
	],
	forumPosts: [
		{
			id: 1,
			title: 'Как создать идеальные условия для питомца?',
			content:
				'Домашние животные — это не только радость, но и большая ответственность. Подскажите, что нужно подготовить для нового питомца?',
			createdAt: '2025-05-07T20:45:00Z',
			postOwnerId: 1,
			postOwnerFirstName: 'Кристофер',
			postOwnerLastName: 'Бан',
			postOwnerPhoto:
				'https://i.pinimg.com/736x/6c/ef/23/6cef23f7fc0df9f93d0c0baabbf0c8c1.jpg',
			comments: [
				{
					id: 1,
					commentatorId: 201,
					commentatorFirstName: 'Дмитрий',
					commentatorLastName: 'Смирнов',
					commentatorPhoto:
						'https://i.pinimg.com/736x/52/31/6c/52316c4148b976eca609337b3c1a7502.jpg',
					content:
						'Важно правильно подобрать корм и обеспечить питомцу уютное место для сна.',
					createdAt: '2025-05-07T21:00:00Z',
				},
				{
					id: 2,
					commentatorId: 202,
					commentatorFirstName: 'Елена',
					commentatorLastName: 'Кузнецова',
					commentatorPhoto:
						'https://i.pinimg.com/736x/d7/3d/bc/d73dbc03e7c455558a3f428d8f5bdecc.jpg',
					content: 'Не забудьте о регулярных визитах к ветеринару!',
					createdAt: '2025-05-07T21:05:00Z',
				},
				{
					id: 3,
					commentatorId: 203,
					commentatorFirstName: 'Сергей',
					commentatorLastName: 'Волков',
					commentatorPhoto:
						'https://i.pinimg.com/736x/eb/b3/75/ebb3755408a39cbbb1d87fe641d682df.jpg',
					content: 'Лучше заранее купить игрушки, чтобы щенок не грыз мебель.',
					createdAt: '2025-05-07T21:10:00Z',
				},
				{
					id: 4,
					commentatorId: 204,
					commentatorFirstName: 'Мария',
					commentatorLastName: 'Белоусова',
					commentatorPhoto:
						'https://i.pinimg.com/736x/12/86/cc/1286ccd23653f813714f82f260f85b93.jpg',
					content:
						'Заведите отдельную миску для воды и обеспечьте доступ к ней.',
					createdAt: '2025-05-07T21:15:00Z',
				},
			],
		},
		{
			id: 2,
			title: 'Как правильно социализировать щенка?',
			content:
				'Когда лучше начинать социализацию щенка, чтобы он комфортно чувствовал себя среди людей и других животных?',
			createdAt: '2025-05-07T20:50:00Z',
			postOwnerId: 1,
			postOwnerFirstName: 'Кристофер',
			postOwnerLastName: 'Бан',
			postOwnerPhoto:
				'https://i.pinimg.com/736x/94/4b/eb/944bebfd4dbda62bf229529f5f603015.jpg',
			comments: [
				{
					id: 1,
					commentatorId: 205,
					commentatorFirstName: 'Алексей',
					commentatorLastName: 'Морозов',
					commentatorPhoto:
						'https://i.pinimg.com/736x/94/4b/eb/944bebfd4dbda62bf229529f5f603015.jpg',
					content:
						'Социализацию лучше начинать с двух месяцев, постепенно вводя новые знакомства.',
					createdAt: '2025-05-07T21:20:00Z',
				},
				{
					id: 2,
					commentatorId: 206,
					commentatorFirstName: 'Юлия',
					commentatorLastName: 'Соколова',
					commentatorPhoto:
						'https://i.pinimg.com/736x/94/4b/eb/944bebfd4dbda62bf229529f5f603015.jpg',
					content:
						'Регулярные прогулки помогут щенку привыкнуть к окружающей среде.',
					createdAt: '2025-05-07T21:25:00Z',
				},
				{
					id: 3,
					commentatorId: 207,
					commentatorFirstName: 'Михаил',
					commentatorLastName: 'Кравцов',
					commentatorPhoto:
						'https://i.pinimg.com/736x/94/4b/eb/944bebfd4dbda62bf229529f5f603015.jpg',
					content:
						'Важно знакомить щенка с разными людьми и животными, но без стресса.',
					createdAt: '2025-05-07T21:30:00Z',
				},
				{
					id: 4,
					commentatorId: 208,
					commentatorFirstName: 'Анна',
					commentatorLastName: 'Лебедева',
					commentatorPhoto:
						'https://i.pinimg.com/736x/94/4b/eb/944bebfd4dbda62bf229529f5f603015.jpg',
					content:
						'Лакомства помогут создать положительное впечатление от новых встреч!',
					createdAt: '2025-05-07T21:35:00Z',
				},
			],
		},
		{
			id: 3,
			title: 'Как приучить кота к лотку?',
			content:
				'Котенок иногда игнорирует лоток. Какие методы работают лучше всего?',
			createdAt: '2025-05-07T20:52:00Z',
			postOwnerId: 1,
			postOwnerFirstName: 'Кристофер',
			postOwnerLastName: 'Бан',
			postOwnerPhoto:
				'https://i.pinimg.com/736x/94/4b/eb/944bebfd4dbda62bf229529f5f603015.jpg',
			comments: [
				{
					id: 1,
					commentatorId: 209,
					commentatorFirstName: 'Ольга',
					commentatorLastName: 'Фролова',
					commentatorPhoto:
						'https://i.pinimg.com/736x/94/4b/eb/944bebfd4dbda62bf229529f5f603015.jpg',
					content:
						'Попробуйте использовать лоток с низкими бортиками, чтобы коту было удобно.',
					createdAt: '2025-05-07T21:40:00Z',
				},
				{
					id: 2,
					commentatorId: 210,
					commentatorFirstName: 'Григорий',
					commentatorLastName: 'Зайцев',
					commentatorPhoto:
						'https://i.pinimg.com/736x/94/4b/eb/944bebfd4dbda62bf229529f5f603015.jpg',
					content: 'Используйте наполнитель, который нравится вашему коту.',
					createdAt: '2025-05-07T21:45:00Z',
				},
				{
					id: 3,
					commentatorId: 211,
					commentatorFirstName: 'Ксения',
					commentatorLastName: 'Васильева',
					commentatorPhoto:
						'https://i.pinimg.com/736x/b5/ad/85/b5ad8574e4957ddb40b474ca5cffabfe.jpg',
					content:
						'Регулярно чистите лоток, чтобы кот не отказывался им пользоваться.',
					createdAt: '2025-05-07T21:50:00Z',
				},
				{
					id: 4,
					commentatorId: 212,
					commentatorFirstName: 'Роман',
					commentatorLastName: 'Михайлов',
					commentatorPhoto:
						'https://i.pinimg.com/736x/b5/ad/85/b5ad8574e4957ddb40b474ca5cffabfe.jpg',
					content:
						'Ставьте лоток в спокойном месте, где кот чувствует себя безопасно.',
					createdAt: '2025-05-07T21:55:00Z',
				},
			],
		},
	],
};
