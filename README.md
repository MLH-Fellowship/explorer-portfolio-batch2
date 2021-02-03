# Portfolio Template

This is a Jekyll website template designed for Explorer Fellows. During the Fellowship, you'll generate a number of projects 

This can also be used for Open Source and Externship Fellows but you might need to make some tweaks.

## Make your own!

1. Fork this repository or use the Template button.
2. Update `_config.yml` to contain your information.
    1. Change `url` to be what your Github Pages will be (the name of the repository)
    2. Make sure it has the /
3. Go to the repository settings and turn on GitHub Pages

## Add your portfolio

Head to `_data` and fill out either `projects.yml`, `experience.yml`, `education.yml` and `achievements.yml`.

Project example.
```yaml
- title: Machine Learning Project
  event: MLH Fellowship Explorer Sprint 3 - Batch 1
  date: Fall 2020
```

Experience example.
```yaml
- role: Open Source Fellow
  company: MLH Fellowship
  dates: Summer 2020
  logo: fellowship.svg
```

Education example.
```yaml
- course: Explorer Fellow
  institute: MLH Fellowship
  dates: Fall 2020
  logo: fellowship.svg
```

Achievement example.
```yaml
- title: Winner at MLH Hackathon
  date: Jan 2021
```

## Add project posts

1. Make a new `.md` file inside of `projects`.
2. Add the header to your markdown file (see below) and change the title to the name of your blog post.
3. Write your project page! Can be a README from GitHub or your Devpost page.
4. Add the `page-name` field to your `projects.yml` (see below).

Top of post markdown file post.
```
---
title: Sprint 1 Project
layout: page
---
```

`projects.yml` with the `page-name` field.

```yaml
- title: Machine Learning Project
  event: MLH Fellowship Explorer Sprint 3 - Batch 1
  date: Fall 2020
  page-name: sprint1
```
## Add Contact Us form

1. Create a formspree account and login with the credentials. | https://formspree.io/register
2. A verfication mail will be sent to the registered email id. Once the verification is done, you could add new forms.
3. Click on the new project button and then add new form in formspree profile with a name and a valid email id.
4. Once form is added successfully, you will be provided with form's endpoint in the `integeration` tab | 
    Example : https://formspree.io/f/mrgodpnk
5. Copy the end point and add it to the `form_url` in `_config.yml` file and then you are good to go! :)
    Example : `form_url: "https://formspree.io/f/mrgodpnk"`
6. All the submissions will be visible on the `submissions` tab. :D

## Development

If you want to test it locally or add some new features, run the below commands. Make sure to have Ruby and Bundler installed.

```
bundle install
bundle exec jekyll serve
```
## Customizing Page Components

You can customize the following components by changing their variable values in `_sass/variables.scss`:
1. `herobackground` : Background colour for the profile area
2. `font_family` : Font style/family used
3. `text_color` : Colour of the text used
4. `link` : Hyperlink colour
5. `title_color` : Colour used for the title
6. `body_background` : Background Colour used for the page
7. `cardnum_big` : Number of cards for a relatively big screen
8. `cardnum_medium` : Number of cards for a relatively medium-sized screen
9. `cardnum_small` : Number of cards for a relatively small screen
10. `card_font_size` : Font size used within the cards
11. `title_font_size` : Font size for the title
12. `fontsize_h1` : Font size for h1 headings
13. `fontsize_h2` : Font size for h2 headings
14. `fontsize_h1_profile` : Font size for h1 headings in the profile section 