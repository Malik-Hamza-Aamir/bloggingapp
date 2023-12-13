const Button = () => {
    const handleClick = () => {
        console.log("get started button clicked");
    }

  return (
    <button onClick={() => handleClick} type="button" >Get Started</button>
  )
}

export default Button