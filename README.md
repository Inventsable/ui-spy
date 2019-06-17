# ui spy (under construction)

## Contexts

### For development

- Ensure `index-dev.html` is uncommented in `CSXS/manifest.xml`

```xml
  <Resources>
    <MainPath>./public/index-dev.html</MainPath>
    <!-- <MainPath>./dist/index.html</MainPath> -->
```

- Run `npm run serve` in the terminal at the project root
- Launch host application and find in Window > Extensions

> Panel now updates in real time and recompiles every time you save in VSCode

### For production

- Ensure `dist/index.html` is uncommented in `CSXS/manifest.xml`

```xml
  <Resources>
    <!-- <MainPath>./public/index-dev.html</MainPath> -->
    <MainPath>./dist/index.html</MainPath>
```

- Run `npm run build` in the terminal at the project root
- Launch host application and find in Window > Extensions

> Panel is now ready to sign and certify or be used on any client
