FactoryBot.define do
  factory :score do
    name { ["alice", "bob", "charlie"].sample }
    time { rand(1..20) }
    level { rand(0..2) }
  end
end