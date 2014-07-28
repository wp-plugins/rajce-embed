﻿=== Rajce embed ===
Contributors: honza.skypala
Donate link: http://www.honza.info
Tags: gallery, image, images, embed, oembed
Requires at least: 3.9
Tested up to: 3.9.1
Stable tag: 1.1
License: WTFPL license applies

Embeds photos and photo-albums stored on rajce.net as native WordPress galleries

== Description ==

For English, see below.

<strong>Czech</strong>: Tento plug-in umožňuje snadno vložit obrázky nebo celá alba hostovaná na (v Česku) populárním serveru rajce.net (rajce.idnes.cz) do vašich příspěvků ve WordPressu. Vložená galerie pak vypadá jako nativní galerie WordPressu, používá stejný vizuální styl.

Vkládání obrázků nebo celých alb se provádí stejně jako standardní oEmbed vkládání: vložte jako samostatný odstavec ve vašem příspěvku URL adresu obrázku nebo celého alba hostovaného na rajce.net. Při zobrazení se pak namísto této adresy objeví příslušný obrázek nebo celé album. Podívejte se do <a href="http://wordpress.org/plugins/rajce-embed/faq/">sekce FAQ</a> pro více detailů.

<strong>Upozornění</strong>: vzhled galerie (jak je zobrazena) je určen šablonou, kterou vaše konkrétní instalace WordPressu používá. Podívejte se do <a href="http://wordpress.org/plugins/rajce-embed/faq/">sekce FAQ</a> pro více detailů.

Tento plugin pro vkládání alb z rajce.net spolupracuje s jiným mým pluginem <a href="http://wordpress.org/plugins/gallery-slice/">Gallery Slice</a> pro zobrazování náhledu alba na domovské stránce a archivech, doporučuji vyzkoušet.

<strong>English</strong>: rajce.net is a popular Czech image hosting and sharing web service. This plug-in serves for embedding of images or whole albums hosted on rajce.net into WordPress posts.

== Installation ==

1.	Nahrajte tento plugin do adresáře wp-content/plugins
2.	Aktivujte plugin Rajce embed ve správě pluginů
3.	Pro zobrazení obrázku nebo alba, vložte jeho URL adresu jako samostatný odstavec v příspěvku.

== Screenshots ==

1.	Vložte do příspěvku URL adresu galerie na webu rajce.net (rajce.idnes.cz)
2.	Při zobrazení se ukáže příslušná galerie

== Frequently Asked Questions ==

Základní používání pluginu funguje tak, že vložíte do příspěvku jako samostatný odstavec URL adresu obrázku nebo celého alba a při zobrazení se pak zobrazí tento obrázek nebo celé album. Například

<code>http://ukazka.rajce.net/Brno_v_noci_-_ukazka_velkeho_rozliseni</code>

zobrazí celou galerii uloženou na této adrese. Naproti tomu

<code>http://ukazka.rajce.net/Brno_v_noci_-_ukazka_velkeho_rozliseni#DSC_2804.jpg</code>

vloží do příspěvku jeden obrázek z této galerie.

Zobrazení vloženého obrázku je jednoduché -- pokud je obrázek větší než šírka obsahu (příspěvku), pak se obrázek "zmáčkne" na tuto šířku, při kliknutí na něj se zobrazí v plné velikosti. Pokud na webu používáte některý z mnoha různých LightBoxů, měl by se automaticky ten využít pro zobrazení plné velikosti.

Složitější je to se zobrazením galerie: vložené album je totiž naformátováno stejně jako výchozí galerie WordPressu, měl by se tedy na něj aplikovat styl, který používá vámi používaná šablona. To je záměr — album vložené z Rajčete má vypadat stejně jako ostatní alba ve vašem WordPressu. Jenže ono to není až tak úplně jednoduché. Výsledek jsem vyzkoušel na pěti výchozích šablonách WordPressu twentyten až twentyfourteen, zde jsou výsledky (vezměme to odzadu, tedy od nejnovější šablony twentyfourteen):

* twentyfourteen — vše funguje nejlépe, jak je možné; náhledy na obrázky jsou zobrazeny ve velikosti, jakou máte zadánu v Nastavení → Média → Velikost náhledu; pokud máte zapnutu volbu <em>Oříznout náhled podle přesných rozměrů</em>, pak je náhled naformátován tak, že zabere celou tuto velikost (obrázek není deformován, proporce jsou zachovány, ale to, co se nevejde, je oříznuto).
* twentythirteen — situace je stejná jako u twentyfourteen, vše funguje tak, jak má
* twentytwelve — šablona používá starší verzi HTML kódu pro zobrazování galerie, proto není podporována varianta, aby v případě zapnuté volby Nastavení → Média → <em>Oříznout náhled podle přesných rozměrů</em> obrázky zabíraly celou velikost nastavení pro náhledy. Jinak se galerie zobrazuje v pořádku
* twentyeleven — zatímco při zobrazení samostatného příspěvku je galerie zobrazena v pořádku (byť tak jako v šabloně twentytwelve), při zobrazení homepage nebo archivu, pokud je formát příspěveku nastaven na "Galerie", pak se vložená galerie vůbec neukáže. Pokud je ovšem ponechán výchozí formát "Standard", galerie je zobrazena i na homepage a archivech. Je to z toho důvodu, že šablona používá pro zobrazení formátu "Galerie" na homepagi a v archivech svůj vlastní specifický kód, který o galeriích vkládaných z rajčete nic neví (a ani tento specifický kód galerie nelze napíchnout vlastním hookem, abych to ošetřil). Aby galerie byla zobrazována i zde, bylo by zapotřebí upravit šablonu
* twentyten — situace úplně stejná jako u šablony twentyeleven

