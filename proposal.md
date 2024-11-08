Final Project Proposal
================
Zhenkun Fang, Weiqi Liang, Shiyu Zhang, Zeqi Li
2024-11-08

## Team members

- Zhenkun Fang (zf2352)
- Weiqi Liang (wl3011)
- Shiyu Zhang (sz3319)
- Zeqi Li (zl3545)

## Tentative project title

Barking Up the Right Tree: Analyzing Trends, Geographic Hotspots, and
Contributing Factors for Public Safety

## Motivation

Dogs have always been known as “people’s best friend,” playing an
important role in American households. However, while they bring us joy
and companionship, we cannot overlook the rising number of dog bite
incidents. In fact,
[data](https://wisqars.cdc.gov/lcnf/?y1=2022&y2=2022&ct=20&cc=0&s=0&g=00&a=lcd1age&a1=0&a2=199&d=0)
from 2022 shows that dog bites are among the top 15 reasons for nonfatal
emergency department visits across all age groups, highlighting a
serious public health issue.

This project aims to investigate the complex relationships between dog
bite incidents and various factors, such as dog characteristics,
geographical distribution, and trends over time:

- **Geographical Distribution:** By examining dog bite rates in
  different zip code areas, we hope to pinpoint potential hotspots and
  explore whether there is a correlation between the frequency of
  incidents and the density of dog populations in those areas.
- **Dog Characteristics:** We’ll look into whether specific traits of
  dogs—like breed, age, gender, and whether they are neutered—are linked
  to how often bites occur. This analysis could help in developing
  targeted strategies to reduce the risk of dog bites.
- **Trends Over Time:** We will investigate how the rates of dog bites
  have changed over time, particularly from 2015 to 2021.

We hope this analysis could help in developing targeted strategies to
reduce the risk of dog bites.

## Intended final products

The expected final website will consist of the following parts:

**Introduction page**: Demonstrate the background of our study, display
screen cast, pictures of dog breed in the dataset, a general map
illustrating where dog bites occurred.

**Statistics analysis**: This page will introduce the statistical
methodologies used to analyze the relationship between dog bite
occurrences and dog demographics. It will also present the results and
diagnostic assessments.

**Visualizations plot**: This section will include charts, graphs, and
maps showcasing the geographical distribution of dog bites in New York.
It will display occurrences across different dog breeds, sexes, and
ages, and use facet plots to show trends over different years and
boroughs. It will also compare the distribution of dog bites with the
NYC dog licensing data.

Meanwhile, we will prepare a detailed analysis report on the
distribution of dog bites in New York, examining contributing factors
such as sex, age, breed, and licensing status.

## Data sources

**Dog bite incidents**

A [dataset](https://www.kaggle.com/datasets/muhmiqbal/dog-bites-nyc) of
dog bite cases in New York City for different genders, breeds, and ages.
Data were taken from NYC Open Data for 2015-2021.

**Dog license**

A
[dataset](https://www.kaggle.com/datasets/sahirmaharajj/dog-licensing-dataset)
of dog license records that were active during 2014-2023. Data is
sourced from the DOHMH Dog Licensing System, where owners can apply for
and renew dog licenses.

## Planned analyses, visalizations, and coding challenges

**I. Correlation between dog bite incidents and the background of dogs**

*1.1 Trends in annual number of dog bite incidents*

A combined bar and line chart illustrates the fluctuations in dog bite
incidents in NYC from 2015 to 2021, with the years on the X-axis and
both the frequency and rate of incidents plotted on the Y-axis.

*1.2 Correlation between the number of dog bite incidents and dogs’
background*

Background characteristics of dogs includes gender, breed, age, and
neutering status.

**II. Correlation between dog bite incidents and the geographical
distribution of dogs**

*2.1 Spatial distribution of dog bite incidents*

On a map of NYC, use color blocks to show the relative geographic
increase in dog populations and mark the total number of dog bite
incidents in each zipcode with dots.

*2.2 Spatial characteristics of dog bite incidents*

Using the Global Moran’s Index, assess whether the spatial distribution
of dog bite incidents in NYC exhibits spatial correlation and clustering
characteristics.

**III. Cumulative impact of various factors on dog bite incidents**

Use negative binomial regression (or Poisson regression, depending on
test outcomes) to measure the combined effects of year, dog background
(i.e., gender, age, and neutering status), and the borough rate of dog
bite incidents.

## Timeline

- Nov 03 - Nov 09:
  - Choose a project topic
  - Familiarize with the datasets
  - Complete proposal *(due 11/08)*
- Nov 10 - Nov 16:
  - Tidy up the datasets
  - Draft the data, motivation, related work, and initial questions
    sections of the report
  - Get preliminary visualizations
  - Meet with a course staff to review the project
- Nov 17 - Nov 23:
  - Finalize visualizations
  - Draft the exploratory analysis, additional analysis, and discussion
    sections of the report
- Nov 24 - Nov 30:
  - Draft website
  - Draft screencast outline
- Dec 01 - Dec 07:
  - Record screencast *(due 12/07)*
  - Finalize website and report *(due 12/07)*
