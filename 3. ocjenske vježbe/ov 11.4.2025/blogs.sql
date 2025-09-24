use webshop;
DROP TABLE IF EXISTS blogs;
CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    author VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO blogs (title, excerpt, content, author) VALUES
(
    'Intel Unveils 15th Gen Core Processors',
    'Intel has officially launched its 15th Gen Core processors.',
    'Intel has officially launched its 15th Gen Core processors, codenamed “Arrow Lake.” The new chips are built on Intel’s 20A process node and bring significant performance-per-watt improvements. Enthusiasts are especially excited about the unlocked i9-15900K, which boasts a boost clock of up to 6.2GHz and supports DDR5-8000 memory out of the box.',
	'Dave'
),
(
    'NVIDIA RTX 5090 Leak: Monster Specs Incoming?',
    'A leaked spec sheet suggests NVIDIA’s upcoming GeForce RTX 5090.',
    'A leaked spec sheet suggests NVIDIA’s upcoming GeForce RTX 5090 may ship with a whopping 28,672 CUDA cores, 48GB of GDDR7 VRAM, and an enormous 800W TDP. While NVIDIA hasn’t confirmed anything yet, rumors indicate a release window around Q3 2025, likely to coincide with major AAA game launches. Gamers are hopeful this card will handle 8K gaming and ray tracing without breaking a sweat.',
	'Dave'
),
(
    'ASUS Launches AI-Optimized Motherboards',
    'ASUS is taking AI integration to the next level.',
    'ASUS is taking AI integration to the next level with their new AI Pro Series motherboards. These boards come with built-in AI chipsets that can auto-tune fan curves, overclocking profiles, and even RGB lighting based on your daily usage patterns.',
    'Clara'
),
(
    'Intel Unveils 15th Gen Core Processors',
    'Intel has officially launched its 15th Gen Core processors.',
    'Intel has officially launched its 15th Gen Core processors, codenamed “Arrow Lake.” The new chips are built on Intel’s 20A process node and bring significant performance-per-watt improvements. Enthusiasts are especially excited about the unlocked i9-15900K, which boasts a boost clock of up to 6.2GHz and supports DDR5-8000 memory out of the box.',
	'Dave'
),
(
    'NVIDIA RTX 5090 Leak: Monster Specs Incoming?',
    'A leaked spec sheet suggests NVIDIA’s upcoming GeForce RTX 5090.',
    'A leaked spec sheet suggests NVIDIA’s upcoming GeForce RTX 5090 may ship with a whopping 28,672 CUDA cores, 48GB of GDDR7 VRAM, and an enormous 800W TDP. While NVIDIA hasn’t confirmed anything yet, rumors indicate a release window around Q3 2025, likely to coincide with major AAA game launches. Gamers are hopeful this card will handle 8K gaming and ray tracing without breaking a sweat.',
	'Dave'
),
(
    'ASUS Launches AI-Optimized Motherboards',
    'ASUS is taking AI integration to the next level.',
    'ASUS is taking AI integration to the next level with their new AI Pro Series motherboards. These boards come with built-in AI chipsets that can auto-tune fan curves, overclocking profiles, and even RGB lighting based on your daily usage patterns.',
    'Clara'
),
(
    'Intel Unveils 15th Gen Core Processors',
    'Intel has officially launched its 15th Gen Core processors.',
    'Intel has officially launched its 15th Gen Core processors, codenamed “Arrow Lake.” The new chips are built on Intel’s 20A process node and bring significant performance-per-watt improvements. Enthusiasts are especially excited about the unlocked i9-15900K, which boasts a boost clock of up to 6.2GHz and supports DDR5-8000 memory out of the box.',
	'Dave'
),
(
    'NVIDIA RTX 5090 Leak: Monster Specs Incoming?',
    'A leaked spec sheet suggests NVIDIA’s upcoming GeForce RTX 5090.',
    'A leaked spec sheet suggests NVIDIA’s upcoming GeForce RTX 5090 may ship with a whopping 28,672 CUDA cores, 48GB of GDDR7 VRAM, and an enormous 800W TDP. While NVIDIA hasn’t confirmed anything yet, rumors indicate a release window around Q3 2025, likely to coincide with major AAA game launches. Gamers are hopeful this card will handle 8K gaming and ray tracing without breaking a sweat.',
	'Dave'
),
(
    'ASUS Launches AI-Optimized Motherboards',
    'ASUS is taking AI integration to the next level.',
    'ASUS is taking AI integration to the next level with their new AI Pro Series motherboards. These boards come with built-in AI chipsets that can auto-tune fan curves, overclocking profiles, and even RGB lighting based on your daily usage patterns.',
    'Clara'
),
(
    'Intel Unveils 15th Gen Core Processors',
    'Intel has officially launched its 15th Gen Core processors.',
    'Intel has officially launched its 15th Gen Core processors, codenamed “Arrow Lake.” The new chips are built on Intel’s 20A process node and bring significant performance-per-watt improvements. Enthusiasts are especially excited about the unlocked i9-15900K, which boasts a boost clock of up to 6.2GHz and supports DDR5-8000 memory out of the box.',
	'Dave'
),
(
    'NVIDIA RTX 5090 Leak: Monster Specs Incoming?',
    'A leaked spec sheet suggests NVIDIA’s upcoming GeForce RTX 5090.',
    'A leaked spec sheet suggests NVIDIA’s upcoming GeForce RTX 5090 may ship with a whopping 28,672 CUDA cores, 48GB of GDDR7 VRAM, and an enormous 800W TDP. While NVIDIA hasn’t confirmed anything yet, rumors indicate a release window around Q3 2025, likely to coincide with major AAA game launches. Gamers are hopeful this card will handle 8K gaming and ray tracing without breaking a sweat.',
	'Dave'
),
(
    'ASUS Launches AI-Optimized Motherboards',
    'ASUS is taking AI integration to the next level.',
    'ASUS is taking AI integration to the next level with their new AI Pro Series motherboards. These boards come with built-in AI chipsets that can auto-tune fan curves, overclocking profiles, and even RGB lighting based on your daily usage patterns.',
    'Clara'
)