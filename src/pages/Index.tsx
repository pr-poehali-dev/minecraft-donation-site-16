import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donationPackages = [
    {
      rank: "VIP",
      price: "199₽",
      color: "minecraft-green",
      features: [
        "Приватный дом 10x10",
        "Кит VIP раз в день",
        "Доступ к /tpa",
        "Цветной ник",
        "100 слотов в инвентаре"
      ]
    },
    {
      rank: "PREMIUM",
      price: "399₽", 
      color: "minecraft-blue",
      features: [
        "Приватный дом 20x20",
        "Кит PREMIUM раз в 12 часов",
        "Доступ к /fly",
        "Анимированный ник",
        "Личный варп",
        "200 слотов в инвентаре"
      ]
    },
    {
      rank: "DELUXE",
      price: "699₽",
      color: "minecraft-yellow", 
      features: [
        "Приватный дом 30x30",
        "Кит DELUXE раз в 6 часов",
        "Креативный режим в доме",
        "Радужный ник",
        "5 личных варпов",
        "500 слотов в инвентаре",
        "Доступ к /god"
      ]
    }
  ];

  const serverFeatures = [
    { icon: "Home", title: "Выживание", description: "Классическое выживание с друзьями" },
    { icon: "Sword", title: "PvP арена", description: "Сражайся с другими игроками" },
    { icon: "Building", title: "Креатив", description: "Строй без ограничений" },
    { icon: "Users", title: "Гильдии", description: "Создавай альянсы" }
  ];

  const news = [
    {
      date: "25 августа",
      title: "Обновление 2.3",
      content: "Добавлены новые биомы и структуры!"
    },
    {
      date: "20 августа", 
      title: "Ивент на выходных",
      content: "Двойной опыт и ресурсы до понедельника"
    },
    {
      date: "15 августа",
      title: "Новые правила",
      content: "Обновлены правила сервера, ознакомьтесь"
    }
  ];

  const rules = [
    "Запрещено использование читов и модификаций",
    "Уважайте других игроков",
    "Не стройте рядом с чужими домами без разрешения", 
    "Запрещен спам в чате",
    "Не ломайте чужие постройки"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-minecraft-brown to-minecraft-dark">
      {/* Header */}
      <header className="border-b-4 border-minecraft-brown bg-minecraft-dark/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-minecraft text-white pixel-font">
              🏰 MINECRAFT SERVER
            </h1>
            <div className="flex gap-4">
              <Button className="minecraft-button bg-minecraft-green hover:bg-minecraft-green/80 text-white pixel-font">
                IP: play.server.ru
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <img 
            src="/img/7201eb46-181b-45ef-ad82-287004a2a552.jpg"
            alt="Minecraft Server"
            className="mx-auto mb-8 rounded-lg shadow-2xl max-w-md w-full"
            style={{ imageRendering: 'pixelated' }}
          />
          <h2 className="text-6xl font-minecraft text-white mb-6 pixel-font animate-pulse">
            ДОБРО ПОЖАЛОВАТЬ!
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto pixel-font">
            Лучший сервер для выживания с друзьями. Присоединяйся к нашему сообществу!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="minecraft-button bg-minecraft-green hover:bg-minecraft-green/80 text-white pixel-font">
              <Icon name="Play" className="mr-2" />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline" className="minecraft-button border-white text-white hover:bg-white/10 pixel-font">
              <Icon name="MessageSquare" className="mr-2" />
              Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-minecraft-dark border-2 border-minecraft-brown">
              <TabsTrigger value="donate" className="pixel-font text-white data-[state=active]:bg-minecraft-green">Донат</TabsTrigger>
              <TabsTrigger value="features" className="pixel-font text-white data-[state=active]:bg-minecraft-green">Сервер</TabsTrigger>
              <TabsTrigger value="rules" className="pixel-font text-white data-[state=active]:bg-minecraft-green">Правила</TabsTrigger>
              <TabsTrigger value="news" className="pixel-font text-white data-[state=active]:bg-minecraft-green">Новости</TabsTrigger>
              <TabsTrigger value="contacts" className="pixel-font text-white data-[state=active]:bg-minecraft-green">Контакты</TabsTrigger>
            </TabsList>

            {/* Donation Packages */}
            <TabsContent value="donate" className="mt-8">
              <div className="grid gap-8 md:grid-cols-3">
                {donationPackages.map((pkg, index) => (
                  <Card key={index} className="minecraft-card relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-${pkg.color}`} />
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-3xl font-minecraft pixel-font text-gray-800">
                        {pkg.rank}
                      </CardTitle>
                      <CardDescription className="text-2xl font-bold text-minecraft-green pixel-font">
                        {pkg.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 pixel-font text-gray-700">
                            <Icon name="Check" className="text-minecraft-green" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 minecraft-button bg-minecraft-green hover:bg-minecraft-green/80 text-white pixel-font">
                        <Icon name="ShoppingCart" className="mr-2" />
                        Купить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Server Features */}
            <TabsContent value="features" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {serverFeatures.map((feature, index) => (
                  <Card key={index} className="minecraft-card text-center">
                    <CardHeader>
                      <Icon name={feature.icon} className="mx-auto text-minecraft-green mb-2" size={48} />
                      <CardTitle className="pixel-font text-gray-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="pixel-font text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Rules */}
            <TabsContent value="rules" className="mt-8">
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="text-2xl pixel-font text-gray-800 flex items-center gap-2">
                    <Icon name="Shield" className="text-minecraft-green" />
                    Правила сервера
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3 pixel-font text-gray-700">
                        <Badge variant="outline" className="mt-0.5 min-w-[24px] text-center">
                          {index + 1}
                        </Badge>
                        {rule}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>

            {/* News */}
            <TabsContent value="news" className="mt-8">
              <div className="space-y-6">
                {news.map((article, index) => (
                  <Card key={index} className="minecraft-card">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="pixel-font text-gray-800">{article.title}</CardTitle>
                        <Badge variant="secondary" className="pixel-font">
                          {article.date}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="pixel-font text-gray-600">{article.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Contacts */}
            <TabsContent value="contacts" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="minecraft-card">
                  <CardHeader>
                    <CardTitle className="pixel-font text-gray-800 flex items-center gap-2">
                      <Icon name="MessageSquare" className="text-minecraft-green" />
                      Связь с нами
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 pixel-font text-gray-700">
                      <Icon name="MessageCircle" className="text-minecraft-blue" />
                      Discord: discord.gg/server
                    </div>
                    <div className="flex items-center gap-3 pixel-font text-gray-700">
                      <Icon name="Mail" className="text-minecraft-blue" />
                      Email: admin@server.ru
                    </div>
                    <div className="flex items-center gap-3 pixel-font text-gray-700">
                      <Icon name="Globe" className="text-minecraft-blue" />
                      Форум: forum.server.ru
                    </div>
                  </CardContent>
                </Card>

                <Card className="minecraft-card">
                  <CardHeader>
                    <CardTitle className="pixel-font text-gray-800 flex items-center gap-2">
                      <Icon name="Server" className="text-minecraft-green" />
                      Информация сервера
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 pixel-font text-gray-700">
                      <Icon name="MapPin" className="text-minecraft-blue" />
                      IP: play.server.ru
                    </div>
                    <div className="flex items-center gap-3 pixel-font text-gray-700">
                      <Icon name="Users" className="text-minecraft-blue" />
                      Онлайн: 247/300
                    </div>
                    <div className="flex items-center gap-3 pixel-font text-gray-700">
                      <Icon name="Gamepad2" className="text-minecraft-blue" />
                      Версия: 1.20.1
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-dark border-t-4 border-minecraft-brown py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="pixel-font text-gray-300">
            © 2024 Minecraft Server. Все права защищены.
          </p>
          <p className="pixel-font text-gray-400 mt-2">
            Сервер не является официальным продуктом Mojang Studios
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;