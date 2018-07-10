---
layout: about


label: Heading
type: text
name: title
title: About


label: Main Image
type: file
name: main-image
main-image: "/uploads/main-image.jpg"


label: Sub Title
type: text
name: sub-title
sub-title: This site is about me and my work and is entirely my fault.


label: Description
type: text
name: description
description: I founded Manoverboard, a design studio focused on driving social change, in 2002 in Brooklyn with the idea of pushing the boundaries of design for innovative businesses and nonprofit organizations. Mostly what I do there is design and send emails and talk on the phone. I cut my real design teeth designing Barneys New York’s first ecommerce site and the nonprofit Acumen’s first visual identity. I hold a B.A. from Brown University and and M.F.A from the University at Albany SUNY. I received a Fulbright Fellowship and a New York Foundation for the Arts Fellowship. I worked at the The Rockefeller Foundation for many years. I was an instructor at Red River College and served as provincial chapter president of Graphic Designers of Canada. Contact me at andrew@manoverboard.com


label: Resume Link
type: text
name: resume-link
resume-link: "/uploads/main-image.jpg"


label: List One Title
type: text
name: list_1_title
list_1_title: "A few clients at Manoverboard."


label: List One
type: list
name: list1
list1:
    - Acumen Fund
    - Global Alliance for Children


label: List Two Title
type: text
name: list_2_title
list_2_title: "A few articles I wrote."


label: List Two
type: field_group_list
name: list2
fields:
- label: Item 
  type: text
  name: item
- label: Link
  type: text
  name: link
list2:
 - item: Acumen Fund
   link: google.com
   

label: List Three Title
type: text
name: list_3_title
list_3_title: "A few talks I gave."
   
   
label: List Three
type: field_group_list
name: list3
fields:
- label: Item 
  type: text
  name: item
- label: Link
  type: text
  name: link
list3:
 - item: Acumen Fund
   link: google.com
 

menu:
  navigation:
    identifier: _about
    url: "/about/"
    weight: 3
---
