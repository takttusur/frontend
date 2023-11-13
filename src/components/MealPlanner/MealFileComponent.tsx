import { Button } from '@chakra-ui/react';

function MealFileComponent(props) {
  const {
    data,
  } = props;
  const handleLoad = () => {

  };

  const handleSave = () => {
    var content = JSON.stringify(data, null, 2);

    var file = new File(["\ufeff"+content], 'myFile.txt', {type: "text/plain:charset=UTF-8"});

    let url = window.URL.createObjectURL(file);

    var a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = file.name;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Button onClick={handleLoad}>Load</Button>
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
}

export default MealFileComponent;
