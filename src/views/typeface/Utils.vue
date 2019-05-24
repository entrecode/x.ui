sectionGroups: [
        {
          config: `
// link styles
$link-color: $link;
$link-decoration: none;
$link-weight: $is-normal; // normal
$link-style: ();

$link-hover-color: set-hover($link-hover);
$link-hover-decoration: $link-decoration;
$link-hover-style: ();

// for <small> elements
$inline-small-style: ();

// <mark> style
$mark-color: $highlight-contrast;
$mark-background: $highlight;
$mark-style: ();`,
        },
      ],