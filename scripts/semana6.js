System.config({
  transpiler: 'typescript',
  typescriptOptions: { emitDecoratorMetadata: true },
  packages: {'app': {defaultExtension: 'ts'}}
});

System.import('/angular2/src/app/hello_world_main')
	.then(null, console.error.bind(console));