export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat", // Nova feature
				"fix", // Bug fix
				"docs", // Documentação
				"style", // Formatação (não afeta código)
				"refactor", // Refatoração
				"perf", // Performance
				"test", // Testes
				"chore", // Manutenção (deps, config)
				"ci", // CI/CD
				"build", // Build system
				"revert", // Reverter commit
			],
		],
	},
};
