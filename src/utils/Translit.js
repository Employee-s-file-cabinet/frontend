export default function translit(word) {
  const converter = {
    sch: 'щ',

    yo: 'ё',
    zh: 'ж',
    ch: 'ч',
    sh: 'ш',
    yu: 'ю',
    ya: 'я',
    yi: 'й',

    a: 'а',
    b: 'б',
    v: 'в',
    g: 'г',
    d: 'д',
    e: 'е',
    z: 'з',
    i: 'и',
    k: 'к',
    l: 'л',
    m: 'м',
    n: 'н',
    o: 'о',
    p: 'п',
    r: 'р',
    s: 'с',
    t: 'т',
    u: 'у',
    f: 'ф',
    h: 'х',
    c: 'ц',
    y: 'ы',
    _: ' ',
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(converter)) {
    // eslint-disable-next-line no-param-reassign
    word = word.replaceAll(key, value);
  }

  return word;
}
