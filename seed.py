from werkzeug.security import generate_password_hash
from app import app
from models import db, Admin, Captain, House

PASSWORD = generate_password_hash("tes123")

def seed_admin():
    if not Admin.query.filter_by(username="admin").first():
        admin = Admin(
            name="Super Admin",
            username="admin",
            password_hash=PASSWORD
        )
        db.session.add(admin)
        print("✅ Admin created")
    else:
        print("⚠️ Admin already exists")


def seed_captains():
    houses = House.query.all()

    for house in houses:
        username = f"captain_{house.name.lower().replace(' ', '_')}"
        
        if Captain.query.filter_by(username=username).first():
            print(f"⚠️ Captain for {house.name} already exists")
            continue

        captain = Captain(
            name=f"Captain of {house.name}",
            username=username,
            password_hash=PASSWORD,
            house_id=house.id
        )
        db.session.add(captain)
        print(f"✅ Captain created for {house.name}")


def run_seed():
    with app.app_context():
        seed_admin()
        seed_captains()
        db.session.commit()
        print("🌱 Seeding completed")


if __name__ == "__main__":
    run_seed()
