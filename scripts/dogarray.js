// https://www.akc.org/dog-breeds/


const dogChars = {
    'Affenpinscher' : ['giggly', 'happy'],
    "Afghan Hound" : [],
    'Airedale Terrier' : [],
    'Akbash' : [],
    Akita
    Alaskan Malamute
    American Bulldog
    American Bully
    American Eskimo Dog
    American Foxhound
    American Hairless Terrier
    American Staffordshire Terrier
    American Water Spaniel
    Anatolian Shepherd
    Appenzell Mountain Dog
    Aussiedoodle
    `Australian Cattle Dog / Blue Heeler`
    Australian Kelpie
    Australian Shepherd
    Australian Terrier
    Basenji
    Basset Hound
    Beagle 
    Bearded Collie
    Beauceron
    Bedlington Terrier
    Belgian Shepherd / Laekenois
    Belgian Shepherd / Malinois
    Belgian Shepherd / Sheepdog
    Belgian Shepherd / Tervuren
    Bernedoodle
    Bernese Mountain Dog
    Bichon Frise
    Black and Tan Coonhound
    Black Labrador Retriever
    Black Mouth Cur
    Black Russian Terrier
    Bloodhound
    Blue Lacy
    Bluetick Coonhound
    Boerboel
    Bolognese
    Border Collie
    Border Terrier
    Borzoi
    Boston Terrier
    Bouvier des Flandres
    Boxer
    Boykin Spaniel
    Briard
    Brittany Spaniel
    Brussels Griffon
    Bull Terrier
    Bullmastiff
    Cairn Terrier
    Canaan Dog
    Cane Corso
    Cardigan Welsh Corgi
    Carolina Dog
    Catahoula Leopard Dog
    Cattle Dog
    Caucasian Sheepdog / Caucasian Ovtcharka
    Cavachon
    Cavalier King Charles Spaniel
    Cavapoo
    Chesapeake Bay Retriever
    Chihuahua
    Chinese Crested Dog
    Chinese Foo Dog
    Chinook
    Chiweenie
    Chocolate Labrador Retriever
    Chow Chow
    `Cirneco dell'Etna`
    Clumber Spaniel
    Cockapoo
    Cocker Spaniel
    Collie
    Coonhound
    Corgi
    Coton de Tulear
    Curly-Coated Retriever
    Dachshund
    Dalmatian
    Dandie Dinmont Terrier
    Doberman Pinscher
    Dogo Argentino
    Dogue de Bordeaux
    Dutch Shepherd
    English Bulldog
    English Cocker Spaniel
    English Coonhound
    English Foxhound
    English Pointer
    English Setter
    English Shepherd
    English Springer Spaniel
    English Toy Spaniel
    Entlebucher
    Eskimo Dog
    Feist
    Field Spaniel
    Fila Brasileiro
    Finnish Lapphund
    Finnish Spitz
    Flat-Coated Retriever
    Fox Terrier
    Foxhound
    French Bulldog
    Galgo Spanish Greyhound
    German Pinscher
    German Shepherd Dog
    German Shorthaired Pointer
    German Spitz
    German Wirehaired Pointer
    Giant Schnauzer
    Glen of Imaal Terrier
    Golden Retriever
    Goldendoodle
    Gordon Setter
    Great Dane
    Great Pyrenees
    Greater Swiss Mountain Dog
    Greyhound
    Hamiltonstovare
    Harrier
    Havanese
    Hound
    Hovawart
    Husky
    Ibizan Hound
    Icelandic Sheepdog
    Illyrian Sheepdog
    Irish Setter
    Irish Terrier
    Irish Water Spaniel
    Irish Wolfhound
    Italian Greyhound
    Jack Russell Terrier
    Japanese Chin
    Jindo
    Kai Dog
    Karelian Bear Dog
    Keeshond
    Kerry Blue Terrier
    Kishu
    Klee Kai
    Komondor
    Kuvasz
    Kyi Leo
    Labradoodle
    Labrador Retriever
    Lakeland Terrier
    Lancashire Heeler
    Leonberger
    Lhasa Apso
    Lowchen
    Lurcher
    Maltese
    Maltipoo
    Manchester Terrier
    Maremma Sheepdog
    Mastiff
    McNab
    Miniature Bull Terrier
    Miniature Dachshund
    Miniature Pinscher
    Miniature Poodle
    Miniature Schnauzer
    Mixed Breed
    Morkie
    Mountain Cur
    Mountain Dog
    Munsterlander
    Neapolitan Mastiff
    New Guinea Singing Dog
    Newfoundland Dog
    Norfolk Terrier
    Norwegian Buhund
    Norwegian Elkhound
    Norwegian Lundehund
    Norwich Terrier
    Nova Scotia Duck Tolling Retriever
    Old English Sheepdog
    Otterhound
    Papillon
    Parson Russell Terrier
    Patterdale Terrier / Fell Terrier
    Pekingese
    Pembroke Welsh Corgi
    Peruvian Inca Orchid
    Petit Basset Griffon Vendeen
    Pharaoh Hound
    Pit Bull Terrier
    Plott Hound
    Pointer
    Polish Lowland Sheepdog
    Pomeranian
    Pomsky
    Poodle
    Portuguese Podengo
    Portuguese Water Dog
    Presa Canario
    Pug
    Puggle
    Puli
    Pumi
    Pyrenean Shepherd
    Rat Terrier
    Redbone Coonhound
    Retriever
    Rhodesian Ridgeback
    Rottweiler
    Rough Collie
    Saint Bernard
    Saluki
    Samoyed
    Sarplaninac
    Schipperke
    Schnauzer
    Schnoodle
    Scottish Deerhound
    Scottish Terrier
    Sealyham Terrier
    Setter
    Shar-Pei
    Sheep Dog
    Sheepadoodle
    Shepherd
    Shetland Sheepdog / Sheltie
    Shiba Inu
    Shih poo
    Shih Tzu
    Shollie
    Siberian Husky
    Silky Terrier
    Skye Terrier
    Sloughi
    Smooth Collie
    Smooth Fox Terrier
    South Russian Ovtcharka
    Spaniel
    Spanish Water Dog
    Spinone Italiano
    Spitz
    Staffordshire Bull Terrier
    Standard Poodle
    Standard Schnauzer
    Sussex Spaniel
    Swedish Vallhund
    Tennessee Treeing Brindle
    Terrier
    Thai Ridgeback
    Tibetan Mastiff
    Tibetan Spaniel
    Tibetan Terrier
    Tosa Inu
    Toy Fox Terrier
    Toy Manchester Terrier
    Toyger
    Treeing Walker Coonhound
    Vizsla
    Weimaraner
    Welsh Springer Spaniel
    Welsh Terrier
    West Highland White Terrier / Westie
    Wheaten Terrier
    Whippet
    White German Shepherd
    Wire Fox Terrier
    Wirehaired Dachshund
    Wirehaired Pointing Griffon
    Wirehaired Terrier
    Xoloitzcuintli / Mexican Hairless
    Yellow Labrador Retriever
    Yorkshire Terrier
}