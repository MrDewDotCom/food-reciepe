const recipes = [
    {
      name: "ไข่เจียว",
      ingredients: ["ไข่ 2 ฟอง", "น้ำปลา 1 ช้อนชา", "น้ำมันสำหรับทอด"],
      tools: ["ชาม", "ส้อมหรือตะกร้อมือ", "กระทะ", "ตะหลิว"],
      instructions: [
        "ตอกไข่ใส่ชาม ปรุงรสด้วยน้ำปลา",
        "ตีไข่ให้เข้ากัน",
        "ตั้งกระทะใส่น้ำมัน รอจนร้อน",
        "เทไข่ลงไปทอดจนสุก"
      ]
    },
    {
      name: "ข้าวผัด",
      ingredients: ["ข้าวสวย", "ไข่", "ผัก", "ซีอิ๊วขาว"],
      tools: ["ชาม", "กระทะ", "ตะหลิว"],
      instructions: [
        "ตั้งกระทะใส่น้ำมัน ใส่ไข่เจียวพอสุก",
        "ใส่ข้าวสวยลงไปผัด",
        "เติมผักและปรุงรสด้วยซีอิ๊วขาว",
        "ผัดจนเข้ากันดี"
      ]
    },
    {
        name: "ไข่ต้ม",
        ingredients: ["ไข่", "น้ำ"],
        tools: ["หม้อ", "เตา"],

        instructions: [
          "ตั้งหม้อ",
          "ใส่น้ำในหม้อ",
          "ต้มน้ำในหม้อให้เดือด",
          "ใส่ไข่ลงหม้อ"
        ]
      },
      {
        name: "ไก่ทอดพี่เดียสุดเเซ่บ",
        tools: ["ชาม", "ตู้เย็น", "กระทะ", "ตะหลิว"],
        ingredients: [
            "น้ำตาล",
            "พริกไทยป่น",
            "ผงกระเทียม",
            "ไก่",
            "เกลือป่น",
            "เกลือ",
            "เเป้งทอดกรอบ/ข้าวโพด",
            "น้ำมัน",
            "น้ำเปล่า"],
        instructions: [
          "ผสม เกลือป่นน้ำตาล พริกไทยป่น ผงกระเทียม พริกป่นเกาหลี/ผงปาปริก้า ให้เข้ากัน ใส่ลงไปบนเนื้อไก่ที่เราเตรียมไว้ คลุกเคล้าส่วนผสมให้เข้ากัน พักไว้อย่างน้อย 3 ชม.หรือพักทิ้งไว้ในตู้เย็น 1 คืน",
          "เอาไก่ที่หมักได้ที่แล้ว มาชุปแป้งที่เราผสมไว้ แป้งสาลีเอนกประสงค์+แป้งทอดกรอบ(แป้งข้าวโพด) เกลือป่น ผงปาปริก้าหรือพริกป่นเกาหลี(ไม่ใส่ก็ได้)จากนั้นนำไปชุปในน้ำเย็นจัด แล้วนำมาชุปแป้งอีกรอบ อยากได้แป้งหนาๆทำแบบเดียวกันได้หลายรอบตามต้องการ",
          "เมื่อน้ำมันร้อนได้ที่นำไก่ลงไปทอดให้สุก ให้มีสีเหลืองทอง",
          "พักสะเด็ดน้ำมัน"
        ]
      }
  ];
  const searchInput = document.getElementById('search-input');
  const menuList = document.getElementById('menu-list');
  const recipeDetail = document.getElementById('recipe-detail');
  const recipeTitle = document.getElementById('recipe-title');
  const ingredientsList = document.getElementById('ingredients');
  const instructionsList = document.getElementById('instructions');
  const toolsList = document.getElementById('tools');

  
  function displayMenus(filteredRecipes) {
    menuList.innerHTML = '';
    filteredRecipes.forEach((recipe, index) => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.textContent = recipe.name;
      card.onclick = () => showRecipe(recipes.indexOf(recipe)); // ใช้ index จาก original list
      menuList.appendChild(card);
    });
  }
  
  recipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.textContent = recipe.name;
    card.onclick = () => showRecipe(index);
    menuList.appendChild(card);
  });
  
  function showRecipe(index) {
    const recipe = recipes[index];
    recipeTitle.textContent = recipe.name;

    toolsList.innerHTML = '';
        recipe.tools.forEach(tool => {
        const li = document.createElement('li');
        li.textContent = tool;
        toolsList.appendChild(li);
    });

  
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ing => {
      const li = document.createElement('li');
      li.textContent = ing;
      ingredientsList.appendChild(li);
    });
  
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(ins => {
      const li = document.createElement('li');
      li.textContent = ins;
      instructionsList.appendChild(li);
    });
  
    menuList.style.display = 'none';
    recipeDetail.classList.remove('hidden');
  }
  
  function goBack() {
    recipeDetail.classList.add('hidden');
    menuList.style.display = 'grid';
  }
  searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(keyword)
    );
    displayMenus(filtered);
  });
  displayMenus(recipes);
  