Jak vidíte, zobrazování galerie je velmi závislé na použité šabloně. Bohužel to je něco, co nelze obecně v pluginu ošetřit. Pokud se galerie vkládané tímto pluginem nezobrazují na vašem webu dle vašich představ, je zapotřebí upravit vámi používanou šablonu. Prosím, nežádejte mě, abych vám já upravoval vaše šablony, na to nemám prostor. Jen několik rad pro toho, kdo to bude dělat (ať už vy osobně nebo někdo, kdo vám s vaším webem pomáhá): nejprve doporučuji doplnit do vaší šablony podporu pro html5 galerie (inspirujte se prosím v šabloně twentyfourteen; bude zapotřebí aktualizovat vaše CSS soubory); dále je možné zobrazování galerií vytvářených tímto pluginem stylizovat skrz třídu .gallery-embed-rajce, kterou div obalující galerii obsahuje navíc ke všem standardním třídám pro galerie.

Vkládání tímto pluginem podporuje také standardní atributy (pro galerie i obrázky), například u galerií počet sloupců (standardní počet sloupců je 3). Pokud potřebujete toto využít, pak je zapotřebí vložení obalit shortcodem embed a do něj uvést příslušné atributy. Například:

<code>[embed columns="4"]http://ukazka.rajce.net/Brno_v_noci_-_ukazka_velkeho_rozliseni[/embed]</code>

Stejným způsobem je možné používat atributy podporované mým pluginem <a href="http://wordpress.org/plugins/gallery-slice/">Gallery Slice</a>, budou se aplikovat i na galerie vkládané tímto pluginem.

Vložené obrázky i galerie mohou také zobrazovat popisky fotek z rajce.net. Tato volba je ve výchozím stavu vypnutá, zapnout je možné ji buď v Nastavení → Média, nebo individuálně v každém vloženém objektu, použitím atributu v shortcodu embed. Pro obrázek je použit atribut caption, pro galerii je použit atribut captions (množné číslo). Ten může nabývat následujících hodnot:

* buď bez hodnoty nebo caption="on" — zapne zobrazování popisku(ů) pro tento vložený objekt; jako popisek je použit název fotky z rajce.net, pokud není vyplněný, pak popis fotky z rajce.net, pokud není vyplněný, pak jméno souboru s fotkou
* caption="off" — vypne zobrazování popisku(ů) pro tento vložený objekt a to i v takovém případě, kdy je zobrazování popisků zapnuto v Nastavení → Média
* caption="name" — zapne zobrazování popisku(ů) pro tento vložený objekt; jako popisek je použit název fotky z rajce.net, pokud není vyplněn, pak se nezobrazí žádný popisek.
* caption="desc" — zapne zobrazování popisku(ů) pro tento vložený objekt; jako popisek je použit popis fotky z rajce.net, pokud není vyplněn, pak se nezobrazí žádný popisek.
* caption="vlastní text" — zapne zobrazování popisku pro tento vložený objekt; jako popisek je použit vlastní text z tohoto atributu. Tato volba funguje pouze pro vkládané obrázky, nefunguje pro vkládané galerie

Příklad:

<code>[embed captions]http://ukazka.rajce.net/Brno_v_noci_-_ukazka_velkeho_rozliseni[/embed]</code>

Popisky jsou zobrazeny tak, jak je zobrazuje šablona, kterou používáte na Vaší instalaci WordPressu.

Při vložení galerie plugin vkládá do kódu ještě mini-náhled (jeden obrázek reprezentující celou galerii, popis, počet fotek, rozbalení na plnou galerii). Tento mini-náhled je standardně skrytý a vůbec se nezobrazuje. Pokročilí tvůrci šablon/webů ho mohou využít například při tvorbě responsivních webů, mobilních verzí nebo vkládání galerie do chatu. Pro jeho využití použijte detailnější specifikaci CSS selectoru než je výchozí, div s mini-náhledem používá třídu gallery-embed-rajce-mini-preview. Pokud dáte div.gallery-embed-rajce-mini-preview display: block, umístí se popisky zarovnané nahoru k obrázku, pokud použijete display: table, umístí se popisky vertikálně vycentrované.

Plugin <em>Rajce embed</em> nabízí také zpětnou kompatibilitu se starším pluginem <a href="http://wordpress-rajce.ic.cz/">Rajče WP</a>, to znamená, že pokud jste dosavad používali plugin <em>Rajče WP</em>, můžete ho nahradit pluginem <em>Rajce embed</em> a plugin <em>Rajče WP</em> deaktivovat. Nicméně, aby zpětná kompatibilita fungovala, musíte ještě aktivovat malý plugin <em>Zpětná kompatibilita Rajce embed s WP Rajče</em>, který je součástí tohoto pluginu. Tato zpětná kompatibilita je oddělena do samostatného pluginu, aby nezatěžovala uživatele, kteří ji nevyužijí (nezatěžováním mám na mysli zpracovávání příspěvku na straně serveru).

Pokud jste tedy dosavad používali plugin <em>WP Rajče</em>, deaktivujte ho a aktivujte pluginy <em>Rajce embed</em> a <em>Zpětná kompatibilita Rajce embed s WP Rajče</em> -- poté se Vaše starší příspěvky s vloženými galeriemi pomocí pluginu WP Rajče budou nyní zobrazovat i s tímto novým pluginem.

== Changelog ==

= 1.1 =
* Bug-fixes and warning-fixes
= 1.0 =
* Initial release

== License ==

WTFPL License 2.0 applies

<code>           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                   Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 0. You just DO WHAT THE FUCK YOU WANT TO.</code>