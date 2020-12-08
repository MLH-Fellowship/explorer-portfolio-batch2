# Portfolio Template

This is a Jekyll website template designed for Explorer Fellows. During the Fellowship, you'll generate a number of projects 

This can also be used for Open Source and Externship Fellows but you might need to make some tweaks.

## Make your own!

1. Fork this repository
2. Go to the repository settings and turn on GitHub Pages

## Add your portfolio

Head to `_data` and fill out either `education.yml`, `experience.yml` and `projects.yml`.

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

## Development

Make sure to have Ruby and Bundler installed.

```
bundle install
bundle exec jekyll serve
```
