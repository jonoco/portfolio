---
layout: project
title:  Kyra
date:   2015-07-30 00:00:00 -0700
publish: true
categories: personal
tags: javascript phaser
summary: A Kyrandia remake using the Phaser framework.
links: 
    - name: Github
      link: https://github.com/jonoco/Kyra
    - name: Live
      link: http://jonoco.github.io/Kyra/
---
## Kyrandia is a point-and-click adventure game made by Westwood Studios in 1992.

This project is an attempt to recreate the game to the extent of the original Kyrandia demo game, which ends just after crossing the rickety bridge. This requires nearly all game mechanics to be functioning, while reducing the burden of cleaning/redrawing 85% of the games original art assets.

{% include image-card.html 
    src="/assets/images/kyra_2.png"
    alt="kyra 2" 
    summary="The game uses the original game sprites and backgrounds." 
%}

{% include image-card.html 
    src="/assets/images/kyra_1.png"
    alt="kyra 1" 
    summary="An event scripting system was created to allow characters to play animations as dialogue is displayed." 
%}

{% include image-card.html 
    src="/assets/images/kyra.gif"
    alt="kyra gif" 
    summary="Animations were created from tilemaps and controlled by the event scripting system, allowing special animations to play on certain conditions, such as entering a scene for the first time." 
%}