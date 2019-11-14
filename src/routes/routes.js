const appRoutes = app => {
	app.get('/api/users', (req, res) => {
		res.send('An API endpoint in the future');
	});

	app.get('/api/user/:id/settings', (req, res) => {
		res.send('Another API enpoint in the future');
	});
};

export default appRoutes;
