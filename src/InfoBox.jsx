 
import Card from '@mui/material/Card';
 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 
import Typography from '@mui/material/Typography';
import img from './assets/imgDusty.avif'
import './InfoBox.css'

const InfoBox = ({info}) => {
console.log(info);
  return (
    < > 
    <div className="InfoBox"> 
      
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {info.city}
        </Typography>
        <Typography variant="body2"  component="span"sx={{ color: 'text.secondary' }}>
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humadity = {info.humadity}</p>
           <p>Min Temp = {info.tempMin}</p>
           <p>Min Temp = {info.tempMax}</p>
           <p>The weather can be described as <i> {info.weather}</i> feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
       
    </Card>
     </div>
     <h1>hello</h1>
     
     </>
  )
}

export default InfoBox;