## overview

Tarot web app built with React JS. It generates readings of three random cards, and it also includes a filterable list of all cards, with details, characteristics and meanings for each of them. The project is built using [this json dataset](https://www.kaggle.com/datasets/lsind18/tarot-json) by Daria Chemkaeva on Kaggle.

#### notes 

I decided to code this Tarot app after coming across an old project that I made when I was first learning coding.
That version was a simple three-card spread, with a shuffle button to selected three random cards. I thought it would be cool to add a meaning or explanation for each card, and then I thought it would be even cooler to create a "catalogue" of all the cards, with the interpretations and details for all of them. 

This is the results: there's a "Reading" section, which selects and displays an interpretation for three random cards, and a "Catalogue" section, which stores more in-depth details for all cards. 

The data is taken from [this json object](https://www.kaggle.com/datasets/lsind18/tarot-json), which features "fortune tellings", or short predictions, as well as the traditional meanings (both upright and reversed) for each card. I chose to use the short predictions in the reading section, and as a result the reading doesn't make a distinction between upright and reversed cards (the prediction being the same in both cases). 

The different meanings, with the distinction between light (upright) and shadow (reversed), can be looked up in the catalogue section. 

Cards can be filtered by suit (major arcana, wands, cups, swords and pentacles) or searched by name.




