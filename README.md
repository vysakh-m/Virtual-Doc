<p align="center">
<img alt="" src="https://i.postimg.cc/NF4GgyXD/Screenshot-790.png" />
<br/>
<a href="CONTRIBUTING.md"><img alt="Contributions Welcome" src="https://img.shields.io/badge/contributions-welcome-brightgreen?style=for-the-badge&labelColor=black&logo=github"></a>
<br/>
<a href="LICENSE"><img alt="GitHub License Apache-2.0" src="https://img.shields.io/github/license/vysakh-m/Virtual-Doc?style=for-the-badge&labelColor=black&logo=github"></a>

<p align="center">

 <img src="https://forthebadge.com/images/badges/built-with-love.svg">  <img src="https://forthebadge.com/images/badges/made-with-python.svg">  <img src="https://forthebadge.com/images/badges/made-with-javascript.svg">  <img src="https://forthebadge.com/images/badges/open-source.svg">

</p>
<br/>
<i>Me and soumyadip created this project at the time of  <a href="https://octahacks.tech/">OCTAHACKS</a> conducted by <a href="https://twitter.com/dscciet">DSC_CIET</a>. This project is related to Health care.
Main aim of this project is to provide Quick and accessible medical assistance like malaria detection,pneumonia detection, diabestes detection within your browser using SOTA Deep Learning models using which people can varify their state in one click.
We putted together eight different diseases like Diabetes,breast-cancer,malaria including COVID to help people get medical services promptly.</i>.
<br/><br/>



# Services this web-app provides🌟:
<br/>
<i>Via this project we provide user to check their health status for different disease like malaria,diabetes, breast-cancer including Covid.All the different diseases that we support right now is listed below.
Please these are base models, so no hyperparameter tuning is done right now and as we used DL for building the models so acc is very less compared to ML algos.</i>.
<br/><br/>

1. **Breast Cancer Detection** : <i>Its a type of cancer that forms in the cells of the breasts,mainly occur in women and rarely in men.
Ten real-valued features are computed for each cell nucleus,like-radius,texture,area,perimeter,diagnose(M = malignant, B = benign) etc.Accuracy of the model is 70.71%</i>
2. **Chronic kidney disease Detection**: <i>we are using different features like, age,bp,specific gravity,sugar,blood glucose,anemia etc. to predict that a person has a ckd or not.Accuracy of the model is 62.5%</i>
3. **Pneumonia Detection** : <i>we are trying to identify is someone has viral-Pneumonia or bacterial-Pneumonia or they are normal. using the image data.Accuracy of the model is ~60% </i>
4. **Liver disease Detection**: <i>we are trying to identify if some has liver diseas or not,by liver diseas it means different kind of diseas that can be occured in a liver because of excessive consumption of alcohol, inhale of harmful gases, intake of contaminated food, pickles and drugs etc, example: liver damage.Accuracy of the model is 71.64%</i>
5. **Diabetes Detection**: <i>we are trying to identify if some onr has diabetes or not based on some parameters like, Diastolic blood pressure,Triceps skin fold thickness,Body mass index,Diabetes pedigree function age etc.Accuracy of the model is 78.3%</i>
6. **Malaria Detection** : <i> we are tring to identify if someone has malaria or not based on effected cell images, we have total of 27.5k images for malaria.Accuracy of the model is 93.39%</i>
7. **Covid Detection** : <i>Covid is a rising problem, and people are finding different ways to solve that, we tried from our side to come up with a better solution. we used 400+ images to train the model and there is only two class covid or normal.
<br>PS:Accuracy of the model is 75%(checked it in local.so you might find that acc is much higher but there was some mistake in the ipynb,but fixed it for py file)</i>
8. **Heart disease Detection** : <i>Find out you have any chance of having heart disease or not. To do that just provide your different test results like blood sugar, serum cholesterol, maximum heart rate achieved etc. and in one click know your state.Accuracy of the model is 56%</i>

# Tech-stack used ☸: 
<i>for the web-dev part MERN stack and tensorflow.js is used and for model building tf 2.x is used</i>
|Node.js|Express.JS|React.JS|MongoDB|Tensorflow.JS|
|-------|----------|--------|-------|-------------|
|Run Time Environment|Backend Framework|Frontend Framework|Database|Model Prediction|

|tf2.x|pandas|Numpy|Opencv|Matplotlib|
|-------|----------|--------|-------|-------------|
|Deep Learning|Data Analysis|Data handling|For Image data|Visualization|

<i>PS: we used Deep Learning to do the Model Building because we had very less time during the hackathon and we needed to connect the python model with nodejs backend. For that two do that two 
we had two options </i>
<br>
<i>
1. Using ML alogs and host it via flask and connect that via node.
2. Using DL models and convert that to tfjs and use the .bin and .json to connect with the backend.

We choose the 2nd option, 1st option was not viable because it could cause problem while deploying the app.And none of us had that much exp for doing that, we could actually do that but time was very less during the hackathon.So,
we concentrated we full fill the core idea of our project. If you know any other way to connect python models to node backend then please create an issue or make a PR after implementing.
</i>
# User Interface📱:
<pre>
<img src="https://i.imgur.com/Qk8SYa2.jpg" width="900"> <img src="https://i.imgur.com/kWEC073.jpg" width="900"> <img src="https://i.imgur.com/bLKuj8F.jpg" width="900"> <img src="https://i.imgur.com/kTAybGA.jpg" width="900"> <img src="https://i.ibb.co/KVbDjSn/rsz-screenshot-169.jpg" width="900">

</pre>


# Future Perspectives 🤔
1. Adding personalized Dashboard for users, where we can give then certain badges which shows their status for tested diseases.
2. Quick medical servie via near-by medical shop or pharmacy.
3. Medical fundraising system
4. Video appointment with doctor.
5. Review system.
6. Model improvements.

**NOTE :** If you can implement any on the above mentioned features then feel free to make a PR😊.  
# File structure 📂:
1. converted tfjs models are in the [All_tfjs_models](https://github.com/vysakh-m/Virtual-Doc/tree/main/All_tfjs_models) folder.
2. Data for heart,diabetes,kidney,cancer is provided in the [data](https://github.com/vysakh-m/Virtual-Doc/tree/main/data) folder.
3. All the python files are present in the [model_training_py_file](https://github.com/vysakh-m/Virtual-Doc/tree/main/model_training_py_files) folder.(If you face running the files then i'm sorry cause i have not tried them in py system beacause of the size of dataset)
4. in the notebook the model building is done.

# Contributors:
 
 <table>
  <tr>
    <td align="center"><a href="https://github.com/vysakh-m"><img src="https://avatars0.githubusercontent.com/u/29486171?s=400&v=4" width="100px;" alt=""/><br /><sub><b>VYSAKH MURALI</b></sub></a><br /><a href="https://github.com/vysakh-m/Virtual-Doc/commits?author=vysakh-m" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/soumya997"><img src="https://avatars0.githubusercontent.com/u/54326088?v=4" width="100px;" alt=""/><br /><sub><b>Soumyadip Sarkar</b></sub></a><br /><a href="https://github.com/vysakh-m/Virtual-Doc/commits?author=soumya997" title="Code">💻</a></td>
  </tr>
</table>
 
 
 

 
 
 
